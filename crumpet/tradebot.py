import datetime
import time

import numpy

import talib
from crumpet.strategy import ToTheMoonStrategy
from crumpet.tick import BackTick, Tick
from crumpet.utils import bcolors
from crumpet.wallet import Wallet
from poloniex import Poloniex
from tornado.gen import coroutine


class Tradebot(object):
    '''
    This class performs all the actions of required of a trading bot.
    '''

    def __init__(self, mode: str, wallet: Wallet, strategy: str, instrument: str, period: int, **kwargs) -> None:
        '''
        This function initializes a Classification object.
        :param fee: The maximum percentage fee taken by the exchange per order.
        :param max_order_amount: The maximum amount of your wallet the bot can use.
        :param order_timeout: How many seconds until the order times out.
        :param strategy: The BUY/SELL strategy the bot will use.
        :param instrument: The crypto-currency the bot will use to trade against BTC.
        '''
        self.mode = mode
        self.market = Poloniex()
        self.period = period
        self.start_time = datetime.datetime.now()
        self.timer = self.start_time
        self.minimum_amount = 0.01
        self.currency_pair = instrument + '_BTC'
        self.last_short = 0
        self.last_long = 0
        self.tickers = []
        self.wins = 0
        self.losses = 0
        self.total = 0
        self.old_buy_price = 0

        if mode == 'backtest':
            self.start_date = time.mktime(kwargs.get('start_date').timetuple())
            self.end_date = time.mktime(kwargs.get('end_date').timetuple())

        if kwargs.get('sma_period') == '':
            sma_period = 25
        else:
            sma_period = kwargs.get('sma_period')

        if kwargs.get('ema_period') == '':
            ema_period = 13
        else:
            ema_period = kwargs.get('ema_period')

        if strategy == 'To The Moon':
            strategy = ToTheMoonStrategy(
                sma_period=float(sma_period),
                ema_period=float(ema_period),
                timestamp=self.start_time)

        self.strategy = strategy
        self.wallet = wallet

    def __repr__(self):
        return '%s(%s)' % (self.__class__.__name__, self.strategy)

    def restart(self):
        pass

    def increment_timer(self):
        self.timer += datetime.timedelta(minutes=self.period / 60)

    @coroutine
    def start_live_backtest(self):
        self.init_live_bot_start()

        tick = Tick()

        while True:
            timer = self.get_time()
            data = self.market.returnTicker()['BTC_' + self.wallet.instrument]
            tick.add_tick(data)
            tick = self.strategy.decide(timer, tick, self.wallet)
            self.strategy.stats(timer)
            self.display_stats(timer, tick)
            self.increment_timer()
            time.sleep(self.period)

    def init_live_bot_start(self) -> None:
        timer = self.get_time()
        tick = Tick(self.market.returnTicker()['BTC_' + self.wallet.instrument])
        self.wallet.calculate_initial_investment(tick.close[0])
        print(timer + '| Starting price ' + str(tick.close[0]) + '|')

    def init_bot_start(self) -> []:
        timer = self.get_time()
        chart_data = self.market.returnChartData(
            currencyPair=str('BTC_' + self.wallet.instrument), period=int(self.period),
            start=self.start_date, end=self.end_date
        )
        tick = BackTick(chart_data[0])
        print(timer + '| Starting price ' + str(tick.close[0]) + '|')
        self.wallet.calculate_initial_investment(tick.close[0])
        return chart_data

    def get_time(self):
        return self.timer.strftime("%Y-%m-%d %H:%M:%S")

    @coroutine
    def start(self):
        timer = self.get_time()
        data = self.init_bot_start()
        tick = BackTick()

        for ticker in data:
            tick.add_tick(ticker)
            tick = self.strategy.decide(timer, tick, self.wallet)
            self.strategy.stats(timer)
            self.display_stats(timer, tick)
            self.increment_timer()

        data = {
            "close": list(zip(tick.dates, tick.close)),
            "sma": list(zip(tick.dates, self.strategy.sma)),
            "ema": list(zip(tick.dates, self.strategy.ema)),
            "buys": tick.buys,
            "sells": tick.sells
        }
        return data

    def stop(self):
        pass

    @staticmethod
    def buy_and_hold(price, wallet):
        value = (((wallet.starting_assets * price) + wallet.starting_currency) - wallet.initial_investment)
        return (value / wallet.initial_investment) * 100

    @staticmethod
    def buy_and_hold_efficiency(tick):
        return ((tick.close[-1] / tick.close[0]) - 1) * 100

    def display_stats(self, timer, tick):
        print(timer + '|===================================================================|')

        if self.mode is 'backtest':
            print(timer + '| ' + str(self.period) + ' tick - High: ' + str(tick.high[-1]) + ' Low: ' +
                  str(tick.low[-1]))

        print(timer + '| Balance: ' + str(self.wallet.assets) + ' ' + self.wallet.instrument + ' ('
              + str(self.wallet.assets * tick.close[-1]) + ') ' + str(self.wallet.currency) + ' BTC')

        print(bcolors.OKGREEN + timer
              + '| Total BTC: ' + str(self.wallet.total_btc(tick.close[-1]))
              + '|BTC  PROFIT: (' + str(format(self.wallet.percent_btc_profit(tick.close[-1]), '.2f')) + ' %)'
              + bcolors.ENDC)

        print(timer + "| The current price: " + str(tick.close[-1]))

        print(timer + "| The buy and hold efficiency:  " +
              str(format(self.buy_and_hold_efficiency(tick), '.2f')) + "%")

        tick_ratio = ((tick.close[0] / tick.close[-1]) - 1) * 100
        if tick_ratio > 0:
            print(bcolors.OKGREEN + timer + '| Bot vs. Buy and Hold: ' +
                  str(format((self.wallet.percent_btc_profit(tick.close[-1]) / tick_ratio), '.2f')) + ' %)' + bcolors.ENDC)

        if (((tick.close[-1] / tick.close[0]) - 1) * 100) > 0:
            print(bcolors.OKGREEN + timer + '| Bot vs. Buy and Hold: ' +
                  str(format(((self.wallet.percent_btc_profit(tick.close[-1]) / (
                      ((tick.close[-1] / tick.close[0]) - 1) * 100)) - 1) * 100, '.2f')) + ' %)' + bcolors.ENDC)

        if tick.wins + tick.losses > 0:
            print(bcolors.OKGREEN + timer + "| WINS: " + str(tick.wins) + " LOSSES: " +
                  str(tick.losses) + " Total TRADES: " + str(tick.wins + tick.losses) + " (" +
                  str(format((tick.wins / (tick.wins + tick.losses) * 100), '.2f')) + "%)" + bcolors.ENDC)

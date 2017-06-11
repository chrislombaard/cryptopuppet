import datetime
import time
from typing import List

import numpy
import talib
from poloniex import Poloniex

import plotly
import plotly.plotly as py
import plotly.graph_objs as go

from tornado.gen import coroutine

MINIMUM_AMOUNT = 0.0001


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


class Annotation(object):
    '''
    This class keeps track of the annotations.
    '''

    def __init__(self):
        self.text = []

    @property
    def text_data(self):
        return self.text


class Wallet(object):
    '''
    This class keeps track of the current funds that a bot can utilize in trading.
    '''

    def __init__(self, assets: float, currency: float, instrument: str, fee: float = 0.25):
        '''
        This function initializes a Classification object.
        :param fee: The maximum percentage fee taken by the exchange per order.
        :param currency: The amount of currency (USD/ZAR) you have available to buy coins with.
        :param assets: The amount of the cypro-currency coins you have in your wallet ready to sell.
        :param instrument: The crypto-currency the bot will use to trade against BTC.
        '''
        self.instrument = instrument
        self.assets = assets
        self.currency = currency
        self.fee = fee
        self.starting_assets = assets
        self.starting_currency = currency
        self.initial_investment = 0

    def record_buy(self, buy_amount, price):
        '''
        Records the buy order transaction in the wallet.
        :param price: The current or closing price of the instrument.
        :param buy_amount: The amount to buy.
        '''
        self.assets += buy_amount
        self.currency -= (buy_amount * price)

    def record_sell(self, sell_amount, price):
        '''
        Records the sell order transaction in the wallet.
        :param price: The current or closing price of the instrument.
        :param sell_amount: The amount to sell.
        '''
        self.assets -= sell_amount
        self.currency += (sell_amount * price)

    def max_buy_amount(self, price):
        '''
        The maximum amount of a coin the bot can buy.
        :param price: The current or closing price of the instrument.
        '''
        return (self.currency / price) * (1 - (self.fee / 100))

    def max_sell_amount(self):
        '''
        The maximum amount of a coin the bot can sell.
        '''
        return self.assets * (1 - (self.fee / 100))

    def calculate_initial_investment(self, price: float):
        '''
        The initial investment made.
        :param price: The current or closing price of the instrument.
        '''
        self.initial_investment = (self.starting_assets * price) + self.starting_currency

    def percent_btc_profit(self, price):
        return ((((self.assets * price) + self.currency) - self.initial_investment) / self.initial_investment) * 100

    def total_btc(self, tick):
        return (self.assets * tick.close) + self.currency


class ToTheMoonStrategy(object):
    '''
    A simple strategy using the Simple Moving Averages (SMA) and Exponential Moving Averages (EMA) to determine
    when the bot should buy or sell a given asset.
    '''

    def __init__(self, instrument: str, time: datetime, sma_period: float = 25, ema_period: float = 13):
        '''
        The strategy is initialized.
        :param ema_period: period of the exponential moving average.
        :param sma_period: period of the simple moving average.
        :param instrument: The crypto-currency the bot will use to trade against BTC.
        '''
        time.strftime("%Y-%m-%d %H:%M:%S")
        print(bcolors.OKGREEN + str(time) +
              '|===================================================================|' + bcolors.ENDC)
        print(bcolors.OKGREEN + str(time) +
              '|-------------------- To The Moon And Back v0.1 --------------------|' + bcolors.ENDC)
        print(bcolors.OKGREEN + str(time) +
              '|===================================================================|' + bcolors.ENDC)
        self.sma_period = sma_period
        self.ema_period = ema_period
        self.instrument = instrument

    def decide(self, timer: str, price: float, ema: List, sma: List, wallet: Wallet) -> str:
        '''
        The function the bot uses to decide whether to BUY or SELL.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrument.
        :param ema: The array of EMA.
        :param sma: The array of SMA.
        '''
        max_buy_amount = wallet.max_buy_amount(price)
        max_sell_amount = wallet.max_sell_amount()

        if len(ema) > 1 and len(sma) > 1:
            if ema[-2] > sma[-2] and ema[-1] < sma[-1]:
                if max_buy_amount >= MINIMUM_AMOUNT:
                    self.buy(timer, max_buy_amount, price, wallet, timer)
                    return "buy"
            elif ema[-2] < sma[-2] and ema[-1] > sma[-1]:
                if max_sell_amount >= MINIMUM_AMOUNT:
                    self.sell(timer, max_sell_amount, price, wallet, timer)
                    return "sell"

        return "none"

    def buy(self, timer: str, amount: float, price: float, wallet: Wallet, time: datetime):
        '''
        The buy order is made and logged in the wallet.
        :param plot: The plot object used to keep track of the plotting data.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrumemt.
        :param amount: The amount of the asset the bot should buy
        '''
        # TODO: Use last price not close price for live bot you FUCK.
        print(bcolors.OKGREEN + timer + '| Order # POLONIEX ' + self.instrument + '/BTC BUY ' + str(
            amount) + ' at ' + str(price) + ' traded' + bcolors.ENDC)
        wallet.record_buy(amount, price)
        # record plot label

    def sell(self, timer: str, amount: float, price: float, wallet: Wallet, time: datetime):
        '''
        The sell order is made and logged in the wallet.
        :param plot: The plot object used to keep track of the plotting data.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrumemt.
        :param amount: The amount of the asset the bot should buy
        '''
        print(bcolors.OKGREEN + timer + '| Order # POLONIEX ' + self.instrument + '/BTC SELL ' + str(
            amount) + ' at ' + str(price) + ' traded' + bcolors.ENDC)
        wallet.record_sell(amount, price)


class Tick(object):
    '''
    A class that represents each tick pulled from the exchange at a certain time period.
    '''
    '''{
          'date': 1496674800,
          'high': '0.0948042',
          'low': '0.09411001',
          'open': '0.09411001',
          'close': '0.09428881',
          'volume': '118.24142059',
          'quoteVolume': '1253.26415617',
          'weightedAverage': '0.09434676'
          },
    '''
    # Live tick
    '''
    {
        "BTC_LTC": 
            {
                "last": "0.0251", 
                "lowestAsk": "0.02589999", 
                "highestBid": "0.0251", 
                "percentChange": "0.02390438",
                "baseVolume": "6.16485315", 
                "quoteVolume": "245.82513926"
            },
    }
    '''

    def __init__(self, data):
        if 'last' in data:
            self.close = float(data.get('last'))
            self.lowest_ask = float(data.get('lowestAsk'))
            self.highest_bid = float(data.get('highestBid'))
            self.percent_change = float(data.get('percentChange'))
            self.base_volume = float(data.get('baseVolume'))
            self.quote_volume = float(data.get('quoteVolume'))
        else:
            self.date = int(data.get('date'))
            self.high = float(data.get('high'))
            self.low = float(data.get('low'))
            self.open = float(data.get('open'))
            self.close = float(data.get('close'))
            self.volume = float(data.get('volume'))
            self.quote_volume = float(data.get('quoteVolume'))
            self.weighted_average = float(data.get('weightedAverage'))


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
        sma_period = 25
        ema_period = 13
        if kwargs.get('sma_period') == '':
            sma_period = 25

        if kwargs.get('ema_period') == '':
            ema_period = 13

        if strategy == 'To The Moon':
            strategy = ToTheMoonStrategy(
                instrument=instrument, sma_period=float(sma_period),
                ema_period=float(ema_period), time=self.start_time)

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
        timer = self.timer.strftime("%Y-%m-%d %H:%M:%S")
        start_tick = Tick(self.market.returnTicker()['BTC_' + self.wallet.instrument])
        self.wallet.calculate_initial_investment(start_tick.close)
        print(timer + '| Starting price ' + str(start_tick.close) + '|')

        last_list = []
        dates = []
        buys = []
        sells = []
        sma = []
        ema = []

        while True:
            tick = Tick(self.market.returnTicker()['BTC_' + self.wallet.instrument])
            last_list.append(tick.close)
            dates.append(tick.date)
            n_last_data = numpy.array(last_list, dtype=float)
            sma = talib.SMA(n_last_data, self.strategy.sma_period)
            ema = talib.EMA(n_last_data, self.strategy.ema_period)

            self.display_stats(timer, start_tick, tick, ema, sma)
            self.increment_timer()

            if (((tick.close / start_tick.close) - 1) * 100) > 0:
                print(bcolors.OKGREEN + timer + '| Bot vs. Buy and Hold: ' +
                      str(format(((self.wallet.percent_btc_profit(tick.close) / (
                          ((tick.close / start_tick.close) - 1) * 100)) - 1) * 100, '.2f')) + ' %)' + bcolors.ENDC)

            if self.wins + self.losses > 0:
                print(bcolors.OKGREEN + str(time) + "| WINS: " + str(self.wins) + " LOSSES: " +
                      str(self.losses) + " Total TRADES: " + str(self.wins + self.losses) + " (" +
                      str(format((self.wins / (self.wins + self.losses) * 100), '.2f')) + "%)" + bcolors.ENDC)

            if sma[-1] != 'nan' and ema[-1] != 'nan':
                order = self.strategy.decide(timer, tick.close, sma, ema, self.wallet)

            if order is "buy":
                self.old_buy_price = tick.close
                buys.append([len(dates) - 1, tick.close])
            elif order is "sell":
                if tick.close < self.old_buy_price:
                    self.losses += 1
                else:
                    self.wins += 1
                sells.append([len(dates) - 1, tick.close])

            time.sleep(self.period)

    @coroutine
    def start(self):
        timer = self.timer.strftime("%Y-%m-%d %H:%M:%S")
        chart_data = self.market.returnChartData(
            currencyPair=str('BTC_' + self.wallet.instrument), period=int(self.period),
            start=self.start_date, end=self.end_date
        )
        first_tick = Tick(chart_data[0])
        print(timer + '| Starting price ' + str(first_tick.close) + '|')
        # plot = Plot()
        self.wallet.calculate_initial_investment(first_tick.close)
        close_list = []
        dates = []
        open_data = []
        high_data = []
        low_data = []
        close_data = []
        buys = []
        sells = []
        sma = []
        ema = []
        labels = []
        # Start loop
        for tick in chart_data:
            tick = Tick(tick)
            # plot.text.append("")
            open_data.append(tick.open)
            high_data.append(tick.high)
            low_data.append(tick.low)
            close_data.append(tick.close)

            dates.append(tick.date)

            n_close_data = numpy.array(close_data, dtype=float)
            sma = talib.SMA(n_close_data, self.strategy.sma_period)
            ema = talib.EMA(n_close_data, self.strategy.ema_period)

            self.display_stats(timer, first_tick, tick, ema, sma)

            if (((tick.close / first_tick.close) - 1) * 100) > 0:
                print(bcolors.OKGREEN + timer + '| Bot vs. Buy and Hold: ' +
                      str(format(((self.wallet.percent_btc_profit(tick.close) / (
                          ((tick.close / first_tick.close) - 1) * 100)) - 1) * 100, '.2f')) + ' %)' + bcolors.ENDC)

            if self.wins + self.losses > 0:
                print(bcolors.OKGREEN + timer + "| WINS: " + str(self.wins) + " LOSSES: " +
                      str(self.losses) + " Total TRADES: " + str(self.wins + self.losses) + " (" +
                      str(format((self.wins / (self.wins + self.losses) * 100), '.2f')) + "%)" + bcolors.ENDC)

            if sma[-1] != 'nan' and ema[-1] != 'nan':
                order = self.strategy.decide(timer, tick.close, sma, ema, self.wallet)

            if order is "buy":
                self.old_buy_price = tick.close
                buys.append([dates[-1], tick.close])
            elif order is "sell":
                if tick.close < self.old_buy_price:
                    self.losses += 1
                else:
                    self.wins += 1
                sells.append([dates[-1], tick.close])

        data = {
            "close": list(zip(dates, close_data)),
            "sma": list(zip(dates, sma)),
            "ema": list(zip(dates, ema)),
            "buys": buys,
            "sells": sells
        }
        return data

    def stop(self):
        pass

    @staticmethod
    def buy_and_hold(price, wallet):
        return ((((
                      wallet.starting_assets * price) + wallet.starting_currency) - wallet.initial_investment) / wallet.initial_investment) * 100

    @staticmethod
    def buy_and_hold_efficiency(tick, first_tick):
        return ((tick.close / first_tick.close) - 1) * 100

    def display_stats(self, timer, first_tick, tick, ema, sma):
        print(timer + '|===================================================================|')

        if self.mode is 'backtest':
            print(timer + '| ' + str(self.period) + ' tick - High: ' + str(tick.high) + ' Low: ' +
                  str(tick.low))

        print(timer + '| SMA: ' + str(sma[-1]) + ' EMA: ' + str(ema[-1]))

        print(timer + '| Balance: ' + str(self.wallet.assets) + ' ' + self.wallet.instrument + ' ('
              + str(self.wallet.assets * tick.close) + ') ' + str(self.wallet.currency) + ' BTC')

        print(bcolors.OKGREEN + timer
              + '| Total BTC: ' + str(self.wallet.total_btc(tick))
              + '|BTC  PROFIT: (' + str(format(self.wallet.percent_btc_profit(tick.close), '.2f')) + ' %)'
              + bcolors.ENDC)

        print(timer + "| The current price: " + str(tick.close))

        print("FIRST CLOSE: " + str(first_tick.close))

        print(timer + "| The buy and hold efficiency:  " +
              str(format(self.buy_and_hold_efficiency(tick, first_tick), '.2f')) + "%")

        tick_ratio = ((tick.close / first_tick.close) - 1) * 100
        if tick_ratio > 0:
            print(bcolors.OKGREEN + timer + '| Bot vs. Buy and Hold: ' +
                  str(format((self.wallet.percent_btc_profit(tick.close) / tick_ratio), '.2f')) + ' %)' + bcolors.ENDC)

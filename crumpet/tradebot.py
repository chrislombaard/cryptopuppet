from datetime import datetime
import time
from typing import List

import numpy
import talib
from poloniex import Poloniex

import plotly
import plotly.plotly as py
import plotly.graph_objs as go


MINIMUM_AMOUNT = 0.0001


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

    def __init__(self, assets: float, currency: float, instrument: str, fee: float):
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

    def percent_profit(self, price):
        return ((((self.assets * price) + self.currency) - self.initial_investment) / self.initial_investment) * 100


class ToTheMoonStrategy(object):
    '''
    A simple strategy using the Simple Moving Averages (SMA) and Exponential Moving Averages (EMA) to determine
    when the bot should buy or sell a given asset.
    '''

    def __init__(self, instrument: str, sma_period: float, ema_period: float):
        '''
        The strategy is initialized.
        :param ema_period: period of the exponential moving average.
        :param sma_period: period of the simple moving average.
        :param instrument: The crypto-currency the bot will use to trade against BTC.
        '''
        print(str(datetime.now()) + '|===================================================================|')
        print(str(datetime.now()) + '|-------------------- To The Moon And Back v0.1 --------------------|')
        print(str(datetime.now()) + '|===================================================================|')
        self.sma_period = sma_period
        self.ema_period = ema_period
        self.instrument = instrument

    def decide(self, price: float, ema: List, sma: List, wallet: Wallet) -> str:
        '''
        The function the bot uses to decide whether to BUY or SELL.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrument.
        :param ema: The array of EMA.
        :param sma: The array of SMA.
        '''
        max_buy_amount = wallet.max_buy_amount(price)
        max_sell_amount = wallet.max_sell_amount()

        ema_len = len(ema)
        if ema_len > 1:
            if ema[ema_len - 2] > sma[ema_len - 2] and ema[ema_len - 1] < sma[ema_len - 1]:
                if max_buy_amount >= MINIMUM_AMOUNT:
                    self.buy(max_buy_amount, price, wallet)
                    return "bought"
            elif ema[ema_len - 2] < sma[ema_len - 2] and ema[ema_len - 1] > sma[ema_len - 1]:
                if max_sell_amount >= MINIMUM_AMOUNT:
                    self.sell(max_sell_amount, price, wallet)
                    return "sold"

        return "None"

    def buy(self, amount: float, price: float, wallet: Wallet):
        '''
        The buy order is made and logged in the wallet.
        :param plot: The plot object used to keep track of the plotting data.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrumemt.
        :param amount: The amount of the asset the bot should buy
        '''
        print(str(datetime.now()) + '| Order # POLONIEX ' + self.instrument + '/BTC BUY ' + str(
            amount) + ' at ' + str(price) + ' traded')
        wallet.record_buy(amount, price)
        # record plot label

    def sell(self, amount: float, price: float, wallet: Wallet):
        '''
        The sell order is made and logged in the wallet.
        :param plot: The plot object used to keep track of the plotting data.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrumemt.
        :param amount: The amount of the asset the bot should buy
        '''
        print(str(datetime.now()) + '| Order # POLONIEX ' + self.instrument + '/BTC SELL ' + str(
            amount) + ' at ' + str(price) + ' traded')
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

    def __init__(self, tick_data):
        self.date = int(tick_data.get('date'))
        self.high = float(tick_data.get('high'))
        self.low = float(tick_data.get('low'))
        self.open = float(tick_data.get('open'))
        self.close = float(tick_data.get('close'))
        self.volume = float(tick_data.get('volume'))
        self.quote_volume = float(tick_data.get('quoteVolume'))
        self.weighted_average = float(tick_data.get('weightedAverage'))


class Tradebot(object):
    '''
    This class performs all the actions of required of a trading bot.
    '''

    def __init__(self, wallet: Wallet, strategy: str, instrument: str, period: int, **kwargs) -> None:
        '''
        This function initializes a Classification object.
        :param fee: The maximum percentage fee taken by the exchange per order.
        :param max_order_amount: The maximum amount of your wallet the bot can use.
        :param order_timeout: How many seconds until the order times out.
        :param strategy: The BUY/SELL strategy the bot will use.
        :param instrument: The crypto-currency the bot will use to trade against BTC.
        '''
        self.mode = 'backtest'
        self.market = Poloniex()
        self.period = period
        self.start_time = datetime.now()
        self.minimum_amount = 0.01
        self.currency_pair = instrument + '_BTC'
        self.last_short = 0
        self.last_long = 0
        self.tickers = []
        self.start_date = time.mktime(kwargs.get('start_date').timetuple())
        self.end_date = time.mktime(kwargs.get('end_date').timetuple())

        if strategy == 'To The Moon':
            strategy = ToTheMoonStrategy(
                instrument=instrument, sma_period=float(kwargs.get('sma_period')),
                ema_period=float(kwargs.get('ema_period')))

        self.strategy = strategy
        self.wallet = wallet

    def __repr__(self):
        return '%s(%s)' % (self.__class__.__name__, self.strategy)

    def restart(self):
        pass

    def start(self):
        self.start_clock()
        chart_data = self.market.returnChartData(
            currencyPair=str('BTC_' + self.wallet.instrument), period=int(self.period),
            start=self.start_date, end=self.end_date
        )
        first_tick = Tick(chart_data[0])
        print(str(datetime.now()) + '| Starting price ' + first_tick.+ '|')
        plot = Plot()
        self.wallet.calculate_initial_investment(first_tick.close)
        close_list = []
        dates = []
        open_data = []
        high_data = []
        low_data = []
        close_data = []
        sma = []
        ema = []
        labels = []
        # Start loop
        for tick in chart_data:
            tick = Tick(tick)
            plot.text.append("")
            open_data.append(tick.open)
            high_data.append(tick.high)
            low_data.append(tick.low)
            close_data.append(tick.close)

            dates.append(dates.__len__())
            n_close_data = numpy.array(close_data, dtype=float)
            sma = talib.SMA(n_close_data, self.strategy.sma_period)
            ema = talib.EMA(n_close_data, self.strategy.ema_period)

            print(str(datetime.now()) + '|===================================================================|')
            # print(str(datetime.now()) + '| Mode: Backtest, Uptime: ' + str(datetime.now() - self.start_time))
            print(str(datetime.now()) + '| ' + str(self.period) + ' tick - High: ' + str(tick.high) + ' Low: ' +
                  str(tick.low))
            print(str(datetime.now()) + '| SMA: ' + str(sma[len(sma) - 1]) + ' EMA: ' + str(ema[len(ema) - 1]))
            print(str(datetime.now()) + '| Balance: ' + str(self.wallet.assets) + ' ' + self.wallet.instrument + ' ('
                  + str(self.wallet.assets * tick.close) + ') ' + str(self.wallet.currency) + ' BTC')
            print(str(datetime.now()) + '| Total BTC: ' + str((self.wallet.assets * tick.close) + self.wallet.currency)
                  + ' BTC  PROFIT: (' + str(self.wallet.percent_profit(tick.close)) + ' %)')
            print(str(datetime.now()) + "| The current price: " + str(tick.close))

            if sma[len(sma) - 1] != 'nan' and ema[len(ema) - 1] != 'nan':
                decision = self.strategy.decide(tick.close, sma, ema, self.wallet)
                if decision:
                    if decision == "bought":
                        labels.append("BUY")
                    elif decision == "sold":
                        labels.append("SOLD")
                    elif decision == "none":
                        labels.append("-")
            else:
                labels.append("-")

        # data = list(zip(date2, close_list))

        trace = go.Candlestick(x=dates,
                               open=open_data,
                               high=high_data,
                               low=low_data,
                               close=close_data)
        data_2 = [
            go.Scatter(
                x=dates,
                y=sma,
                mode='lines+text',
                name='Lines and Text',
                text=labels,
                textposition='top'
            ),
            go.Scatter(x=dates, y=ema),
            go.Scatter(x=dates, y=close_data)
        ]
        data = [trace]
        py.sign_in("chrislombaard", "r2rPOS1mlz5VfXsY4rP6")
        py.plot(data)
        py.plot(data_2)
        return data

    def stop(self):
        pass

    def start_clock(self):
        self.start_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

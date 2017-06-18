import datetime
from typing import List

import math
import numpy
import talib

from crumpet.constants import MINIMUM_AMOUNT
from crumpet.tick import Tick
from crumpet.utils import bcolors
from crumpet.wallet import Wallet


class BaseStrategy(object):
    '''
    The base strategy that all strategies inherit from.
    '''

    def __init__(self):
        self.tick = []

    @staticmethod
    def buy(timer: str, amount: float, price: float, wallet: Wallet):
        '''
        The buy order is made and logged in the wallet.
        :param timer: The timer used to keep track of the time.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrumemt.
        :param amount: The amount of the asset the bot should buy
        '''
        print(bcolors.OKGREEN + timer + '| Order # POLONIEX ' + wallet.instrument + '/BTC BUY ' + str(
            amount) + ' at ' + str(price) + ' traded' + bcolors.ENDC)
        wallet.record_buy(amount, price)
        # record plot label

    @staticmethod
    def sell(timer: str, amount: float, price: float, wallet: Wallet):
        '''
        The sell order is made and logged in the wallet.
        :param timer: The timer used to keep track of time.
        :param wallet: The wallet used by the bot.
        :param price: The current closing price of the instrumemt.
        :param amount: The amount of the asset the bot should buy
        '''
        print(bcolors.OKGREEN + timer + '| Order # POLONIEX ' + wallet.instrument + '/BTC SELL ' + str(
            amount) + ' at ' + str(price) + ' traded' + bcolors.ENDC)
        wallet.record_sell(amount, price)


class ToTheMoonStrategy(BaseStrategy):
    '''
    A simple strategy using the Simple Moving Averages (SMA) and Exponential Moving Averages (EMA) to determine
    when the bot should buy or sell a given asset.
    '''

    def __init__(self, timestamp: datetime, sma_period: float = 25, ema_period: float = 13):
        '''
        The strategy is initialized.
        :param ema_period: period of the exponential moving average.
        :param sma_period: period of the simple moving average.
        '''
        timestamp.strftime("%Y-%m-%d %H:%M:%S")
        print(bcolors.OKGREEN + str(timestamp) +
              '|===================================================================|' + bcolors.ENDC)
        print(bcolors.OKGREEN + str(timestamp) +
              '|-------------------- To The Moon And Back v0.1 --------------------|' + bcolors.ENDC)
        print(bcolors.OKGREEN + str(timestamp) +
              '|===================================================================|' + bcolors.ENDC)
        self.sma_period = sma_period
        self.ema_period = ema_period
        self.sma = []
        self.ema = []
        super(ToTheMoonStrategy, self).__init__()

    @property
    def guard(self):
        if len(self.ema) <= 1 and len(self.sma) <= 1:
            return False

        if math.isnan(float(self.sma[-1])) or math.isnan(float(self.ema[-1])):
            return False

        return True

    @property
    def crosses_up(self):
        if self.ema[-2] > self.sma[-2] and self.ema[-1] < self.sma[-1]:
            return 'sma'
        elif self.ema[-2] < self.sma[-2] and self.ema[-1] > self.sma[-1]:
            return 'ema'

        return ''

    def decide(self, timer: str, tick, wallet: Wallet):
        '''
        The function the bot uses to decide whether to BUY or SELL.
        :param tick:
        :param timer: The timer used to keep track of the time.
        :param wallet: The wallet used by the bot.
        '''
        n_close_data = numpy.array(tick.close, dtype=float)
        self.sma = talib.SMA(n_close_data, self.sma_period)
        self.ema = talib.EMA(n_close_data, self.ema_period)

        max_buy_amount = wallet.max_buy_amount(tick.close[-1])
        max_sell_amount = wallet.max_sell_amount()
        price = tick.close[-1]

        if self.guard:
            if self.crosses_up == 'ema':
                if max_buy_amount >= MINIMUM_AMOUNT:
                    self.buy(timer, max_buy_amount, price, wallet)
                    tick.buys.append([tick.dates[-1], tick.close[-1]])
                    # if not tick.first_order:
                    #     if tick.last_order == 'sell' and tick.sells[-1][1] > price:
                    #         self.buy(timer, max_buy_amount, price, wallet)
                    #         tick.buys.append([tick.dates[-1], tick.close[-1]])
                    #         tick.last_order = 'buy'
                    # else:
                    #     tick.first_order = False
                    #     self.buy(timer, max_buy_amount, price, wallet)
                    #     tick.buys.append([tick.dates[-1], tick.close[-1]])
                    #     tick.last_order = 'buy'

            elif self.crosses_up == 'sma':
                if max_sell_amount >= MINIMUM_AMOUNT:
                    self.sell(timer, max_sell_amount, price, wallet)
                    tick.sells.append([tick.dates[-1], tick.close[-1]])
                    tick.last_order = 'sell'

                    if tick.close[-1] < tick.close[-2]:
                        tick.losses += 1
                    else:
                        tick.wins += 1
                    # if not tick.first_order:
                    #     if tick.last_order == 'buy' and tick.buys[-1][1] < price:
                    #         self.sell(timer, max_sell_amount, price, wallet)
                    #         tick.sells.append([tick.dates[-1], tick.close[-1]])
                    #         tick.last_order = 'sell'
                    #
                    #         if tick.close[-1] < tick.close[-2]:
                    #             tick.losses += 1
                    #         else:
                    #             tick.wins += 1
                    # else:
                    #     tick.first_order = False
                    #     self.sell(timer, max_sell_amount, price, wallet)
                    #     tick.sells.append([tick.dates[-1], tick.close[-1]])
                    #     tick.last_order = 'sell'
                    #
                    #     if tick.close[-1] < tick.close[-2]:
                    #         tick.losses += 1
                    #     else:
                    #         tick.wins += 1

        return tick

    def stats(self, timer):
        print(timer + '| SMA: ' + str(self.sma[-1]) + ' EMA: ' + str(self.ema[-1]))

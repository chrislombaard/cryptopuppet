import time
from datetime import datetime

import numpy

import matplotlib.pyplot as plt
import talib
from matplotlib.pyplot import show
from poloniex import Poloniex


def backtest_bot(exchange, fee, strategy, exchange_period, start_date, end_date, instrument, **kwargs):







    """
    talib = require "talib"
    trading = require "trading"
    params = require "params"

    _maximumExchangeFee = params.add "Maximum exchange fee %", .25
    _maximumOrderAmount = params.add "Maximum order amount", 1
    _orderTimeout = params.add "Order timeout", 30
    _plotShort = params.add "Plot short trend line", true
    _plotLong = params.add "Plot long trend line", true
    _plotBuy = params.add  "Plot buy indicator", true
    _plotSell = params.add "Plot sell indicator", true

    MINIMUM_AMOUNT = .01

    init: ->
        # This runs once when the bot is started
        setPlotOptions
            short:
                color: 'blue'
            long:
                color: 'gray'
            sellIndicator:
                color: 'red'
            buyIndicator:
                color: 'green'
            sell:
                color: 'orange'
            buy:
                color: 'purple'

    handle: ->
        # This runs once every tick or bar on the graph
        storage.botStartedAt ?= data.at
        storage.lastShort ?= 0
        storage.lastLong ?= 0
        primaryInstrument = data.instruments[0]
        assetsAvailable = @portfolios [primaryInstrument.market].positions[primaryInstrument.asset()].amount
        currencyAvailable = @portfolios [primaryInstrument.market].positions[primaryInstrument.curr()].amount
        debug "The current price: #{primaryInstrument.price}"

        maximumBuyAmount = (currencyAvailable / primaryInstrument.price) * (1 - (_maximumExchangeFee / 100))
        maximumSellAmount = (assetsAvailable * (1 - (_maximumExchangeFee / 100)))

        short = talib.MA
            startIdx: 0
            endIdx: primaryInstrument.close.length - 1
            inReal: primaryInstrument.close
            optInTimePeriod: 10
            optInMAType: 3

        lastShort = short[short.length - 2]
        short = short[short.length - 1]

        long = talib.MA
            startIdx: 0
            endIdx: primaryInstrument.close.length - 1
            inReal: primaryInstrument.close
            optInTimePeriod: 21
            optInMAType: 3

        lastLong = long[long.length - 2]
        long = long[long.length - 1]

        if (_plotShort)
            plot
                short: short
        if (_plotLong)
            plot
                long: long

        if (lastShort != 0 and lastLong != 0)
            if (lastShort >= lastLong and short < long)
                if (_plotSell)
                    plotMark
                        sellIndicator: short
            if (maximumSellAmount >= MINIMUM_AMOUNT)
                trading.sell primaryInstrument, 'limit', Math.min(_maximumOrderAmount, maximumSellAmount), primaryInstrument.price, _orderTimeout
        else if (lastShort <= lastLong and short > long)
        if (_plotBuy)
            plotMark
                buyIndicator: short
        if (maximumBuyAmount >= MINIMUM_AMOUNT)
            trading.buy primaryInstrument, 'limit', Math.min(_maximumOrderAmount, maximumBuyAmount), primaryInstrument.price, _orderTimeout

        onRestart: ->
            debug
            "Bot restarted at #{new Date(data.at)}"

        onStop: ->
            debug
            "Bot started at #{new Date(storage.botStartedAt)}"
            debug
            "Bot stopped at #{new Date(data.at)}"
            """

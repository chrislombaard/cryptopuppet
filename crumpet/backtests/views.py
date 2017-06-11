import json

import simplejson
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import FormView


from crumpet.backtests import forms
from crumpet.tradebot import Tradebot, Wallet


class BacktestingView(FormView):
    form_class = forms.ToTheMoonStrategyForm
    template_name = "backtests/backtesting.html"

    def form_valid(self, form):
        context = self.get_context_data()
        exchange = form.cleaned_data['exchange']
        instrument = form.cleaned_data['instrument']
        period = form.cleaned_data['exchange_period']

        if form.cleaned_data['trading_fee']:
            trading_fee = float(form.cleaned_data['trading_fee'])
            wallet = Wallet(assets=100, currency=100, instrument=instrument, fee=trading_fee)
        else:
            wallet = Wallet(assets=100, currency=100, instrument=instrument)

        strategy = form.cleaned_data['strategy']
        mode = form.cleaned_data['mode']
        start_date = form.cleaned_data['start_date']
        end_date = form.cleaned_data['end_date']
        sma_period = form.cleaned_data['sma_period']
        ema_period = form.cleaned_data['ema_period']

        bot = Tradebot(
            mode=mode,
            wallet=wallet,
            strategy=strategy,
            instrument=instrument, period=int(period),
            start_date=start_date, end_date=end_date,
            sma_period=sma_period, ema_period=ema_period)
        data = bot.start()

        data = simplejson.dumps(data.result(), ignore_nan=True)
        return JsonResponse(simplejson.loads(data))


class LiveTestView(FormView):
    form_class = forms.ToTheMoonStrategyForm
    template_name = "backtests/livetest.html"

    def form_valid(self, form):
        context = self.get_context_data()
        exchange = form.cleaned_data['exchange']
        instrument = form.cleaned_data['instrument']
        period = form.cleaned_data['exchange_period']

        if form.cleaned_data['trading_fee']:
            trading_fee = float(form.cleaned_data['trading_fee'])
            wallet = Wallet(assets=100, currency=100, instrument=instrument, fee=trading_fee)
        else:
            wallet = Wallet(assets=100, currency=100, instrument=instrument)

        strategy = form.cleaned_data['strategy']
        mode = form.cleaned_data['mode']
        sma_period = form.cleaned_data['sma_period']
        ema_period = form.cleaned_data['ema_period']

        bot = Tradebot(
            mode=mode,
            wallet=wallet,
            strategy=strategy,
            instrument=instrument, period=int(period),
            sma_period=sma_period, ema_period=ema_period)
        data = bot.start_live_backtest()
        # {
        #     title: {
        #         text: '<span style="">drag me anywhere <br> dblclick to remove</span>',
        #         style: {
        #             color: 'red'
        #         }
        #     },
        #     anchorX: "left",
        #     anchorY: "top",
        #     allowDragX: true,
        #     allowDragY: true,
        #     x: 515,
        #     y: 155
        # },
        return render(self.request, self.template_name, context=context)

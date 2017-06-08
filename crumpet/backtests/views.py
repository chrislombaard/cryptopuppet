from django.shortcuts import render
from django.views.generic import FormView

from crumpet.backtests import forms, utils
from crumpet.tradebot import Tradebot, Wallet


class BacktestingView(FormView):
    form_class = forms.ToTheMoonStrategyForm
    template_name = "backtests/backtesting.html"

    def form_valid(self, form):
        context = self.get_context_data()
        exchange = form.cleaned_data['exchange']
        period = form.cleaned_data['exchange_period']
        trading_fee = float(form.cleaned_data['trading_fee'])
        strategy = form.cleaned_data['strategy']
        start_date = form.cleaned_data['start_date']
        end_date = form.cleaned_data['end_date']
        sma_period = form.cleaned_data['sma_period']
        ema_period = form.cleaned_data['ema_period']
        instrument = form.cleaned_data['instrument']

        wallet = Wallet(assets=100, currency=100, instrument=instrument, fee=trading_fee)
        bot = Tradebot(
            wallet=wallet,
            strategy=strategy,
            instrument=instrument, period=int(period),
            start_date=start_date, end_date=end_date,
            sma_period=sma_period, ema_period=ema_period)
        bot.start()

        return render(self.request, self.template_name, context=context)

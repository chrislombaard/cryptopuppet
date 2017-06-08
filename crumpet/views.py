import json

from django.contrib import messages
from django.shortcuts import redirect, render
from django.urls import reverse
from django.views.generic import TemplateView, FormView
from poloniex import Poloniex

from crumpet.profiles import forms, models, constants
from crumpet.models import Order


class DashboardView(TemplateView):
    template_name = "crumpet/pages/dashboard.html"

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        if not request.user.is_authenticated():
            return redirect(reverse('account_login'))
        polo = Poloniex()
        print(polo.returnTicker()['BTC_ETH'])

        user_account = models.UserAccount.objects.filter(
            user=self.request.user
        ).first()

        # if user_account.api_key and user_account.api_secret:
        #     polo = Poloniex(key=user_account.api_key, secret=user_account.api_secret)
        #     balance = polo.returnBalances()
        #     # balance = polo.returnCompleteBalances()
        #     ticker = polo.returnTicker()
        #
        #     balance = {key: value for key, value in balance.items() if float(value) != 0}
        #     context['balance'] = balance
        #     # context['ticker'] = ticker

        return self.render_to_response(context)


class AccountPageView(FormView):
    form_class = forms.UserAccountForm
    template_name = "crumpet/pages/account.html"

    def get_context_data(self, **kwargs):
        context = super(AccountPageView, self).get_context_data(**kwargs)
        form = context["form"]
        user_account = models.UserAccount.objects.filter(
            user=self.request.user
        ).first()

        form.fields["api_key"].initial = user_account.api_key
        form.fields["api_secret"].initial = user_account.api_secret

        return context

    def form_valid(self, form):
        context = self.get_context_data()
        exchange = form.cleaned_data["exchange"]
        api_key = form.cleaned_data["api_key"]
        api_secret = form.cleaned_data["api_secret"]

        user_account = models.UserAccount.objects.filter(
            user=self.request.user
        ).first()

        if user_account:
            user_account.exchange = exchange
            user_account.api_key = api_key
            user_account.api_secret = api_secret
            user_account.save()
            messages.success(self.request, 'Profile details updated.')

            if user_account.api_key and user_account.api_secret:
                polo = Poloniex(
                    key=user_account.api_key,
                    secret=user_account.api_secret)

                trade_history = polo.returnTradeHistory()
                Order.objects.all().delete()
                # for ticker, trades in trade_history.items():
                #     for trade in trades:
                #         object, created = Order.objects.update_or_create(
                #             order_number=trade.get('orderNumber'),
                #             defaults={
                #                 "user_account": user_account,
                #                 "status": constants.PROCESSED,
                #                 "ticker": ticker
                #             }
                #         )
                #         import pdb;
                #         pdb.set_trace()
                #         Trade.objects.create(
                #             total=trade.get('total'),
                #             price=trade.get('rate'),
                #             amount=trade.get('amount'),
                #             type=trade.get('type'),
                #             date=trade.get('date'),
                #             trade_id=trade.get('tradeID')
                #         )
                #         # {'globalTradeID': 154374278, 'tradeID': '1835502', 'date': '2017-06-04 13:08:17',
                #         #  'rate': '0.00000658', 'amount': '1844.60486322', 'total': '0.01213749', 'fee': '0.00250000',
                #         #  'orderNumber': '7297814031', 'type': 'buy', 'category': 'exchange'}
                #
                #         import pdb;
                #         pdb.set_trace()
                #         # Order.objects.create(
                #         #     account=user_account,
                #         #     ticker=ticker,
                #         #     status=constants.PROCESSED
                #         #
                #         # )
                trade_history = {coin: trades for coin, trades in trade_history.items()}
                context['trade_history'] = trade_history
        else:
            messages.error(self.request, 'No user account found.')

        context = self.get_context_data()
        return render(self.request, "crumpet/pages/account.html", context=context)


class PortfolioView(TemplateView):
    template_name = "crumpet/pages/portfolio.html"

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        user_account = models.UserAccount.objects.filter(
            user=self.request.user
        ).first()

        # Order.objects.create(
        #     user_account=user_account,
        #     order_number="1234667"
        #
        # )
        # if user_account.api_key and user_account.api_secret:
        #     polo = Poloniex(key=user_account.api_key, secret=user_account.api_secret)
        #     # trade_history = polo.returnTradeHistory(start=)
        #
        #     trade_history = {coin: trades for coin, trades in trade_history.items()}
        #     context['trade_history'] = trade_history

        return self.render_to_response(context)


class FAQView(TemplateView):
    template_name = "crumpet/portfolio.html"






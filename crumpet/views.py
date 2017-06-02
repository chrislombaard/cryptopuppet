from django.contrib import messages
from django.shortcuts import redirect, render
from django.urls import reverse
from django.views.generic import TemplateView, FormView
from poloniex import Poloniex

from crumpet.profiles import forms, models


class DashboardView(TemplateView):
    template_name = "crumpet/dashboard.html"

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        if not request.user.is_authenticated():
            return redirect(reverse('account_login'))
        polo = Poloniex()
        print(polo.returnTicker()['BTC_ETH'])

        user_account = models.UserAccount.objects.filter(
            user=self.request.user
        ).first()

        if user_account.api_key and user_account.api_secret:
            polo = Poloniex(key=user_account.api_key, secret=user_account.api_secret)
            balance = polo.returnBalances()
            ticker = polo.returnTicker()

            balance = {key: value for key, value in balance.items() if float(value) != 0}
            context['balance'] = balance
            # context['ticker'] = ticker

        return self.render_to_response(context)


class AccountPageView(FormView):
    form_class = forms.UserAccountForm
    template_name = "crumpet/account.html"

    def form_valid(self, form):
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
        else:
            messages.error(self.request, 'No user account found.')

        context = self.get_context_data()
        return render(self.request, "crumpet/account.html", context=context)



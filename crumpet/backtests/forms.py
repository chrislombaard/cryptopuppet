from django import forms

from django.utils.translation import ugettext_lazy as _

from crumpet.profiles import constants


class ToTheMoonStrategyForm(forms.Form):
    exchange = forms.ChoiceField(
        required=True,
        label=_("Exchange"),
        choices=constants.CRYPTO_EXCHANGES
    )
    instrument = forms.ChoiceField(
        required=True,
        label=_("Instrument"),
        choices=constants.INSTRUMENTS
    )
    exchange_period = forms.ChoiceField(
        required=True,
        label=_("Period"),
        choices=constants.EXCHANGE_PERIODS
    )
    start_date = forms.DateField(
        required=True,
        widget=forms.SelectDateWidget()
    )

    end_date = forms.DateField(
        required=True,
        widget=forms.SelectDateWidget()
    )
    trading_fee = forms.CharField(
        required=True,
        label=_("Trading Fee (%)"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("0.1%")
            }
        ),
        max_length=100
    )
    strategy = forms.ChoiceField(
        required=True,
        label=_("Strategy"),
        choices=constants.STRATEGIES
    )

    sma_period = forms.CharField(
        required=True,
        label=_("Simple Moving Average"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("25")
            }
        ),
        max_length=100
    )

    ema_period = forms.CharField(
        required=True,
        label=_("Exponetial Moving Average"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("13")
            }
        ),
        max_length=100
    )

import datetime
from django import forms
from django.core.validators import RegexValidator

from django.utils.translation import ugettext_lazy as _

from crumpet.profiles import constants


class ToTheMoonStrategyForm(forms.Form):
    exchange = forms.ChoiceField(
        required=False,
        label=_("Exchange"),
        choices=constants.CRYPTO_EXCHANGES
    )
    instrument = forms.ChoiceField(
        required=False,
        label=_("Instrument"),
        choices=constants.INSTRUMENTS
    )
    mode = forms.ChoiceField(
        required=False,
        label=_("Mode"),
        choices=constants.MODES
    )
    exchange_period = forms.ChoiceField(
        required=False,
        label=_("Period"),
        choices=constants.EXCHANGE_PERIODS
    )
    start_date = forms.DateField(
        required=False,
        widget=forms.DateInput(
            attrs={
                "type": "date",
                "customDate": "true",
                "placeholder": _("yyyy/mm/dd"),
                "required": "required"
            }
        )
    )
    end_date = forms.DateField(
        required=False,
        widget=forms.DateInput(
            attrs={
                "type": "date",
                "customDate": "true",
                "placeholder": _("yyyy/mm/dd"),
                "required": "required"
            }
        )
    )
    trading_fee = forms.CharField(
        required=False,
        label=_("Trading Fee (%)"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("0.1%")
            }
        ),
        max_length=100

    )
    strategy = forms.ChoiceField(
        required=False,
        label=_("Strategy"),
        choices=constants.STRATEGIES
    )

    sma_period = forms.CharField(
        required=False,
        label=_("Simple Moving Average"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("25")
            }
        ),
        max_length=100
    )

    ema_period = forms.CharField(
        required=False,
        label=_("Exponetial Moving Average"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("13")
            }
        ),
        max_length=100
    )

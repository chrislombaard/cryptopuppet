from django import forms

from crumpet.profiles import constants
from django.utils.translation import ugettext_lazy as _


class UserAccountForm(forms.Form):
    exchange = forms.ChoiceField(
        required=True,
        label=_("Exchange"),
        choices=constants.CRYPTO_EXCHANGES
    )

    api_key = forms.CharField(
        label=_("API Key"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("Api Key")
            }
        ),
        max_length=255
    )

    api_secret = forms.CharField(
        label=_("API Secret"),
        widget=forms.TextInput(
            attrs={
                "placeholder": _("API SECRET")
            }
        ),
        max_length=255
    )

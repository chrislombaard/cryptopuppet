from datetime import datetime

from allauth.account.signals import user_signed_up
from django.conf import settings
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from crumpet.profiles import constants
from crumpet.profiles.fields import PriceField, PercentField, AmountField


@python_2_unicode_compatible
class UserAccount(models.Model):
    """User profile"""
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        related_name="user_account"
    )
    exchange = models.CharField(
        verbose_name="Crypto Exchanges",
        choices=constants.CRYPTO_EXCHANGES,
        default=constants.CRYPTO_EXCHANGES[0][0],
        max_length=30
    )
    api_key = models.CharField(max_length=255, blank=True)
    api_secret = models.CharField(max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "User Account"

    def __str__(self):
        return u"%s %s" % (self.user.first_name, self.user.last_name)


@python_2_unicode_compatible
class TradingStrategyProfile(models.Model):
    """Base trading strategy configuration models class."""
    note = models.CharField(max_length=255, blank=True)
    account = models.ForeignKey(UserAccount)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


@python_2_unicode_compatible
class FixedStrategyProfile(TradingStrategyProfile):
    """Configuration for fixed trading strategy."""
    buy = PriceField()
    sell = PriceField()

    class Meta:
        db_table = 'strategy_profile_fixed'

    def __str__(self):
        return 'fixed buy at ${buy}, sell at ${sell}'.format(
            buy=self.buy, sell=self.sell)


@python_2_unicode_compatible
class RelativeStrategyProfile(TradingStrategyProfile):
    """Configuration for relative trading strategy."""
    buy = PercentField()
    sell = PercentField()

    class Meta:
        db_table = 'strategy_profile_relative'

    def __str__(self):
        return 'relative buy at {buy}%, sell at ${sell}%'.format(
            buy=self.buy, sell=self.sell)

    def save(self, *args, **kwargs):
        # TODO: Check what the fees are for poloniex
        min_fee = .2
        # NEVER BUY OR SELL UNLESS THESE ASSERTS PASS
        assert self.buy < 100 - min_fee
        assert self.sell > 100 + min_fee
        return super().save(*args, **kwargs)


###############################################################################
# Poloniex API-based models
# https://poloniex.com/support/api/
###############################################################################


class Ticker(models.Model):
    """
    {
        'BTC_BCN':
            {
                'id': 7,
                'last': '0.00000157',
                'lowestAsk': '0.00000157',
                'highestBid': '0.00000156',
                'percentChange': '0.34188034',
                'baseVolume': '8431.59544575',
                'quoteVolume': '5818665335.00883484',
                'isFrozen': '0',
                'high24hr': '0.00000173',
                'low24hr': '0.00000111'
            }
    }
    """
    # symbol = models.CharField(max_length=30, verbose_name="Ticker Symbol")
    ticker_id = models.CharField(max_length=20)
    last = AmountField()
    lowest_ask = AmountField()
    highest_bid = AmountField()
    percent_change = PercentField()
    base_volume = AmountField()
    quote_volume = AmountField()
    is_frozen = models.BooleanField()
    high_24_hour = AmountField()
    low_24_hour = AmountField()

    class Meta:
        ordering = ['-percent_change']
        get_latest_by = 'percent_change'
        db_table = 'poloniex_ticker'

    def __str__(self):
        return 'last={last}, percent_change={percent_change}'.format(**self.__dict__)


class Balance(models.Model):
    """
    {
        "LTC": {
            "available": "5.015",
            "onOrders": "1.0025",
            "btcValue": "0.078"
        }
    }
    """

    """
    usd_balance - USD balance
    btc_balance - BTC balance
    usd_reserved - USD reserved in open orders
    btc_reserved - BTC reserved in open orders
    usd_available- USD available for trading
    btc_available - BTC available for trading
    fee - customer trading fee
    """
    created = models.DateTimeField(auto_now_add=True)
    account = models.ForeignKey(UserAccount, related_name='balances')
    inferred = models.BooleanField(default=False)
    timestamp = models.DateTimeField()

    # API fields
    usd_balance = AmountField()
    btc_balance = AmountField()
    usd_reserved = AmountField()
    btc_reserved = AmountField()
    btc_available = AmountField()
    usd_available = AmountField()
    fee = PercentField()

    class Meta:
        get_latest_by = 'timestamp'
        ordering = ['-timestamp']
        db_table = 'bitstamp_balance'

    def __str__(self):
        return '{usd:0>6} US$ | {btc:0>10} BTC'.format(
            usd=self.usd_balance,
            btc=self.btc_balance
        )


def save_user_account_data(sender, request, user, **kwargs):
    user_account = UserAccount(
        user=user,
        created=datetime.now()
    )
    user_account.save()


user_signed_up.connect(save_user_account_data)

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
    id = models.CharField(max_length=20)
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

# class TradingSession(models.Model):
#     QUEUED, ACTIVE, FINISHED = 'queued', 'active', 'finished'
#     STATUSES = [QUEUED, ACTIVE, FINISHED]
#     created = models.DateTimeField(auto_now_add=True)
#     updated = models.DateTimeField(auto_now=True)
#     account = models.ForeignKey(Account, related_name='trading_sessions')
#     status = models.CharField(
#         choices=zip(STATUSES, STATUSES),
#         max_length=255,
#         db_index=True
#     )
#     became_active = models.DateTimeField(null=True, blank=True)
#     became_finished = models.DateTimeField(null=True, blank=True)
#     note = models.CharField(max_length=255, blank=True)
#     strategy_profile = models.ForeignKey(TradingStrategyProfile)
#
#     # None - no limit; 1 - one repeat left; 0 - done
#     repeat_times = models.PositiveSmallIntegerField(default=None,
#                                                     null=True,
#                                                     blank=True)
#     # None - no limit
#     repeat_until = models.DateTimeField(null=True, blank=True)
#
#     class Meta:
#         db_table = 'trading_session'
#         ordering = ['-created']
#         get_latest_by = 'created'
#
#     def __str__(self):
#         return '{status} session with {strategy}'.format(
#             status=self.status,
#             strategy=self.strategy_profile,
#         )
#
#     def set_status(self, status):
#         if status == self.ACTIVE:
#             assert self.status == self.QUEUED
#             assert self.became_active is None
#             assert self.became_finished is None
#             self.became_active = timezone.now()
#         elif status == self.FINISHED:
#             assert self.status == self.ACTIVE
#             assert self.became_active is not None
#             assert self.became_finished is None
#             self.became_finished = timezone.now()
#         self.status = status
#         self.save()
#
#     @cached_property
#     def profile(self):
#         """Accessor for casted strategy profile."""
#         return self.strategy_profile.cast()
#
#     def is_expired(self):
#         return (self.repeat_until is not None
#                 and self.repeat_until > timezone.now())
#
#     def is_done(self):
#         return (self.repeat_times is not None
#                 and self.repeat_times >= self.orders.count())
#
#     def is_finished(self):
#         return self.is_expired() or self.is_done()
#
#
# class Balance(models.Model):
#     """
#     usd_balance - USD balance
#     btc_balance - BTC balance
#     usd_reserved - USD reserved in open orders
#     btc_reserved - BTC reserved in open orders
#     usd_available- USD available for trading
#     btc_available - BTC available for trading
#     fee - customer trading fee
#     """
#     created = models.DateTimeField(auto_now_add=True)
#     account = models.ForeignKey(Account, related_name='balances')
#     inferred = models.BooleanField(default=False)
#     timestamp = models.DateTimeField()
#
#     # API fields
#     usd_balance = AmountField()
#     btc_balance = AmountField()
#     usd_reserved = AmountField()
#     btc_reserved = AmountField()
#     btc_available = AmountField()
#     usd_available = AmountField()
#     fee = PercentField()
#
#     class Meta:
#         get_latest_by = 'timestamp'
#         ordering = ['-timestamp']
#         db_table = 'bitstamp_balance'
#
#     def __str__(self):
#         return '{usd:0>6} US$ | {btc:0>10} BTC'.format(
#             usd=self.usd_balance,
#             btc=self.btc_balance
#         )
#
#
# class Order(models.Model):
#     OPEN, CANCELLED, PROCESSED = 'open', 'cancelled', 'processed'
#     STATUSES = [OPEN, CANCELLED, PROCESSED]
#
#     BUY, SELL = 0, 1
#     TYPES = OrderedDict([(BUY, 'buy'),
#                          (SELL, 'sell')])
#
#     updated = models.DateTimeField(auto_now=True)
#     account = models.ForeignKey(Account, related_name='orders')
#     balance = models.ForeignKey(Balance, null=True, on_delete=models.PROTECT)
#     total = AmountField()
#     status = models.CharField(
#         default=None,
#         choices=zip(STATUSES, STATUSES),
#         max_length=255,
#         db_index=True
#     )
#     status_changed = models.DateTimeField(null=True, blank=True)
#     trading_session = models.ForeignKey(
#         TradingSession,
#         null=True,
#         on_delete=models.SET_NULL,
#         related_name='orders'
#     )
#
#     # API fields.
#     price = PriceField()
#     amount = AmountField()
#     type = models.IntegerField(choices=[(BUY, 'buy'), (SELL, 'sell')],
#                                max_length=255, db_index=True)
#     datetime = models.DateTimeField()
#
#     def __str__(self):
#         return '{type} {amount} BTC at {price} US$'.format(
#             type=self.get_type_display(),
#             amount=self.amount,
#             price=self.price
#         )
#
#     class Meta:
#         ordering = ['-datetime']
#         get_latest_by = 'datetime'
#         db_table = 'bitstamp_order'
#
#
# class Transaction(models.Model):
#     DEPOSIT, WITHDRAWAL, MARKET_TRADE = 0, 1, 2
#     TYPES = [DEPOSIT, WITHDRAWAL, MARKET_TRADE]
#
#     # MARKET_TRADE subtypes
#     SELL, BUY = 'sell', 'buy'
#
#     balance = models.ForeignKey(Balance, on_delete=models.PROTECT)
#     account = models.ForeignKey(Account, related_name='transactions')
#     updated = models.DateTimeField(auto_now=True)
#
#     # API fields.
#     datetime = models.DateTimeField()
#     btc = AmountField()
#     usd = AmountField()
#     fee = AmountField()
#     btc_usd = PriceField()
#     order = models.ForeignKey(Order, related_name='transactions', null=True)
#     type = models.PositiveSmallIntegerField(
#         max_length=255,
#         db_index=True,
#         choices=[
#             (DEPOSIT, 'deposit'),
#             (WITHDRAWAL, 'withdrawal'),
#             (MARKET_TRADE, 'trade'),
#         ]
#     )
#
#     class Meta:
#         ordering = ['-datetime']
#         get_latest_by = 'datetime'
#         db_table = 'bitstamp_transaction'
#
#     def __str__(self):
#         return '${usd} | {btc} BTC'.format(usd=self.usd, btc=self.btc)
#
#     @property
#     def trade_type(self):
#         if self.type == Transaction.MARKET_TRADE:
#             return Transaction.SELL if self.usd > 0 else Transaction.BUY
#
#     def save(self, *args, **kwargs):
#         if not self.balance_id:
#             self._create_balance()
#         return super().save(*args, **kwargs)
#
#     def _create_balance(self):
#         assert not self.balance_id
#         older = self.account.transactions.filter(datetime__lte=self.datetime)
#         aggregate = (
#             {'usd': 0, 'btc': 0, 'fee': 0}
#             if not older.exists() else
#             older.aggregate(usd=Sum('usd'), btc=Sum('btc'), fee=Sum('fee'))
#         )
#         # Reflect current transaction as well.
#         aggregate['usd'] += self.usd
#         aggregate['fee'] += self.fee
#         aggregate['btc'] += self.btc
#         self.balance = self.account.balances.create(
#             inferred=True,
#             timestamp=self.datetime,
#             usd_balance=aggregate['usd'] - aggregate['fee'],
#             btc_balance=aggregate['btc'],
#             fee=0,
#         )

from datetime import datetime

from allauth.account.signals import user_signed_up
from django.conf import settings
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from crumpet.profiles import constants


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
# ###############################################################################
# # Bitstamp API-based models
# # https://www.bitstamp.net/api/
# ###############################################################################
#
#
# class Ticker(models.Model):
#     """
#     {
#         high: "704.00",
#         last: "678.57",
#         timestamp: "1393958158",
#         bid: "678.49",
#         vwap: "677.88",
#         volume: "39060.90623024",
#         low: "633.64",
#         ask: "678.57"
#     }
#     """
#     timestamp = models.DateTimeField()
#     volume = AmountField()
#     vwap = PriceField()
#     last = PriceField()
#     high = PriceField()
#     low = PriceField()
#     bid = PriceField()
#     ask = PriceField()
#
#     class Meta:
#         ordering = ['-timestamp']
#         get_latest_by = 'timestamp'
#         db_table = 'bitstamp_ticker'
#
#     def __str__(self):
#         return 'last={last}, timestamp={timestamp}'.format(**self.__dict__)
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

from datetime import datetime

from allauth.account.signals import user_signed_up
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from crumpet.profiles import constants
from crumpet.profiles.fields import PriceField, PercentField, AmountField
from crumpet.profiles.models import UserAccount


@python_2_unicode_compatible
class TradingStrategyProfile(models.Model):
    """Base trading strategy configuration models class."""
    name = models.CharField(max_length=100)
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


class SimpleMovingAverage(models.Model):
    period = models.CharField(max_length=100, default=25)

    class Meta:
        db_table = 'simple_moving_average_indicator'

    def __str__(self):
        return 'Simple moving average with a period of ${period}%'.format(
            period=self.period)


class ExponentialMovingAverage(models.Model):
    period = models.CharField(max_length=100, default=25)

    class Meta:
        db_table = 'simple_moving_average_indicator'

    def __str__(self):
        return 'Simple moving average with a period of ${period}%'.format(
            period=self.period)


class IndicatorParameter(models.Model):
    name = models.CharField(max_length=100)
    parameter = AmountField()


class Strategy(TradingStrategyProfile):
    indicator = models.ForeignKey(IndicatorParameter, related_name="indicator")

    class Meta:
        db_table = 'to_the_moon_strategy'

    def __str__(self):
        return 'A simple buy/sell strategy that uses SMA, EMA and Momentum Oscillation as its key indicators.'




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
    symbol = models.CharField(max_length=30, verbose_name="Ticker Symbol")
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

    created = models.DateTimeField(auto_now_add=True)
    account = models.ForeignKey(UserAccount, related_name='balances')

    # API fields
    available = AmountField()
    on_orders = AmountField()
    btc_value = AmountField()

    class Meta:
        get_latest_by = 'created'
        ordering = ['-created']
        db_table = 'poloniex_balance'

    # def __str__(self):
    #     return '{usd:0>6} US$ | {btc:0>10} BTC'.format(
    #         usd=self.usd_balance,
    #         btc=self.btc_balance
    #     )


    """
    BUY/SELL ORDER
    {
        "orderNumber": 31226040,
        "resultingTrades": [
            {
                "amount": "338.8732",
                "date": "2014-10-18 23:03:21",
                "rate": "0.00000173",
                "total": "0.00058625",
                "tradeID": "16164",
                "type": "buy"
            }
        ]
    }
    """


class Order(models.Model):
    type = models.IntegerField(
        choices=constants.ORDER_TYPES,
        max_length=255,
        db_index=True
    )
    order_number = models.CharField(
        null=True,
        blank=True,
        max_length=50,
        verbose_name="Order Number"
    )
    amount = AmountField()
    price = AmountField()
    date = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user_account = models.ForeignKey(UserAccount, related_name='orders')
    ticker = models.CharField(verbose_name='Ticker Symbol', max_length=30)

    status = models.CharField(
        default=None,
        choices=constants.ORDER_STATES,
        max_length=255,
        db_index=True
    )

    class Meta:
        ordering = ['-date']
        get_latest_by = 'date'
        db_table = 'bot_order'

    def __str__(self):
        return '{type} {amount} BTC at {price} US$'.format(
            type=self.get_type_display(),
            amount=self.amount,
            price=self.price
        )


# class Trade(models.Model):
#     total = AmountField()
#     price = AmountField()
#     amount = AmountField()
#     type = models.IntegerField(
#         choices=constants.ORDER_TYPES,
#         max_length=255,
#         db_index=True
#     )
#     date = models.DateTimeField()
#     order = models.ForeignKey(Order, related_name='trades')
#     trade_id = models.CharField(max_length=30)
#     # Add category
#
#     def __str__(self):
#         return '{type} {amount} BTC at {price} US$'.format(
#             type=self.get_type_display(),
#             amount=self.amount,
#             price=self.price
#         )


def save_user_account_data(sender, request, user, **kwargs):
    user_account = UserAccount(
        user=user,
        created=datetime.now()
    )

    user_account.save()


user_signed_up.connect(save_user_account_data)

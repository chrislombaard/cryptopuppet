from collections import OrderedDict

from django.utils.translation import ugettext_lazy as _

CRYPTO_EXCHANGES = (
    ("poloniex", _("Poloniex")),
    ("bittrex", _("Bittrex")),
    ("bitstamp", _("Bitstamp"))
)

EXCHANGE_PERIODS = (
    (300, "5-min"),
    (900, "15-min"),
    (1800, "30-min"),
    (7200, "2-hr"),
    (14400, "4-hr"),
    (86400, "1-day")
)

STRATEGIES = (
    ("To The Moon", "toTheMoon"),
    ("Strategy 2", "strategy 2"),
)

INSTRUMENTS = (
    ("ETH", _("Ethereum")),
    ("DGB", _("DigiByte")),
    ("XRP", _("Ripple")),
    ("XMR", _("Monero")),
    ("LTC", _("LiteCoin")),
    ("STEEM", _("STEEM"))
)


class OrderType(object):
    """
    A container for the different types of orders
    """
    BUY = 0
    SELL = 1


ORDER_TYPES = (
    (OrderType.BUY, 'buy'),
    (OrderType.SELL, 'sell')
)

OPEN, CANCELLED, PROCESSED = 'open', 'cancelled', 'processed'

ORDER_STATES = (
    (OPEN, _('open')),
    (CANCELLED, _('cancelled')),
    (PROCESSED, _('processed'))
)

SMA, EMA, RSI = 'sma', 'ema', 'rsi'

INDICATORS = (
    (SMA, _('sma')),
    (EMA, _('ema')),
    (RSI, _('rsi'))
)


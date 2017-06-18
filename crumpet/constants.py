class BotModes(object):
    """
    A container for the different types of orders
    """
    BACKTEST = 0
    LIVETEST = 1
    LIVE = 2


BOT_MODES = (
    (BotModes.BACKTEST, 'backtest'),
    (BotModes.LIVETEST, 'livetest'),
    (BotModes.LIVE, 'live')
)


MINIMUM_AMOUNT = 0.0001

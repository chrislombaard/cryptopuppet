class Wallet(object):
    '''
    This class keeps track of the current funds that a bot can utilize in trading.
    '''

    def __init__(self, assets: float, currency: float, instrument: str, fee: float = 0.25):
        '''
        This function initializes a Classification object.
        :param fee: The maximum percentage fee taken by the exchange per order.
        :param currency: The amount of currency (USD/ZAR) you have available to buy coins with.
        :param assets: The amount of the cypro-currency coins you have in your wallet ready to sell.
        :param instrument: The crypto-currency the bot will use to trade against BTC.
        '''
        self.instrument = instrument
        self.assets = assets
        self.currency = currency
        self.fee = fee
        self.starting_assets = assets
        self.starting_currency = currency
        self.initial_investment = 0

    def record_buy(self, buy_amount, price):
        '''
        Records the buy order transaction in the wallet.
        :param price: The current or closing price of the instrument.
        :param buy_amount: The amount to buy.
        '''
        self.assets += buy_amount
        self.currency -= (buy_amount * price)

    def record_sell(self, sell_amount, price):
        '''
        Records the sell order transaction in the wallet.
        :param price: The current or closing price of the instrument.
        :param sell_amount: The amount to sell.
        '''
        self.assets -= sell_amount
        self.currency += (sell_amount * price)

    def max_buy_amount(self, price):
        '''
        The maximum amount of a coin the bot can buy.
        :param price: The current or closing price of the instrument.
        '''
        return (self.currency / price) * (1 - (self.fee / 100))

    def max_sell_amount(self):
        '''
        The maximum amount of a coin the bot can sell.
        '''
        return self.assets * (1 - (self.fee / 100))

    def calculate_initial_investment(self, price: float):
        '''
        The initial investment made.
        :param price: The current or closing price of the instrument.
        '''
        self.initial_investment = (self.starting_assets * price) + self.starting_currency

    def percent_btc_profit(self, price):
        return ((((self.assets * price) + self.currency) - self.initial_investment) / self.initial_investment) * 100

    def total_btc(self, price):
        return (self.assets * price) + self.currency

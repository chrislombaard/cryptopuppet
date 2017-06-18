class Tick(object):
    '''
    A class that represents each tick pulled from the exchange at a certain time period.
    '''
    # Live tick
    '''
    {
        "BTC_LTC": 
            {
                "last": "0.0251", 
                "lowestAsk": "0.02589999", 
                "highestBid": "0.0251", 
                "percentChange": "0.02390438",
                "baseVolume": "6.16485315", 
                "quoteVolume": "245.82513926"
            },
    }
    '''

    def __init__(self, data=None):
        self.close = []
        self.lowest_ask = []
        self.highest_bid = []
        self.percent_change = []
        self.base_volume = []
        self.quote_volume = []
        self.buys = []
        self.sells = []
        self.dates = []
        self.wins = 0
        self.losses = 0
        self.last_order = ''
        self.first_order = True

        if data:
            self.close.append(float(data.get('last')))
            self.lowest_ask.append(float(data.get('lowestAsk')))
            self.highest_bid.append(float(data.get('highestBid')))
            self.percent_change.append(float(data.get('percentChange')))
            self.base_volume.append(float(data.get('baseVolume')))
            self.quote_volume.append(float(data.get('quoteVolume')))

    def add_tick(self, data):
        self.close.append(float(data.get('last')))
        self.lowest_ask.append(float(data.get('lowestAsk')))
        self.highest_bid.append(float(data.get('highestBid')))
        self.percent_change.append(float(data.get('percentChange')))
        self.base_volume.append(float(data.get('baseVolume')))
        self.quote_volume.append(float(data.get('quoteVolume')))

    '''{
          'date': 1496674800,
          'high': '0.0948042',
          'low': '0.09411001',
          'open': '0.09411001',
          'close': '0.09428881',
          'volume': '118.24142059',
          'quoteVolume': '1253.26415617',
          'weightedAverage': '0.09434676'
          },
    '''


class BackTick(object):
    def __init__(self, data=None):
        self.high = []
        self.date = []
        self.low = []
        self.open = []
        self.close = []
        self.volume = []
        self.sells = []
        self.buys = []
        self.quote_volume = []
        self.weighted_average = []
        self.wins = 0
        self.losses = 0
        self.dates = []
        self.last_order = ''
        self.first_order = True

        if data:
            self.dates.append(int(data.get('date')))
            self.high.append(float(data.get('high')))
            self.low.append(float(data.get('low')))
            self.open.append(float(data.get('open')))
            self.close.append(float(data.get('close')))
            self.volume.append(float(data.get('volume')))
            self.quote_volume.append(float(data.get('quoteVolume')))
            self.weighted_average.append(float(data.get('weightedAverage')))

    def add_tick(self, data):
        self.dates.append(int(data.get('date')))
        self.high.append(float(data.get('high')))
        self.low.append(float(data.get('low')))
        self.open.append(float(data.get('open')))
        self.close.append(float(data.get('close')))
        self.volume.append(float(data.get('volume')))
        self.quote_volume.append(float(data.get('quoteVolume')))
        self.weighted_average.append(float(data.get('weightedAverage')))

import yfinance as yf
import json


msft = yf.Ticker("MSFT")
data_json = json.dumps(msft.info)
print(data_json)

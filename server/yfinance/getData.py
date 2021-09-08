import yfinance as yf
import json


msft = yf.Ticker("MSFT")
print(msft.info)

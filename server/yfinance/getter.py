import yfinance as yf


def getData():
    msft = yf.Ticker("MSFT")
    print(msft)


getData()

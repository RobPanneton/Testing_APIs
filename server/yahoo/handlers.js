require("dotenv").config();

const request = require("request-promise");

const { yahooHeadersHost, yahooHeadersKey } = process.env;

const options = {
  method: "GET",
  url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary",
  qs: { symobl: "TSLA", region: "us" },
  headers: {
    "x-rapidapi-host": yahooHeadersHost,
    "x-rapidapi-key": yahooHeadersKey,
    useQueryString: true,
  },
};

const getSummary = async (req, res) => {
  try {
    const raw = await request(options);

    const data = await JSON.parse(raw);

    res.status(200).json({
      status: 200,
      message: "Data Retrieved",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      status: 404,
      message: "Failed",
      error: err,
    });
  }
};

module.exports = { getSummary };

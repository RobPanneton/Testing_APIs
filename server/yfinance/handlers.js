const request = require("request-promise");
const { spawn } = require("child_process");

const getStockInfo = async (req, res) => {
  var dataSet = [];

  const python = spawn("python", ["./yfinance/getData.py"]);

  python.stdout.on("data", (data) => {
    console.log("Pipe data from python script ...");
    // dataSet.push(data);
    dataSet = data;
  });

  // python.stderr.on("data", (data) => {
  //   console.error(`stderr: ${data}`);
  // });

  python.on("close", async (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.send(dataSet);
  });
};
module.exports = { getStockInfo };

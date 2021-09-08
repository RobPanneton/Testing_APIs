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
    // const data = JSON.parse(dataSet);
    // dataSet = JSON.stringify(dataSet);
    // dataSet = await dataSet.replace(/'/g, '"');
    // data = await JSON.parse(dataSet);
    dataSet = await dataSet.toString();
    dataSet = await dataSet.replace(/'/g, '"');
    dataSet = await dataSet.replace(/True/g, "true");
    dataSet = await dataSet.replace(/False/g, "false");
    dataSet = await dataSet.replace(/None/g, "null");
    data = await JSON.parse(dataSet);
    res.send(dataSet);
  });
};
module.exports = { getStockInfo };

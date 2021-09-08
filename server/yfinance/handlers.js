const request = require("request-promise");
const { spawn } = require("child_process");

const getStockInfo = async (req, res) => {
  var dataSet = [];

  const python = spawn("python", ["getter.py"]);

  python.stdout.on("data", (data) => {
    console.log("Pipe data from python script ...");
    dataSet.push(data);
  });

  python.on("close", (code) => {
    console.log(`child process cloes all stdio with code ${code}`);

    res.send(dataSet);
  });
};
module.exports = { getStockInfo };

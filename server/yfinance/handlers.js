const request = require("request-promise");

const getStockInfo = async (req, res) => {
  try {
    var spawn = require("child_process").spawn,
      py = spawn("python", ["./getter.py"]),
      data = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9],
      dataString = "";

    py.stdout.on("data", function (data) {
      dataString += data.toString();
    });
    py.stdout.on("end", function () {
      console.log("Sum of numbers =", dataString, "test");
    });
    py.stdin.write(JSON.stringify(data));
    await py.stdin.end();

    res.status(200).json({
      status: 200,
      message: "Data Retrieved",
    });
  } catch (err) {
    console.error(err);
    res.status(404).JSON({
      status: 404,
      message: "Fail",
    });
  }
};

module.exports = { getStockInfo };

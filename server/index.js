const express = require("express");
const morgan = require("morgan");

const { getSummary } = require("./yahooFinance/handlers");
const { getBoard } = require("./sudoku/sudokuHandler");

const PORT = 4000;

express()
  .use(morgan("tiny"))
  .use(express.urlencoded({ extended: false }))

  .use("/", express.static(__dirname + "/"))

  //.get("/api/param", callback)

  .get("/api/yahoo/getSummary", getSummary)

  .get("/api/sudoku/getBoard/:difficulty", getBoard)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not what you were looking for.",
    });
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}.`));

const request = require("request-promise");

const getBoard = async (req, res) => {
  // difficulties can be : easy, medium, hard
  // set up options for request
  const difficulty = req.params.difficulty;
  const options = {
    uri: `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`,
    headers: {
      Accept: "application/json",
    },
  };
  ///////////////////////////////////////////////
  try {
    const board = await request(options);

    const data = await JSON.parse(board);

    res.status(200).json({
      status: 200,
      data: data,
      message: "Success",
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

module.exports = {
  getBoard,
};

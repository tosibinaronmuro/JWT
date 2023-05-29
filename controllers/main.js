const JWT = require("jsonwebtoken");
require("dotenv").config();
const { BadRequestError} = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("please provide email and password");
  }
  const id = new Date().getUTCSeconds();
  const token = JWT.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  res.status(200).json({ msg: "user created", token });
};
const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 10000000);
    res.status(200).json({
      msg: `hello ${req.user.username}`,
      secret: `here is your secret number- ${luckyNumber}`,
    });
};

module.exports = { login, dashboard };

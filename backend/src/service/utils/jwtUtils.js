const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: 36000000 });
};

const decode = (token) => {
  return jwt.decode(token, process.env.TOKEN_SECRET);
};

module.exports = { generateAccessToken, decode };

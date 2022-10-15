const bcrypt = require("bcryptjs");

const getSalt = async () => {
  return await bcrypt.genSalt(10);
};

const hashPassword = async (password) => {
  const salt = await getSalt();
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
};

const comparePassword = async (passedInPassword, usersPassword) => {
  return await bcrypt.compare(passedInPassword, usersPassword);
};
module.exports = { hashPassword, comparePassword };

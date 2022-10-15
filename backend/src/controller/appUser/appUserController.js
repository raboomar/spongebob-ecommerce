const appUserService = require("../../service/appUser/appUserService");

const createUser = async (request, response) => {
  appUserService.createUser(request, response);
};

const login = async (request, response) => {
  appUserService.login(request, response);
};
module.exports = { createUser, login };

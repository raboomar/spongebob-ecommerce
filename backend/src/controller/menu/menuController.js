const menuService = require("../../service/menu/menuservice");
const getMenu = (request, response) => {
  menuService.getMenu(request, response);
};

module.exports = { getMenu };

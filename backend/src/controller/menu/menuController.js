const menuService = require("../../service/menu/menuservice");
const getMenu = (request, response) => {
  menuService.getMenu(request, response);
};

const getMenuItem = (request, response) => {
  menuService.getMenuItem(request, response);
};

module.exports = { getMenu, getMenuItem };

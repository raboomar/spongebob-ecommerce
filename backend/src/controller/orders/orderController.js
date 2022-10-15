const orderService = require("../../service/orders/orderService");

const getUserOrders = async (request, response) => {
  orderService.getUserOrders(request, response);
};

const addOrder = async (request, response) => {
  orderService.addOrder(request, response);
};

module.exports = { getUserOrders, addOrder };

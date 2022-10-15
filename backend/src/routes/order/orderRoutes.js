const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../../middleware/auth/auth");
const orderController = require("../../controller/orders/orderController");

router.get("/", auth, orderController.getUserOrders);

router.post("/add", orderController.addOrder);

module.exports = router;

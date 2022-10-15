const express = require("express");
const router = express.Router();
const menuController = require("../../controller/menu/menuController");
router.get("/", menuController.getMenu);

module.exports = router;

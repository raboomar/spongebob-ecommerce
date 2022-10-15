const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const appUserController = require("../../controller/appUser/appUserController");
router.post(
  "/add",
  [
    check("name", "name is required").not().isEmpty(),
    check("username", "Please include a valid username").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  appUserController.createUser
);

router.post(
  "/login",
  [
    check("username", "Please include a valid username").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).exists(),
  ],
  appUserController.login
);

module.exports = router;

const express = require("express");
const authController = require("../Controller/authController");
const { validate } = require("../Middleware/validateMiddleware");

const router = express.Router();

router.post(
  "/register",
  validate([
    { field: "name", type: "string", min: 2, max: 60 },
    { field: "email", type: "string", format: "email" },
    { field: "password", type: "string", min: 6, max: 100 },
  ]),
  authController.register,
);

router.post(
  "/login",
  validate([
    { field: "email", type: "string", format: "email" },
    { field: "password", type: "string", min: 6, max: 100 },
  ]),
  authController.login,
);

module.exports = router;

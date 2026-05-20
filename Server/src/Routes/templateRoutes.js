const express = require("express");
const templateController = require("../Controller/templateController");

const router = express.Router();

router.get("/", templateController.list);
router.get("/:id", templateController.details);

module.exports = router;

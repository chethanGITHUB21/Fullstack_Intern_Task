const express = require("express");
const favoriteController = require("../Controller/favoriteController");
const { requireAuth } = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/:templateId", requireAuth, favoriteController.add);
router.delete("/:templateId", requireAuth, favoriteController.remove);
router.get("/", requireAuth, favoriteController.list);

module.exports = router;

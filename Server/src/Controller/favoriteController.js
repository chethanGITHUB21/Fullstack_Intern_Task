const favoriteModel = require("../Models/favoriteModel");
const templateModel = require("../Models/templateModel");
const { created, ok } = require("../utils/apiResponse");

async function add(req, res, next) {
  try {
    const userId = req.user.id;
    const templateId = Number(req.params.templateId);

    if (!Number.isFinite(templateId)) {
      const err = new Error("Invalid templateId");
      err.statusCode = 400;
      throw err;
    }

    const template = await templateModel.getTemplateById(templateId);
    if (!template) {
      const err = new Error("Template not found");
      err.statusCode = 404;
      throw err;
    }

    await favoriteModel.addFavorite({ userId, templateId });
    return created(res, { templateId }, "Added to favorites");
  } catch (err) {
    return next(err);
  }
}

async function list(req, res, next) {
  try {
    const items = await favoriteModel.listFavoritesForUser(req.user.id);
    return ok(res, items);
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const userId = req.user.id;
    const templateId = Number(req.params.templateId);

    if (!Number.isFinite(templateId)) {
      const err = new Error("Invalid templateId");
      err.statusCode = 400;
      throw err;
    }

    const deleted = await favoriteModel.removeFavorite({ userId, templateId });
    if (!deleted) {
      const err = new Error("Favorite not found");
      err.statusCode = 404;
      throw err;
    }

    return ok(res, { templateId }, "Removed from favorites");
  } catch (err) {
    return next(err);
  }
}

module.exports = { add, remove, list };

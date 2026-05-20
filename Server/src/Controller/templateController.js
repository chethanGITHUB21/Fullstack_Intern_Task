const templateService = require("../Services/templateService");
const { ok } = require("../utils/apiResponse");

async function list(req, res, next) {
  try {
    const templates = await templateService.listTemplates();
    return ok(res, templates);
  } catch (err) {
    return next(err);
  }
}

async function details(req, res, next) {
  try {
    const template = await templateService.getTemplate(Number(req.params.id));
    return ok(res, template);
  } catch (err) {
    return next(err);
  }
}

module.exports = { list, details };


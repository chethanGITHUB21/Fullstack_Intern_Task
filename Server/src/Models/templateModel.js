const db = require("../config/dbconfig");

function listTemplates() {
  return db("templates").select(
    "id",
    "name",
    "description",
    "thumbnail_url",
    "category",
  );
}

function getTemplateById(id) {
  return db("templates")
    .where({ id })
    .select("id", "name", "description", "thumbnail_url", "category")
    .first();
}

module.exports = { listTemplates, getTemplateById };


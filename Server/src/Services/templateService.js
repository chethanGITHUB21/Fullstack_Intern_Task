const templateModel = require("../Models/templateModel");

async function listTemplates() {
  return templateModel.listTemplates();
}

async function getTemplate(id) {
  const template = await templateModel.getTemplateById(id);
  if (!template) {
    const err = new Error("Template not found");
    err.statusCode = 404;
    throw err;
  }
  return template;
}

module.exports = { listTemplates, getTemplate };


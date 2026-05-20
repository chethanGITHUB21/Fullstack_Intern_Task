const { fail } = require("../utils/apiResponse");

function notFound(req, res) {
  return fail(res, 404, "Route not found");
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const statusCode = Number(err.statusCode) || 500;
  const message = err.message || "Internal server error";
  const details = err.details;
  return fail(res, statusCode, message, details);
}

module.exports = { notFound, errorHandler };


const jwt = require("jsonwebtoken");
const { fail } = require("../utils/apiResponse");

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) {
    return fail(res, 401, "Missing or invalid Authorization header");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.userId, email: payload.email };
    return next();
  } catch (err) {
    return fail(res, 401, "Invalid or expired token");
  }
}

module.exports = { requireAuth };


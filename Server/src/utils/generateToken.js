const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    const err = new Error("JWT_SECRET is not set");
    err.statusCode = 500;
    throw err;
  }

  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

module.exports = { generateToken };


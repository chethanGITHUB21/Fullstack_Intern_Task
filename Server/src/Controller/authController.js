const authService = require("../Services/authService");
const { created, ok } = require("../utils/apiResponse");

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const result = await authService.register({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    });
    return created(res, result, "Registered successfully");
  } catch (err) {
    return next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await authService.login({
      email: email.trim().toLowerCase(),
      password,
    });
    return ok(res, result, "Logged in successfully");
  } catch (err) {
    return next(err);
  }
}

module.exports = { register, login };


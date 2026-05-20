const bcrypt = require("bcryptjs");
const userModel = require("../Models/userModel");
const { generateToken } = require("../utils/generateToken");

async function register({ name, email, password }) {
  const existing = await userModel.findByEmail(email);
  if (existing) {
    const err = new Error("Email already registered");
    err.statusCode = 409;
    throw err;
  }

  const password_hash = await bcrypt.hash(password, 10);
  const user = await userModel.createUser({ name, email, password_hash });
  const token = generateToken({ userId: user.id, email: user.email });

  return {
    token,
    user: { id: user.id, name: user.name, email: user.email },
  };
}

async function login({ email, password }) {
  const user = await userModel.findByEmail(email);
  if (!user) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const token = generateToken({ userId: user.id, email: user.email });
  return {
    token,
    user: { id: user.id, name: user.name, email: user.email },
  };
}

module.exports = { register, login };


const db = require("../config/dbconfig");

function findByEmail(email) {
  return db("users").where({ email }).first();
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function createUser({ name, email, password_hash }) {
  const [id] = await db("users").insert({ name, email, password_hash });
  return findById(id);
}

module.exports = { findByEmail, findById, createUser };


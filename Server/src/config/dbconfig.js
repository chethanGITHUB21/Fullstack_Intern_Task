const path = require("path");
const knex = require("knex");

require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const dbFile =
  process.env.DB_FILE || path.join(__dirname, "..", "..", "data", "app.sqlite3");

const db = knex({
  client: "sqlite3",
  connection: { filename: dbFile },
  useNullAsDefault: true,
});

module.exports = db;


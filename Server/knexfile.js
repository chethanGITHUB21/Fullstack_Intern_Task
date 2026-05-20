require("dotenv").config();

const path = require("path");

const dbFile =
  process.env.DB_FILE || path.join(__dirname, "data", "app.sqlite3");

module.exports = {
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, "src", "db", "migrations"),
  },
  seeds: {
    directory: path.join(__dirname, "src", "db", "seeds"),
  },
};


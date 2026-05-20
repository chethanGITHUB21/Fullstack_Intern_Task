const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { createApp } = require("./app");

const app = createApp();
const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => process.exit(0));
});

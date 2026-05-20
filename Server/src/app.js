const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes");
const templateRoutes = require("./Routes/templateRoutes");
const favoriteRoutes = require("./Routes/favoriteRoutes");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");

function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (_req, res) => {
    res.status(200).json({ message: "Mini SaaS Template Store API running" });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/templates", templateRoutes);
  app.use("/api/favorites", favoriteRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}

module.exports = { createApp };

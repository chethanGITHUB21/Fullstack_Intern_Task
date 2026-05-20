const db = require("../config/dbconfig");

async function addFavorite({ userId, templateId }) {
  // SQLite: ignore duplicates by checking first (unique constraint exists too)
  const existing = await db("favorites")
    .where({ user_id: userId, template_id: templateId })
    .first();
  if (existing) return existing;

  const [id] = await db("favorites").insert({
    user_id: userId,
    template_id: templateId,
  });
  return db("favorites").where({ id }).first();
}

async function removeFavorite({ userId, templateId }) {
  return db("favorites").where({ user_id: userId, template_id: templateId }).del();
}

function listFavoritesForUser(userId) {
  return db("favorites")
    .join("templates", "templates.id", "favorites.template_id")
    .where("favorites.user_id", userId)
    .select(
      "templates.id",
      "templates.name",
      "templates.description",
      "templates.thumbnail_url",
      "templates.category",
    );
}

module.exports = { addFavorite, removeFavorite, listFavoritesForUser };

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { fetchFavorites, removeFavorite } from "../services/favoriteService";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const items = await fetchFavorites();
        if (!cancelled) setFavorites(items);
      } catch (err) {
        if (!cancelled)
          setError(err?.response?.data?.message || "Failed to load favorites");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleRemove = async (templateId) => {
    setRemovingId(templateId);
    setError("");
    try {
      await removeFavorite(templateId);
      setFavorites((prev) => prev.filter((t) => t.id !== templateId));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to remove favorite");
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-semibold text-slate-900">Favorites</h1>

        {error ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {loading ? (
          <Loader />
        ) : favorites.length === 0 ? (
          <p className="mt-6 text-slate-600">
            No favorites yet. Go to Templates and add some.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {favorites.map((t) => (
              <article
                key={t.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[16/9] w-full bg-slate-100">
                  <img
                    alt={t.name}
                    className="h-full w-full object-cover"
                    src={t.thumbnail_url}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {t.name}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">{t.category}</p>
                    </div>
                    <button
                      className="shrink-0 rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700 disabled:opacity-60"
                      disabled={removingId === t.id}
                      onClick={() => handleRemove(t.id)}
                      type="button"
                    >
                      {removingId === t.id ? "Removing..." : "Remove Favorite"}
                    </button>
                  </div>
                  <p className="mt-3 text-slate-600">{t.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

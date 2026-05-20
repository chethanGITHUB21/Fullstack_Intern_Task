import Navbar from "../components/Navbar";
import TemplateCard from "../components/TemplateCard";
import Loader from "../components/Loader";
import { useEffect, useMemo, useState } from "react";
import { fetchTemplates } from "../services/templateService";
import {
  addFavorite,
  fetchFavorites,
  removeFavorite,
} from "../services/favoriteService";

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [favoritingId, setFavoritingId] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const [allTemplates, favorites] = await Promise.all([
          fetchTemplates(),
          fetchFavorites(),
        ]);
        if (cancelled) return;
        setTemplates(allTemplates);
        setFavoriteIds(new Set(favorites.map((t) => t.id)));
      } catch (err) {
        if (cancelled) return;
        setError(err?.response?.data?.message || "Failed to load templates");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(templates.map((t) => t.category));
    return ["All", ...Array.from(set).sort()];
  }, [templates]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      const matchesCategory = category === "All" || t.category === category;
      const matchesQuery =
        q.length === 0 ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [templates, query, category]);

  const handleToggleFavorite = async (templateId) => {
    setFavoritingId(templateId);
    setError("");
    try {
      const isFav = favoriteIds.has(templateId);
      if (isFav) {
        await removeFavorite(templateId);
        setFavoriteIds((prev) => {
          const next = new Set(prev);
          next.delete(templateId);
          return next;
        });
      } else {
        await addFavorite(templateId);
        setFavoriteIds((prev) => new Set([...prev, templateId]));
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to favorite template");
    } finally {
      setFavoritingId(null);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Templates</h1>
            <p className="mt-1 text-slate-600">
              Browse templates and add your favorites.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-slate-900 focus:outline-none md:w-72"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates..."
              type="text"
              value={query}
            />
            <select
              className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-slate-900 focus:outline-none md:w-48"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filtered.map((template) => (
              <TemplateCard
                key={template.id}
                disabled={favoritingId === template.id}
                isFavorited={favoriteIds.has(template.id)}
                onFavorite={handleToggleFavorite}
                template={template}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

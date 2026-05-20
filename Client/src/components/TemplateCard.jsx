export default function TemplateCard({
  template,
  isFavorited,
  onFavorite,
  disabled,
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-[16/9] w-full bg-slate-100">
        <img
          alt={template.name}
          className="h-full w-full object-cover"
          src={template.thumbnail_url}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {template.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{template.category}</p>
          </div>
          <button
            className={`shrink-0 rounded-lg px-3 py-2 text-sm ${
              isFavorited
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
            disabled={disabled}
            onClick={() => onFavorite?.(template.id)}
            type="button"
          >
            {isFavorited ? "Remove Favorite" : "Favorite"}
          </button>
        </div>
        <p className="mt-3 text-slate-600">{template.description}</p>
      </div>
    </article>
  );
}

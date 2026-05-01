import React, { useState, useMemo, useCallback } from "react";
import { Heart, ExternalLink, Github, Search, X, RotateCcw } from "lucide-react";

type TagId =
  | "favorite"
  | "open-source"
  | "product"
  | "typescript"
  | "react"
  | "monorepo"
  | "api-docs"
  | "design-system";

interface Tag {
  id: TagId;
  label: string;
  color: string;
}

interface ShowcaseSite {
  title: string;
  description: string;
  url: string;
  source?: string;
  image?: string;
  tags: TagId[];
}

const tags: Tag[] = [
  { id: "favorite", label: "Favorite", color: "#e91e8c" },
  { id: "open-source", label: "Open-Source", color: "#10b981" },
  { id: "product", label: "Product", color: "#3b82f6" },
  { id: "typescript", label: "TypeScript", color: "#3178c6" },
  { id: "react", label: "React", color: "#61dafb" },
  { id: "monorepo", label: "Monorepo", color: "#f59e0b" },
  { id: "api-docs", label: "API Docs", color: "#8b5cf6" },
  { id: "design-system", label: "Design System", color: "#ec4899" },
];

const sites: ShowcaseSite[] = [
  {
    title: "HyperFetch",
    description:
      "Full API documentation for the HyperFetch framework, auto-generated from TypeScript source with docsgen.",
    url: "https://hyperfetch.bettertyped.com/docs/api/getting-started",
    source: "https://github.com/BetterTyped/hyper-fetch",
    image: "/docsgen/showcase/hyper-fetch.png",
    tags: ["favorite", "open-source", "typescript", "react", "monorepo", "api-docs"],
  },
];

const FilterOperatorToggle = ({
  operator,
  onChange,
}: {
  operator: "OR" | "AND";
  onChange: (op: "OR" | "AND") => void;
}) => {
  return (
    <div className="flex items-center rounded-lg bg-slate-100 p-0.5">
      <button
        type="button"
        onClick={() => onChange("AND")}
        className={`
          px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200
          ${
            operator === "AND"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-400 hover:text-slate-600"
          }
        `}
      >
        AND
      </button>
      <button
        type="button"
        onClick={() => onChange("OR")}
        className={`
          px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200
          ${
            operator === "OR"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-400 hover:text-slate-600"
          }
        `}
      >
        OR
      </button>
    </div>
  );
};

const TagPill = ({
  tag,
  selected,
  onClick,
}: {
  tag: Tag;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
        transition-all duration-200 border
        ${
          selected
            ? "bg-white border-slate-300 text-slate-900 shadow-sm"
            : "bg-transparent border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
        }
      `}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{
          backgroundColor: tag.color,
          opacity: selected ? 1 : 0.5,
        }}
      />
      {tag.label}
    </button>
  );
};

const SiteCardTag = ({ tag }: { tag: Tag }) => {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: tag.color }}
      />
      {tag.label}
    </span>
  );
};

const SiteCard = ({ site }: { site: ShowcaseSite }) => {
  const siteTags = tags.filter((t) => site.tags.includes(t.id));
  const isFavorite = site.tags.includes("favorite");

  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
      {/* Image */}
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-[16/10] overflow-hidden bg-slate-50 relative"
      >
        {site.image ? (
          <img
            src={site.image}
            alt={site.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <span className="text-3xl font-bold text-slate-300">
              {site.title[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>

      {/* Content */}
      <div className="p-4">
        {/* Title row */}
        <div className="flex items-center gap-2 mb-2">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate"
          >
            {site.title}
          </a>
          {isFavorite && (
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 flex-shrink-0" />
          )}
          <div className="flex-1" />
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {site.source && (
              <a
                href={site.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] font-medium text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-full transition-colors"
              >
                <Github className="w-3 h-3" />
                source
              </a>
            )}
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
          {site.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {siteTags.map((tag) => (
            <SiteCardTag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
      <Search className="w-7 h-7 text-slate-400" />
    </div>
    <h3 className="text-lg font-semibold text-slate-800 mb-1">No sites found</h3>
    <p className="text-sm text-slate-500 max-w-md">
      Try adjusting your filters or search query to find what you're looking for.
    </p>
  </div>
);

export const ShowcasePage = () => {
  const [selectedTags, setSelectedTags] = useState<TagId[]>([]);
  const [operator, setOperator] = useState<"OR" | "AND">("OR");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = useCallback((tagId: TagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId],
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedTags([]);
    setSearchQuery("");
  }, []);

  const filteredSites = useMemo(() => {
    return sites.filter((site) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          site.title.toLowerCase().includes(q) ||
          site.description.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      if (selectedTags.length === 0) return true;

      if (operator === "OR") {
        return selectedTags.some((tag) => site.tags.includes(tag));
      }
      return selectedTags.every((tag) => site.tags.includes(tag));
    });
  }, [searchQuery, selectedTags, operator]);

  const hasActiveFilters = selectedTags.length > 0 || searchQuery.length > 0;

  return (
    <div className="mt-14">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
          Docsgen Showcase
        </h1>
        <p className="text-base text-slate-500 max-w-xl mx-auto mb-5">
          Documentation sites built with docsgen. See how teams generate beautiful API docs from TypeScript source.
        </p>
        <a
          href="https://github.com/BetterTyped/docsgen/pulls"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold transition-colors shadow-sm"
        >
          <span className="text-base">🚀</span>
          Add your site
        </a>
      </div>

      {/* Filters */}
      <div className="mb-8 rounded-xl border border-slate-200 bg-white p-4">
        {/* Top row: label + controls */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold text-slate-800">Filters</span>
            <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
              {filteredSites.length} {filteredSites.length === 1 ? "site" : "sites"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FilterOperatorToggle operator={operator} onChange={setOperator} />
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-all duration-200"
              >
                <RotateCcw className="w-3 h-3" />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <TagPill
              key={tag.id}
              tag={tag}
              selected={selectedTags.includes(tag.id)}
              onClick={() => toggleTag(tag.id)}
            />
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search for site name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-9 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Favorites section */}
      {!hasActiveFilters && sites.some((s) => s.tags.includes("favorite")) && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            Our favorites
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sites
              .filter((s) => s.tags.includes("favorite"))
              .map((site) => (
                <SiteCard key={site.title} site={site} />
              ))}
          </div>
        </div>
      )}

      {/* All sites */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          {hasActiveFilters ? "Results" : "All sites"}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSites.length > 0 ? (
            filteredSites.map((site) => <SiteCard key={site.title} site={site} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </div>

      {/* Submit CTA */}
      <div className="mt-16 text-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 py-10 px-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Using docsgen?</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-5">
          We welcome contributions! If you're using docsgen to generate documentation for your project, open a PR to add it here.
        </p>
        <div className="text-sm text-slate-600 max-w-xs mx-auto mb-6 space-y-1">
          <div>1. Fork the repository &middot; 2. Add your project &middot; 3. Include a link &middot; 4. Submit a PR</div>
        </div>
        <a
          href="https://github.com/BetterTyped/docsgen/pulls"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
        >
          <Github className="w-4 h-4" />
          Submit your site
        </a>
      </div>
    </div>
  );
};

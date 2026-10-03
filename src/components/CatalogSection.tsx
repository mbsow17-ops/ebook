import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ShoppingBag, Star, SlidersHorizontal, Check, Volume2 } from 'lucide-react';
import { Ebook } from '../types';

interface CatalogSectionProps {
  ebooks: Ebook[];
  onSelectEbook: (ebook: Ebook) => void;
  onReadSample: (ebook: Ebook) => void;
  onAddToCart: (ebook: Ebook) => void;
  onPlayAudioExcerpt: (ebook: Ebook) => void;
  selectedCategoryFilter: string;
  onSelectCategoryFilter: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  ebooks,
  onSelectEbook,
  onReadSample,
  onAddToCart,
  onPlayAudioExcerpt,
  selectedCategoryFilter,
  onSelectCategoryFilter,
  searchQuery,
  onSearchChange,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'price-asc' | 'price-desc'>('featured');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Toute la collection' },
    { id: 'imposteur', label: "Syndrome de l'Imposteur" },
    { id: 'prise-de-parole', label: 'Prise de Parole' },
    { id: 'estime', label: 'Estime & Sérénité' },
    { id: 'affirmation', label: 'Affirmation & Limites' },
    { id: 'action', label: 'Passage à l’Action' },
  ];

  const filteredEbooks = useMemo(() => {
    return ebooks
      .filter((ebook) => {
        const matchesCategory =
          selectedCategoryFilter === 'all' || ebook.category === selectedCategoryFilter;
        const matchesSearch =
          ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ebook.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ebook.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ebook.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        // featured: bestsellers first
        return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
      });
  }, [ebooks, selectedCategoryFilter, searchQuery, sortBy]);

  const handleAddWithFeedback = (ebook: Ebook) => {
    onAddToCart(ebook);
    setRecentlyAddedId(ebook.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <section id="catalogue" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
            Catalogue Curaté
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1615] font-semibold [text-wrap:balance]">
            Des ouvrages conçus pour transformer votre dialogue intérieur.
          </h2>
          <p className="text-sm sm:text-base text-[#1A1615]/70 max-w-xl font-light">
            Chaque ebook contient une méthode pas-à-pas, des fiches réflexes prêtes à l'emploi et un accès direct aux formats EPUB, Kindle et PDF.
          </p>
        </div>

        {/* Search input in catalog */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A1615]/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un thème, un auteur..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1A1615]/15 rounded-lg text-sm text-[#1A1615] placeholder:text-[#1A1615]/40 focus:outline-none focus:border-[#9E7A4A] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#1A1615]/40 hover:text-[#1A1615]"
            >
              Effacer
            </button>
          )}
        </div>
      </div>

      {/* Filter and Sort Bar (Segmented Controls) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#1A1615]/10">
        {/* Interactive Segmented Filter Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategoryFilter === cat.id
                  ? 'bg-[#1A1615] text-[#FAF8F5] shadow-xs'
                  : 'text-[#1A1615]/70 hover:text-[#1A1615] hover:bg-[#1A1615]/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 self-end lg:self-auto text-xs text-[#1A1615]/70">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#1A1615]/50" />
          <span>Trier par :</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent font-medium text-[#1A1615] focus:outline-none cursor-pointer py-1"
          >
            <option value="featured">Sélection éditoriale</option>
            <option value="rating">Meilleures évaluations</option>
            <option value="price-asc">Prix : croissant</option>
            <option value="price-desc">Prix : décroissant</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredEbooks.length === 0 ? (
        <div className="py-20 text-center space-y-4">
          <p className="text-[#1A1615]/60 text-base">
            Aucun ebook ne correspond à votre recherche "{searchQuery}".
          </p>
          <button
            onClick={() => {
              onSelectCategoryFilter('all');
              onSearchChange('');
            }}
            className="text-sm font-medium text-[#9E7A4A] hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEbooks.map((ebook) => {
            const isJustAdded = recentlyAddedId === ebook.id;

            return (
              <article
                key={ebook.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#1A1615]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Product Image Stage (65-70% height emphasis) */}
                <div
                  onClick={() => onSelectEbook(ebook)}
                  className="relative aspect-[3/4] bg-[#EDE8E1] overflow-hidden cursor-pointer flex items-center justify-center p-6"
                >
                  <img
                    src={ebook.coverImage}
                    alt={`Couverture du livre ${ebook.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center rounded-lg shadow-md transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Clean text indicators without pill clutter */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs pointer-events-none">
                    {ebook.bestseller && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E7A4A] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded">
                        Bestseller
                      </span>
                    )}
                    <span className="ml-auto text-[11px] font-medium text-[#1A1615]/80 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded tabular-nums">
                      {ebook.pages} pages
                    </span>
                  </div>

                  {/* Quick Audio Preview Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayAudioExcerpt(ebook);
                    }}
                    className="absolute bottom-4 right-4 p-2 bg-[#FAF8F5]/95 hover:bg-[#FAF8F5] text-[#1A1615] rounded-full shadow-md transition-all hover:scale-110 cursor-pointer flex items-center gap-1.5 text-xs font-medium px-3"
                    title="Écouter l'extrait audio"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#9E7A4A]" />
                    <span className="hidden sm:inline">Écouter</span>
                  </button>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata with typographic dot */}
                    <div className="flex items-center gap-2 text-xs text-[#1A1615]/60">
                      <span className="uppercase tracking-wider font-semibold text-[#9E7A4A]">
                        {ebook.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{ebook.readTime}</span>
                    </div>

                    {/* Book Title */}
                    <h3
                      onClick={() => onSelectEbook(ebook)}
                      className="font-serif text-2xl font-semibold text-[#1A1615] hover:text-[#9E7A4A] transition-colors cursor-pointer leading-snug"
                    >
                      {ebook.title}
                    </h3>

                    <p className="text-xs text-[#1A1615]/60 font-medium">
                      Par {ebook.author}
                    </p>

                    {/* Short excerpt description */}
                    <p className="text-xs sm:text-sm text-[#1A1615]/75 line-clamp-2 leading-relaxed">
                      {ebook.shortDescription}
                    </p>
                  </div>

                  {/* Rating & Proof */}
                  <div className="pt-2 flex items-center justify-between text-xs text-[#1A1615]/70 border-t border-[#1A1615]/5">
                    <div className="flex items-center gap-1">
                      <div className="flex text-[#9E7A4A]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="font-semibold text-[#1A1615] ml-1 tabular-nums">
                        {ebook.rating}
                      </span>
                      <span>({ebook.reviewCount})</span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-[#1A1615]/40 line-through mr-1.5 tabular-nums">
                        {ebook.originalPrice} €
                      </span>
                      <span className="font-serif text-lg font-bold text-[#1A1615] tabular-nums">
                        {ebook.price} €
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons: Read Sample & Add to Bag */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onReadSample(ebook)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#FAF8F5] border border-[#1A1615]/15 text-[#1A1615] rounded-lg hover:bg-white text-xs font-medium transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#9E7A4A]" />
                      <span>Extrait gratuit</span>
                    </button>

                    <button
                      onClick={() => handleAddWithFeedback(ebook)}
                      className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#1A1615] hover:bg-[#2C2624] text-white shadow-xs'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Ajouté !</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Acheter ({ebook.price}€)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

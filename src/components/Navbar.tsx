import React from 'react';
import { ShoppingBag, Search, Compass, BookOpen } from 'lucide-react';
import { Ebook } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
  onOpenSearch,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1A1615]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single Brand Wordmark */}
        <a
          href="#"
          className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A1615] hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Élan Intérieur
        </a>

        {/* Zone 2: 4-6 Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1A1615]/70">
          <a
            href="#catalogue"
            className="hover:text-[#1A1615] transition-colors whitespace-nowrap"
          >
            Catalogue
          </a>
          <button
            onClick={onOpenQuiz}
            className="hover:text-[#1A1615] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#9E7A4A]" />
            Guide Diagnostic
          </button>
          <a
            href="#coffret"
            className="hover:text-[#1A1615] transition-colors whitespace-nowrap"
          >
            Coffret Sérénité
          </a>
          <a
            href="#temoignages"
            className="hover:text-[#1A1615] transition-colors whitespace-nowrap"
          >
            Avis Lecteurs
          </a>
          <a
            href="#garanties"
            className="hover:text-[#1A1615] transition-colors whitespace-nowrap"
          >
            Engagements
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-[#1A1615]/80 hover:text-[#1A1615] hover:bg-[#1A1615]/5 rounded-full transition-colors cursor-pointer"
            aria-label="Rechercher un ebook"
            title="Rechercher"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#1A1615] hover:bg-[#2C2624] rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            aria-label="Voir le panier"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Panier</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center text-xs font-semibold px-1.5 py-0.5 bg-[#9E7A4A] text-white rounded-full min-w-5 tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

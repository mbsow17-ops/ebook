import React, { useState } from 'react';
import { X, Star, ShoppingBag, BookOpen, Volume2, CheckCircle2, ShieldCheck, Download, Smartphone, Laptop, FileText } from 'lucide-react';
import { Ebook } from '../types';

interface ProductDetailModalProps {
  ebook: Ebook | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (ebook: Ebook) => void;
  onReadSample: (ebook: Ebook) => void;
  onPlayAudioExcerpt: (ebook: Ebook) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  ebook,
  isOpen,
  onClose,
  onAddToCart,
  onReadSample,
  onPlayAudioExcerpt,
}) => {
  const [added, setAdded] = useState(false);

  if (!isOpen || !ebook) return null;

  const handleAdd = () => {
    onAddToCart(ebook);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1615]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#1A1615]/10 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-[#1A1615]/10 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#9E7A4A] uppercase tracking-wider font-semibold">
            <span>{ebook.categoryLabel}</span>
            <span>·</span>
            <span className="text-[#1A1615]/50">Édition Numérique Intégrale</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1A1615]/50 hover:text-[#1A1615] rounded-lg hover:bg-[#1A1615]/5 transition-colors cursor-pointer"
            aria-label="Fermer la vue détaillée"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-8">
          
          {/* Top Stage: 2-column Purchase Module & Visual */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Visual Column */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#1A1615]/10 bg-[#EDE8E1]">
                <img
                  src={ebook.coverImage}
                  alt={ebook.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Quick Audio excerpt button */}
              <button
                onClick={() => onPlayAudioExcerpt(ebook)}
                className="mt-4 w-full max-w-xs py-2.5 px-4 bg-white border border-[#1A1615]/15 rounded-xl text-xs font-medium text-[#1A1615] hover:bg-[#FAF8F5] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <Volume2 className="w-4 h-4 text-[#9E7A4A]" />
                <span>Écouter l'introduction audio ({ebook.audioDuration})</span>
              </button>

              {/* Format badges */}
              <div className="mt-4 w-full max-w-xs p-3 bg-white/70 rounded-xl border border-[#1A1615]/10 text-xs text-[#1A1615]/70 space-y-1.5">
                <div className="font-semibold text-[#1A1615] flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#9E7A4A]" />
                  <span>Formats inclus à l'achat :</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#1A1615]/60 pt-0.5">
                  <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> PDF Maquetté</span>
                  <span className="flex items-center gap-1"><Smartphone className="w-3 h-3" /> EPUB Liseuse</span>
                  <span className="flex items-center gap-1"><Laptop className="w-3 h-3" /> Kindle .kfx</span>
                </div>
              </div>
            </div>

            {/* Contiguous Purchase Details Column */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1615] leading-tight">
                  {ebook.title}
                </h1>
                <p className="text-sm sm:text-base text-[#1A1615]/75 mt-1 font-light italic">
                  {ebook.subtitle}
                </p>
                <div className="text-xs text-[#1A1615]/60 mt-2">
                  Ouvrage de <strong className="font-semibold text-[#1A1615]">{ebook.author}</strong> — {ebook.authorBio}
                </div>
              </div>

              {/* Rating Proof */}
              <div className="flex items-center gap-3 text-xs text-[#1A1615]/70">
                <div className="flex text-[#9E7A4A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#1A1615] tabular-nums">
                  {ebook.rating} / 5
                </span>
                <span>·</span>
                <span>{ebook.reviewCount} avis certifiés</span>
                <span>·</span>
                <span>{ebook.pages} pages</span>
              </div>

              {/* Price baseline */}
              <div className="p-4 bg-white rounded-2xl border border-[#1A1615]/10 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-[#1A1615]/60">Prix de l'édition complète</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl font-bold text-[#1A1615] tabular-nums">
                        {ebook.price} €
                      </span>
                      <span className="text-sm text-[#1A1615]/40 line-through tabular-nums">
                        {ebook.originalPrice} €
                      </span>
                      <span className="text-xs font-semibold text-[#9E7A4A]">
                        -35% cette semaine
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-[#1A1615]/60">
                    <div>Disponibilité immédiate</div>
                    <div className="text-emerald-700 font-medium">✓ Téléchargement instantané</div>
                  </div>
                </div>

                {/* Primary Purchase Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={handleAdd}
                    className={`py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                      added
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#1A1615] hover:bg-[#2C2624] text-white'
                    }`}
                  >
                    {added ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Ajouté au panier !</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Ajouter au panier</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      onReadSample(ebook);
                      onClose();
                    }}
                    className="py-3.5 px-4 bg-[#FAF8F5] border border-[#1A1615]/20 text-[#1A1615] hover:bg-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#9E7A4A]" />
                    <span>Feuilleter l'extrait gratuit</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#1A1615]/60 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9E7A4A]" />
                  <span>Garantie sérénité 30 jours : satisfait ou remboursé sans justification</span>
                </div>
              </div>

              {/* Bonus Included */}
              <div className="p-3 bg-[#9E7A4A]/10 border border-[#9E7A4A]/25 rounded-xl text-xs text-[#1A1615] flex items-center gap-2">
                <span className="font-semibold text-[#9E7A4A]">Bonus offert :</span>
                <span>{ebook.bonusIncluded}</span>
              </div>
            </div>

          </div>

          {/* Section: Full Description & Synopsis */}
          <div className="space-y-4 pt-4 border-t border-[#1A1615]/10">
            <h2 className="font-serif text-2xl font-semibold text-[#1A1615]">
              Présentation de l'ouvrage
            </h2>
            <p className="text-sm sm:text-base text-[#1A1615]/80 leading-relaxed font-light">
              {ebook.fullDescription}
            </p>
          </div>

          {/* Section: Key Takeaways */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif text-xl font-semibold text-[#1A1615]">
              Ce que vous allez acquérir concrètement :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ebook.keyTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white rounded-xl border border-[#1A1615]/10 flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1615]/85"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#9E7A4A] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Table of Contents */}
          <div className="space-y-4 pt-4 border-t border-[#1A1615]/10">
            <h3 className="font-serif text-xl font-semibold text-[#1A1615]">
              Sommaire détaillé
            </h3>
            <div className="divide-y divide-[#1A1615]/10 bg-white rounded-2xl border border-[#1A1615]/10 overflow-hidden">
              {ebook.tableOfContents.map((chap, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-[#9E7A4A] w-20 shrink-0">
                      {chap.number}
                    </span>
                    <span className="text-[#1A1615]/90 font-light">
                      {chap.title}
                    </span>
                  </div>
                  <span className="text-xs text-[#1A1615]/50 tabular-nums">
                    p. {chap.page}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

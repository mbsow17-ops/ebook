import React, { useState } from 'react';
import { Sparkles, Check, Download, ShoppingBag, ArrowRight } from 'lucide-react';
import { Ebook } from '../types';

interface BundleSectionProps {
  ebooks: Ebook[];
  onAddBundleToCart: (bundleEbooks: Ebook[]) => void;
}

export const BundleSection: React.FC<BundleSectionProps> = ({
  ebooks,
  onAddBundleToCart,
}) => {
  const [added, setAdded] = useState(false);
  const bundleEbooks = ebooks.slice(0, 3); // The 3 bestsellers

  const handleBuyBundle = () => {
    onAddBundleToCart(bundleEbooks);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="coffret" className="py-16 bg-[#F4EFEA] border-y border-[#1A1615]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1615] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Offre Éditeur Spéciale · Pack 3 Volumes</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight [text-wrap:balance]">
                Le Coffret Confiance Intégrale
              </h2>

              <p className="text-sm sm:text-base text-[#FAF8F5]/80 font-light leading-relaxed max-w-xl">
                Associez les 3 piliers indispensables pour métamorphoser votre présence :
                déconstruire l'imposture, déployer votre voix en public et rebâtir une estime inconditionnelle.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Volume 1 : Vaincre le Syndrome de l'Imposteur (Dr. C. Vaugirard)",
                  "Volume 2 : La Voix Rayonnante (M-A. Daudet)",
                  "Volume 3 : Le Sanctuaire Intérieur (É. Saint-Germain)",
                  "Bonus offert : 3 Cahiers d'exercices & fiches réflexes (Notion + PDF)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#FAF8F5]/90">
                    <div className="w-5 h-5 rounded-full bg-[#9E7A4A]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <div className="text-xs text-[#FAF8F5]/50">Prix de la collection complète</div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-4xl font-bold text-white tabular-nums">
                      34 €
                    </span>
                    <span className="text-sm text-[#FAF8F5]/50 line-through tabular-nums">
                      54 €
                    </span>
                    <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                      Économisez 20 €
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBuyBundle}
                  className={`px-8 py-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg whitespace-nowrap ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#9E7A4A] hover:bg-[#8A6739] text-white hover:scale-102'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Coffret ajouté au panier !</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Commander le coffret (34 €)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#FAF8F5]/60 pt-2">
                <span className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Téléchargement instantané
                </span>
                <span>·</span>
                <span>Garantie 30 jours satisfait ou remboursé</span>
              </div>
            </div>

            {/* Right: Stacked Books Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-6">
              <div className="relative w-full max-w-sm flex items-center justify-center">
                {/* Visual book 1 */}
                <div className="absolute -left-4 w-40 sm:w-44 aspect-[3/4] rotate-[-8deg] shadow-2xl rounded-lg overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
                  <img
                    src={bundleEbooks[0]?.coverImage}
                    alt={bundleEbooks[0]?.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Visual book 3 */}
                <div className="absolute -right-4 w-40 sm:w-44 aspect-[3/4] rotate-[8deg] shadow-2xl rounded-lg overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
                  <img
                    src={bundleEbooks[2]?.coverImage}
                    alt={bundleEbooks[2]?.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Center visual book 2 */}
                <div className="relative z-10 w-44 sm:w-48 aspect-[3/4] shadow-2xl rounded-lg overflow-hidden border border-white/20 transform hover:scale-105 transition-transform">
                  <img
                    src={bundleEbooks[1]?.coverImage}
                    alt={bundleEbooks[1]?.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

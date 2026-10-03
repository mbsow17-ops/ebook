import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Download, Star } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenQuiz }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 border-b border-[#1A1615]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Statement & Actions */}
          <div className="lg:col-span-7 space-y-8">
            {/* Quiet 1-line metadata text (no pills) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
              <span>Édition Psychologie & Dépassement</span>
              <span aria-hidden="true">·</span>
              <span>Formats E-reader & PDF</span>
              <span aria-hidden="true">·</span>
              <span>Accès Immédiat</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1615] font-semibold leading-[1.1] tracking-tight [text-wrap:balance]">
              La confiance ne s’attend pas : elle se bâtit, page après page.
            </h1>

            {/* Subtitle / Prose */}
            <p className="text-base sm:text-lg text-[#1A1615]/75 leading-relaxed max-w-2xl font-light">
              Découvrez des guides pratiques et éprouvés pour dompter le syndrome de l'imposteur,
              oser prendre la parole avec clarté et poser des limites sereines sans culpabilité.
              Rédigés par des praticiens et pensés pour une transformation réelle.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1A1615] text-[#FAF8F5] font-medium text-sm rounded-lg hover:bg-[#2C2624] transition-all shadow-sm group cursor-pointer whitespace-nowrap"
              >
                <span>Explorer le catalogue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white border border-[#1A1615]/20 text-[#1A1615] font-medium text-sm rounded-lg hover:bg-[#FAF8F5] hover:border-[#1A1615]/40 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-[#9E7A4A]" />
                <span>Quel ebook choisir ? (Diagnostic 2 min)</span>
              </button>
            </div>

            {/* Claim-to-Proof Adjacency */}
            <div className="pt-6 border-t border-[#1A1615]/10 grid grid-cols-3 gap-6 text-[#1A1615]/80">
              <div>
                <div className="font-serif text-2xl font-semibold text-[#1A1615] tabular-nums">
                  12 400+
                </div>
                <div className="text-xs text-[#1A1615]/60 mt-0.5">
                  Lecteurs accompagnés
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-serif text-2xl font-semibold text-[#1A1615] tabular-nums">
                    4.9
                  </span>
                  <div className="flex text-[#9E7A4A] ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-[#1A1615]/60 mt-0.5">
                  Moyenne des avis vérifiés
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl font-semibold text-[#1A1615] tabular-nums">
                  30 jours
                </div>
                <div className="text-xs text-[#1A1615]/60 mt-0.5">
                  Garantie satisfaction totale
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Glow & Border frame */}
              <div className="relative aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#1A1615]/10 bg-[#EDE8E1]">
                <img
                  src="/src/assets/images/hero_confidence_books_1791068709519.jpg"
                  alt="Éditions L'Élan - Collection d'ebooks de développement personnel et confiance en soi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to elegant CSS container if image load fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Refined editorial caption box */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#1A1615]/60 px-2">
                <span>Collection Printemps-Été 2026</span>
                <span className="flex items-center gap-1.5 text-[#9E7A4A]">
                  <Download className="w-3.5 h-3.5" />
                  Format EPUB, PDF & Kindle inclus
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

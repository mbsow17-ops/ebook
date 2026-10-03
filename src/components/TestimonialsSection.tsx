import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../data/ebooks';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="temoignages" className="py-16 lg:py-24 border-b border-[#1A1615]/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-12">
        <div className="text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
          Preuves & Résultats Concrets
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1615] [text-wrap:balance]">
          Ils ont brisé leur plafond de verre intérieur.
        </h2>
        <p className="text-sm sm:text-base text-[#1A1615]/70 max-w-xl mx-auto font-light">
          Découvrez les transformations vécues par nos lecteurs dans leurs réunions, leurs relations et leurs projets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="bg-white p-7 rounded-2xl border border-[#1A1615]/10 shadow-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              {/* Stars */}
              <div className="flex items-center justify-between">
                <div className="flex text-[#9E7A4A]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Achat Vérifié</span>
                </div>
              </div>

              {/* Title & Comment */}
              <h3 className="font-serif text-lg font-semibold text-[#1A1615] leading-snug">
                "{review.title}"
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1615]/75 leading-relaxed font-light">
                {review.comment}
              </p>
            </div>

            {/* Outcome Callout & Author */}
            <div className="pt-4 border-t border-[#1A1615]/10 space-y-3">
              <div className="p-2.5 bg-[#FAF8F5] rounded-xl border border-[#1A1615]/5 text-xs text-[#1A1615]">
                <strong className="text-[#9E7A4A] font-semibold">Résultat obtenu : </strong>
                <span>{review.outcome}</span>
              </div>

              <div>
                <div className="font-medium text-xs text-[#1A1615]">
                  {review.author}
                </div>
                <div className="text-[11px] text-[#1A1615]/50">
                  {review.role} · {review.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

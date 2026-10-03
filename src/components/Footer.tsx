import React, { useState } from 'react';
import { ChevronDown, Check, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const faqs = [
    {
      q: 'Sous quels formats les ebooks sont-ils livrés ?',
      a: 'Pour chaque achat, vous recevez instantanément trois versions : un fichier EPUB pour liseuses (Kindle, Kobo, Vivlio, Apple Books), un PDF maquetté haute lisibilité pour ordinateurs et tablettes, ainsi qu’un lien vers le cahier d’exercices Notion associé.'
    },
    {
      q: 'Comment fonctionne la garantie de 30 jours ?',
      a: 'Si un ebook ne répond pas à vos attentes, écrivez-nous simplement à contact@elan-interieur.fr avec votre numéro de commande dans les 30 jours suivant l’achat. Vous serez remboursé(e) intégralement sous 48h, sans justification requise.'
    },
    {
      q: 'Puis-je lire l’extrait avant d’acheter ?',
      a: 'Oui ! Cliquez sur le bouton "Extrait gratuit" ou "Feuilleter" sur n’importe quel ebook pour ouvrir immédiatement notre liseuse interactive et consulter le Chapitre 1 complet sans inscription.'
    },
    {
      q: 'Les ebooks sont-ils adaptés aux débutants en développement personnel ?',
      a: 'Absolument. Nos auteurs privilégient un style direct, dénué de jargon ésotérique ou de formules creuses. Chaque concept théorique est immédiatement traduit en exercice concret pour la vie quotidienne ou professionnelle.'
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#1A1615] text-[#FAF8F5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              Foire Aux Questions
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-3 pt-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-sm sm:text-base font-medium text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/50 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-white/75 font-light leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10 border-y border-white/10">
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-serif text-2xl font-semibold text-white">
              L’Élan Hebdomadaire
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-md font-light leading-relaxed">
              Une réflexion courte et un exercice d'auto-coaching chaque dimanche matin pour cultiver une assurance tranquille. Aucun spam, désinscription en un clic.
            </p>
          </div>

          <div className="lg:col-span-6">
            {newsletterSubscribed ? (
              <div className="p-4 bg-[#9E7A4A]/20 border border-[#D4AF37]/30 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm text-[#D4AF37]">
                <Check className="w-5 h-5 shrink-0" />
                <span>Merci ! Vous recevrez la prochaine réflexion dominicale dans votre boîte mail.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Votre adresse email professionnelle ou personnelle"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#9E7A4A] hover:bg-[#8A6739] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer shrink-0"
                >
                  S'inscrire
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Wordmark */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div className="font-serif text-lg font-semibold text-white tracking-tight">
            Élan Intérieur
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#catalogue" className="hover:text-white transition-colors">Catalogue</a>
            <a href="#coffret" className="hover:text-white transition-colors">Coffret 3 Volumes</a>
            <a href="#temoignages" className="hover:text-white transition-colors">Avis Vérifiés</a>
            <a href="#garanties" className="hover:text-white transition-colors">Mentions Légales & CGV</a>
          </div>

          <div>
            © {new Date().getFullYear()} Éditions L'Élan. Tous droits réservés.
          </div>
        </div>

      </div>
    </footer>
  );
};

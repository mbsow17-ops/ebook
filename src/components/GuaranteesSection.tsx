import React from 'react';
import { Download, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';

export const GuaranteesSection: React.FC = () => {
  const pillars = [
    {
      icon: Download,
      title: 'Accès Immédiat & Pérenne',
      description: 'Dès votre commande validée, téléchargez vos ebooks instantanément. Les liens restent valides à vie sans restriction.'
    },
    {
      icon: Smartphone,
      title: 'Compatibilité Totale',
      description: 'Lisez confortablement sur liseuse (Kobo, Kindle, Vivlio), tablette (iPad, Android), ordinateur ou smartphone en EPUB et PDF.'
    },
    {
      icon: ShieldCheck,
      title: 'Garantie 30 Jours Intégrale',
      description: 'Si la méthode ne transforme pas concrètement votre quotidien, un simple email suffit pour être remboursé(e) à 100%.'
    },
    {
      icon: Sparkles,
      title: 'Cahiers d’Exercices Inclus',
      description: 'Chaque ouvrage est accompagné de fiches réflexes, tableaux d’auto-coaching et templates Notion pour passer à l’action.'
    }
  ];

  return (
    <section id="garanties" className="py-16 bg-[#FAF8F5] border-b border-[#1A1615]/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#9E7A4A]/10 text-[#9E7A4A] flex items-center justify-center">
              <pillar.icon className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#1A1615]">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1615]/70 leading-relaxed font-light">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

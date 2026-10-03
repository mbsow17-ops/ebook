import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, RotateCcw, BookOpen, ShoppingBag, X } from 'lucide-react';
import { Ebook } from '../types';
import { EBOOKS } from '../data/ebooks';

interface DiagnosticQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEbook: (ebook: Ebook) => void;
  onReadSample: (ebook: Ebook) => void;
  onAddToCart: (ebook: Ebook) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({
  isOpen,
  onClose,
  onSelectEbook,
  onReadSample,
  onAddToCart,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedChallenge, setSelectedChallenge] = useState<string>('imposteur-1');
  const [selectedContext, setSelectedContext] = useState<string>('pro');
  const [selectedFormat, setSelectedFormat] = useState<string>('pratique');

  if (!isOpen) return null;

  const recommendedEbook = EBOOKS.find((e) => e.id === selectedChallenge) || EBOOKS[0];

  const handleReset = () => {
    setStep(1);
    setSelectedChallenge('imposteur-1');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1615]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#1A1615]/10 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1A1615]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-[#9E7A4A]" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#1A1615]">
                Diagnostic Personnalisé
              </h2>
              <p className="text-xs text-[#1A1615]/60">
                Trouvez le guide exact pour libérer votre confiance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1A1615]/50 hover:text-[#1A1615] rounded-lg hover:bg-[#1A1615]/5 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#1A1615]/5 h-1">
          <div
            className="bg-[#9E7A4A] h-1 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Content area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
                Étape 1 sur 3
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1615]">
                Quel est le principal frein qui entrave votre confiance en ce moment ?
              </h3>
              <div className="space-y-3 pt-2">
                {[
                  {
                    id: 'imposteur-1',
                    title: "Le doute de ma légitimité (Syndrome de l'imposteur)",
                    desc: "J'ai l'impression que mes succès sont dus à la chance et je crains d'être démasqué(e)."
                  },
                  {
                    id: 'parole-1',
                    title: "La peur de prendre la parole et le trac",
                    desc: "Ma voix tremble, mon cœur bat la chamade en réunion ou devant un auditoire."
                  },
                  {
                    id: 'estime-1',
                    title: "Une voix critique et un manque de douceur envers moi-même",
                    desc: "Je ne me pardonne aucune erreur et ma valeur dépend exclusivement de mes performances."
                  },
                  {
                    id: 'limites-1',
                    title: "La difficulté à dire non et poser des limites",
                    desc: "Je dis oui pour faire plaisir et éviter les conflits, au détriment de mon énergie."
                  },
                  {
                    id: 'action-1',
                    title: "La rumination et la peur du premier pas",
                    desc: "Je prévois tout dans ma tête depuis des mois mais je reste paralysé(e) avant d'agir."
                  }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedChallenge(option.id);
                      setStep(2);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedChallenge === option.id
                        ? 'border-[#9E7A4A] bg-[#9E7A4A]/5 shadow-sm'
                        : 'border-[#1A1615]/10 bg-white hover:border-[#1A1615]/30'
                    }`}
                  >
                    <div className="font-medium text-[#1A1615] text-sm sm:text-base">
                      {option.title}
                    </div>
                    <div className="text-xs sm:text-sm text-[#1A1615]/60 mt-1">
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
                Étape 2 sur 3
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1615]">
                Dans quelle sphère ressentez-vous ce besoin d'assurance en priorité ?
              </h3>
              <div className="space-y-3 pt-2">
                {[
                  {
                    id: 'pro',
                    title: 'Au travail et dans ma carrière',
                    desc: 'Réunions, négociations salariales, management, entretiens.'
                  },
                  {
                    id: 'perso',
                    title: 'Dans ma vie personnelle et sentimentale',
                    desc: 'Relations de couple, amis, famille, prise de décisions pour moi.'
                  },
                  {
                    id: 'lesdeux',
                    title: 'Partout : c’est un dialogue intérieur constant',
                    desc: 'J’ai besoin d’une refonte profonde de mon regard sur moi.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedContext(item.id);
                      setStep(3);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedContext === item.id
                        ? 'border-[#9E7A4A] bg-[#9E7A4A]/5 shadow-sm'
                        : 'border-[#1A1615]/10 bg-white hover:border-[#1A1615]/30'
                    }`}
                  >
                    <div className="font-medium text-[#1A1615] text-sm sm:text-base">
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm text-[#1A1615]/60 mt-1">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
                Étape 3 sur 3
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1615]">
                Quel type d'approche vous correspond le mieux ?
              </h3>
              <div className="space-y-3 pt-2">
                {[
                  {
                    id: 'pratique',
                    title: 'Exercices concrets & protocoles applicables au quotidien',
                    desc: 'Des fiches d’action courtes, des rituels et des fiches mémos.'
                  },
                  {
                    id: 'psycho',
                    title: 'Compréhension psychologique & neurosciences',
                    desc: 'Comprendre pourquoi mon cerveau réagit ainsi avant d’agir.'
                  },
                  {
                    id: 'mixte',
                    title: 'Un équilibre entre réflexion profonde et boîte à outils',
                    desc: 'Le chemin complet pour ancrer des habitudes durables.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedFormat(item.id);
                      setStep(4);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedFormat === item.id
                        ? 'border-[#9E7A4A] bg-[#9E7A4A]/5 shadow-sm'
                        : 'border-[#1A1615]/10 bg-white hover:border-[#1A1615]/30'
                    }`}
                  >
                    <div className="font-medium text-[#1A1615] text-sm sm:text-base">
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm text-[#1A1615]/60 mt-1">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
                  Diagnostic Complété
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1615]">
                  Voici votre lecture idéale
                </h3>
              </div>

              {/* Recommendation card */}
              <div className="bg-white p-5 rounded-2xl border border-[#1A1615]/15 shadow-md flex flex-col sm:flex-row gap-5 items-center">
                <img
                  src={recommendedEbook.coverImage}
                  alt={recommendedEbook.title}
                  referrerPolicy="no-referrer"
                  className="w-28 sm:w-32 aspect-[3/4] object-cover rounded-lg shadow border border-[#1A1615]/10 shrink-0"
                />
                <div className="space-y-2 flex-1 text-center sm:text-left">
                  <span className="text-xs text-[#9E7A4A] font-semibold uppercase tracking-wider">
                    {recommendedEbook.categoryLabel}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A1615]">
                    {recommendedEbook.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1A1615]/75 line-clamp-2">
                    {recommendedEbook.shortDescription}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-[#1A1615]/60 pt-1">
                    <span>Par {recommendedEbook.author}</span>
                    <span>·</span>
                    <span className="font-semibold text-[#1A1615] tabular-nums">
                      {recommendedEbook.price} €
                    </span>
                  </div>
                </div>
              </div>

              {/* Match reasons */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#1A1615]/10 text-xs sm:text-sm space-y-2">
                <div className="font-semibold text-[#1A1615]">
                  Pourquoi ce livre répond exactement à votre situation :
                </div>
                <ul className="space-y-1.5 text-[#1A1615]/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7A4A] shrink-0 mt-0.5" />
                    <span>Adresse directement votre difficulté liée à {recommendedEbook.categoryLabel.toLowerCase()}.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7A4A] shrink-0 mt-0.5" />
                    <span>Inclus : {recommendedEbook.bonusIncluded}.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7A4A] shrink-0 mt-0.5" />
                    <span>Lecture rapide et immédiatement applicable ({recommendedEbook.readTime}).</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    onAddToCart(recommendedEbook);
                    onClose();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1A1615] text-white rounded-lg hover:bg-[#2C2624] text-sm font-medium transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Ajouter au panier ({recommendedEbook.price} €)</span>
                </button>
                <button
                  onClick={() => {
                    onReadSample(recommendedEbook);
                    onClose();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#1A1615]/20 text-[#1A1615] rounded-lg hover:bg-[#FAF8F5] text-sm font-medium transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#9E7A4A]" />
                  <span>Feuilleter l'extrait gratuit</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-[#1A1615]/60 hover:text-[#1A1615] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Recommencer le questionnaire</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step < 4 && (
          <div className="p-4 bg-white border-t border-[#1A1615]/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-xs text-[#1A1615]/70 hover:text-[#1A1615] font-medium transition-colors cursor-pointer"
              >
                ← Retour
              </button>
            ) : (
              <div />
            )}
            <span className="text-xs text-[#1A1615]/50">
              Question {step} sur 3
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Sun, Moon, Coffee, Check, ShoppingBag, BookOpen } from 'lucide-react';
import { Ebook } from '../types';

interface ReaderModalProps {
  ebook: Ebook | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (ebook: Ebook) => void;
}

export const ReaderModal: React.FC<ReaderModalProps> = ({
  ebook,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [theme, setTheme] = useState<'ivory' | 'sepia' | 'dark'>('ivory');
  const [fontSize, setFontSize] = useState<number>(18);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!isOpen || !ebook) return null;

  const toggleStep = (idx: number) => {
    setCompletedSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const sample = ebook.sampleChapter;

  const themeStyles = {
    ivory: {
      bg: 'bg-[#FAF8F5]',
      card: 'bg-white',
      border: 'border-[#1A1615]/10',
      text: 'text-[#1E1B18]',
      textMuted: 'text-[#1E1B18]/70',
      accent: 'text-[#9E7A4A]',
      quoteBg: 'bg-[#F4EFEA]',
      navBg: 'bg-[#FAF8F5]/90',
    },
    sepia: {
      bg: 'bg-[#F5EEDC]',
      card: 'bg-[#EDE4CD]',
      border: 'border-[#705634]/15',
      text: 'text-[#3E2E1E]',
      textMuted: 'text-[#3E2E1E]/80',
      accent: 'text-[#8A6739]',
      quoteBg: 'bg-[#E6DBBE]',
      navBg: 'bg-[#F5EEDC]/90',
    },
    dark: {
      bg: 'bg-[#18181B]',
      card: 'bg-[#222226]',
      border: 'border-white/10',
      text: 'text-[#F4F4F5] tracking-wide',
      textMuted: 'text-[#A1A1AA]',
      accent: 'text-[#D4AF37]',
      quoteBg: 'bg-[#27272A]',
      navBg: 'bg-[#18181B]/90',
    },
  }[theme];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full max-w-3xl h-[95vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${themeStyles.bg} ${themeStyles.border}`}>
        
        {/* Reader Top Controls */}
        <header className={`px-4 sm:px-6 py-3.5 border-b flex items-center justify-between backdrop-blur-md shrink-0 ${themeStyles.navBg} ${themeStyles.border}`}>
          <div className="flex items-center gap-2">
            <BookOpen className={`w-4 h-4 ${themeStyles.accent}`} />
            <div className="text-xs sm:text-sm font-medium truncate max-w-[200px] sm:max-w-xs">
              <span className={themeStyles.accent}>{sample.chapterNumber}</span>
              <span className="opacity-40 mx-1.5">·</span>
              <span className={themeStyles.text}>{ebook.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Selectors */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 p-1 rounded-lg">
              <button
                onClick={() => setTheme('ivory')}
                className={`p-1.5 rounded transition-colors ${theme === 'ivory' ? 'bg-white shadow-xs text-black' : 'text-slate-500'}`}
                title="Thème Clair Ivoire"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`p-1.5 rounded transition-colors ${theme === 'sepia' ? 'bg-[#EDE4CD] shadow-xs text-[#3E2E1E]' : 'text-slate-500'}`}
                title="Thème Sépia"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded transition-colors ${theme === 'dark' ? 'bg-[#27272A] shadow-xs text-white' : 'text-slate-500'}`}
                title="Thème Nuit"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Font size adjustments */}
            <div className="hidden sm:flex items-center gap-1 text-xs">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                disabled={fontSize <= 14}
                className="p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-30 cursor-pointer"
                title="Réduire la police"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] tabular-nums font-mono px-1">
                {fontSize}px
              </span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                disabled={fontSize >= 24}
                className="p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-30 cursor-pointer"
                title="Agrandir la police"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Fermer la liseuse"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Reader Body Text Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 sm:px-12 py-8 sm:py-12">
          <div className="max-w-xl mx-auto space-y-8">
            
            {/* Chapter Heading */}
            <div className="text-center space-y-2 pb-6 border-b border-current/10">
              <div className={`text-xs uppercase tracking-widest font-semibold ${themeStyles.accent}`}>
                Extrait Gratuit · {sample.chapterNumber}
              </div>
              <h2 className={`font-serif text-2xl sm:text-3xl font-semibold leading-snug ${themeStyles.text}`}>
                {sample.chapterTitle}
              </h2>
              <p className={`text-xs ${themeStyles.textMuted}`}>
                Extrait de l'ouvrage complet de {ebook.author} ({ebook.pages} pages)
              </p>
            </div>

            {/* Intro Lead Paragraph */}
            <p
              className={`font-serif italic leading-relaxed text-lg sm:text-xl border-l-2 pl-4 ${themeStyles.accent} ${themeStyles.textMuted}`}
            >
              "{sample.intro}"
            </p>

            {/* Paragraphs with customized fontSize */}
            <div
              className={`space-y-6 leading-relaxed font-light ${themeStyles.text}`}
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.75 }}
            >
              {sample.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Pull Quote */}
            {sample.quote && (
              <blockquote className={`p-6 rounded-2xl ${themeStyles.quoteBg} border ${themeStyles.border} my-8`}>
                <p className={`font-serif text-lg sm:text-xl italic text-center font-medium ${themeStyles.text}`}>
                  « {sample.quote} »
                </p>
              </blockquote>
            )}

            {/* Interactive Practical Exercise */}
            {sample.practicalExercise && (
              <div className={`p-6 rounded-2xl ${themeStyles.card} border ${themeStyles.border} shadow-sm space-y-4`}>
                <div className="flex items-center gap-2">
                  <span className={`text-xs uppercase tracking-wider font-semibold ${themeStyles.accent}`}>
                    Mise en application immédiate
                  </span>
                </div>
                <h3 className={`font-serif text-xl font-semibold ${themeStyles.text}`}>
                  {sample.practicalExercise.title}
                </h3>
                <p className={`text-xs sm:text-sm ${themeStyles.textMuted}`}>
                  {sample.practicalExercise.description}
                </p>
                <div className="space-y-2.5 pt-2">
                  {sample.practicalExercise.steps.map((step, idx) => {
                    const isChecked = completedSteps.includes(idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleStep(idx)}
                        className={`w-full text-left p-3 rounded-xl border flex items-start gap-3 transition-colors cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-800 dark:text-emerald-300'
                            : `${themeStyles.border} hover:bg-black/5 dark:hover:bg-white/5`
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-current/30'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">
                          {step}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="text-[11px] text-right opacity-60">
                  {completedSteps.length} / {sample.practicalExercise.steps.length} étapes validées
                </div>
              </div>
            )}

            {/* End of sample CTA */}
            <div className={`p-8 rounded-2xl text-center space-y-4 border ${themeStyles.quoteBg} ${themeStyles.border} mt-12`}>
              <div className={`text-xs uppercase tracking-wider font-semibold ${themeStyles.accent}`}>
                Fin de l'extrait gratuit
              </div>
              <h3 className={`font-serif text-2xl font-semibold ${themeStyles.text}`}>
                Poursuivez votre transformation
              </h3>
              <p className={`text-xs sm:text-sm max-w-md mx-auto ${themeStyles.textMuted}`}>
                Débloquez immédiatement l'intégralité des {ebook.pages} pages, les {ebook.tableOfContents.length} chapitres et le {ebook.bonusIncluded}.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    onAddToCart(ebook);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1A1615] text-white hover:bg-[#2C2624] rounded-xl text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Obtenir le livre complet ({ebook.price} €)</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl text-sm font-medium opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  Retour au catalogue
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

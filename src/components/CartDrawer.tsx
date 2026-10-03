import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Sparkles, Plus, Minus } from 'lucide-react';
import { CartItem, Ebook } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (ebookId: string, delta: number) => void;
  onRemoveItem: (ebookId: string) => void;
  onCheckout: () => void;
  onExploreCatalog: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onExploreCatalog,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (acc, item) => acc + item.ebook.price * item.quantity,
    0
  );

  // Automatic bundle discount: if 2+ items, 15% off; if 3+ items, 25% off
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  let autoBundleDiscount = 0;
  if (totalItemCount >= 3) {
    autoBundleDiscount = rawSubtotal * 0.25;
  } else if (totalItemCount === 2) {
    autoBundleDiscount = rawSubtotal * 0.15;
  }

  const promoDiscount = (rawSubtotal - autoBundleDiscount) * (appliedDiscountPercent / 100);
  const finalTotal = Math.max(0, rawSubtotal - autoBundleDiscount - promoDiscount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'ELAN20' || code === 'CONFIANCE20') {
      setAppliedDiscountPercent(20);
      setPromoMessage('Code promo appliqué : -20% sur votre panier !');
    } else if (code === 'BIENVENUE' || code === 'CONFIANCE15') {
      setAppliedDiscountPercent(15);
      setPromoMessage('Code promo appliqué : -15% offert !');
    } else {
      setPromoMessage('Code invalide. Essayez "ELAN20".');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#1A1615]/10">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#1A1615]/10 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#9E7A4A]" />
              <h2 className="font-serif text-xl font-semibold text-[#1A1615]">
                Votre Panier
              </h2>
              <span className="text-xs text-[#1A1615]/50 tabular-nums">
                ({totalItemCount} {totalItemCount > 1 ? 'ebooks' : 'ebook'})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#1A1615]/50 hover:text-[#1A1615] rounded-lg hover:bg-[#1A1615]/5 transition-colors cursor-pointer"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bundle incentive banner */}
          {totalItemCount === 1 && (
            <div className="p-3 bg-[#9E7A4A]/10 border-b border-[#9E7A4A]/20 text-xs text-[#1A1615] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9E7A4A] shrink-0" />
              <span>
                Ajoutez 1 autre ebook pour débloquer automatiquement <strong>-15%</strong> sur votre panier !
              </span>
            </div>
          )}

          {totalItemCount === 2 && (
            <div className="p-3 bg-emerald-50 border-b border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Pack 2 Ebooks actif : <strong>-15% de réduction</strong> appliqués !
              </span>
            </div>
          )}

          {totalItemCount >= 3 && (
            <div className="p-3 bg-emerald-50 border-b border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Pack Trio Sérénité actif : <strong>-25% de remise immédiate</strong> !
              </span>
            </div>
          )}

          {/* Content List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#1A1615]/20 mx-auto" />
                <p className="text-base font-serif text-[#1A1615]">
                  Votre panier est actuellement vide.
                </p>
                <p className="text-xs text-[#1A1615]/60 max-w-xs mx-auto">
                  Découvrez nos guides rédigés pour renforcer l'assurance et la voix intérieure.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreCatalog();
                  }}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1615] text-white rounded-lg text-xs font-medium hover:bg-[#2C2624] transition-colors cursor-pointer"
                >
                  <span>Explorer les ebooks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.ebook.id}
                  className="bg-white p-4 rounded-xl border border-[#1A1615]/10 shadow-xs flex gap-3.5"
                >
                  <img
                    src={item.ebook.coverImage}
                    alt={item.ebook.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-22 object-cover rounded-md border border-[#1A1615]/10 shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-semibold text-sm text-[#1A1615] leading-snug">
                          {item.ebook.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.ebook.id)}
                          className="text-[#1A1615]/40 hover:text-rose-600 transition-colors cursor-pointer"
                          aria-label="Supprimer cet article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#1A1615]/60 mt-0.5">
                        EPUB + PDF + Kindle + Cahier Notion
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-[#1A1615]/15 rounded-md bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.ebook.id, -1)}
                          className="p-1 hover:bg-[#1A1615]/5 text-[#1A1615]/70 cursor-pointer"
                          title="Diminuer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs px-2 font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.ebook.id, 1)}
                          className="p-1 hover:bg-[#1A1615]/5 text-[#1A1615]/70 cursor-pointer"
                          title="Augmenter"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-serif font-bold text-sm text-[#1A1615] tabular-nums">
                        {(item.ebook.price * item.quantity).toFixed(2)} €
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#1A1615]/10 space-y-4 shrink-0">
              
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1615]/40" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Code promo (ex: ELAN20)"
                    className="w-full pl-8 pr-3 py-2 bg-[#FAF8F5] border border-[#1A1615]/15 rounded-lg text-xs uppercase tracking-wider focus:outline-none focus:border-[#9E7A4A]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#1A1615]/5 hover:bg-[#1A1615]/10 text-xs font-semibold text-[#1A1615] rounded-lg transition-colors cursor-pointer"
                >
                  Appliquer
                </button>
              </form>

              {promoMessage && (
                <div className={`text-[11px] ${appliedDiscountPercent > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {promoMessage}
                </div>
              )}

              {/* Subtotal lines */}
              <div className="space-y-1.5 text-xs text-[#1A1615]/70 pt-2 border-t border-[#1A1615]/5">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span className="tabular-nums font-medium text-[#1A1615]">
                    {rawSubtotal.toFixed(2)} €
                  </span>
                </div>

                {autoBundleDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Remise Pack Collection</span>
                    <span className="tabular-nums">
                      -{autoBundleDiscount.toFixed(2)} €
                    </span>
                  </div>
                )}

                {promoDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Remise code promo ({appliedDiscountPercent}%)</span>
                    <span className="tabular-nums">
                      -{promoDiscount.toFixed(2)} €
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-sm sm:text-base font-serif font-bold text-[#1A1615] pt-2 border-t border-[#1A1615]/10">
                  <span>Total TTC</span>
                  <span className="tabular-nums">
                    {finalTotal.toFixed(2)} €
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="w-full py-3.5 bg-[#1A1615] hover:bg-[#2C2624] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Accéder au paiement sécurisé</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#1A1615]/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Paiement crypté SSL 256 bits · Téléchargement instantané</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

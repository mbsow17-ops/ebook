import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Download, CreditCard, Lock, ArrowRight, FileText, Smartphone, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const totalRaw = items.reduce((acc, item) => acc + item.ebook.price * item.quantity, 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const discount = totalItems >= 3 ? totalRaw * 0.25 : totalItems >= 2 ? totalRaw * 0.15 : 0;
  const finalAmount = totalRaw - discount;

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const randomOrder = 'ELAN-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(randomOrder);
      setOrderCompleted(true);
      onOrderSuccess();
    }, 1200);
  };

  // Generate and download a real formatted text/epub-like document for the reader
  const handleDownloadEbook = (ebookTitle: string, format: string) => {
    const textContent = `
======================================================
ÉDITIONS L'ÉLAN INTÉRIEUR — EXEMPLAIRE OFFICIEL
Titre : ${ebookTitle}
Format : ${format}
Commande : ${orderId || 'ELAN-772918'}
Client : ${fullName || 'Lecteur Estimé'} (${email || 'client@elan.fr'})
Date de délivrance : ${new Date().toLocaleDateString('fr-FR')}
======================================================

SYNTHÈSE EXÉCUTIVE ET GUIDE PRATIQUE
Cet exemplaire numérique vous est concédé pour un usage personnel.

SOMMAIRE D'ACCOMPAGNEMENT :
1. Déconstruction des schémas d'insécurité
2. Protocoles cognitifs et ancrages corporels
3. Fiche mémo d'urgence : 90 secondes pour reprendre le contrôle
4. Cahier d'application et rituels quotidiens

"La confiance en soi n'est pas l'absence de peur. 
C'est la décision intime que ce que vous avez à vivre 
est infiniment plus précieux que votre tremblement."

Merci pour votre confiance.
Éditions L'Élan Intérieur — Paris, France
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${ebookTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Editions_Elan.${format.toLowerCase() === 'epub' ? 'epub.txt' : 'pdf.txt'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#1A1615]/10 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1A1615]/10 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#9E7A4A]" />
            <h2 className="font-serif text-lg font-semibold text-[#1A1615]">
              {orderCompleted ? 'Confirmation de commande' : 'Paiement Sécurisé'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1A1615]/50 hover:text-[#1A1615] rounded-lg hover:bg-[#1A1615]/5 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          {!orderCompleted ? (
            <form onSubmit={handleProcessPayment} className="space-y-6">
              
              {/* Order Recap Banner */}
              <div className="p-4 bg-white rounded-2xl border border-[#1A1615]/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#1A1615]/60">Total de votre commande ({totalItems} articles)</div>
                  <div className="font-serif text-2xl font-bold text-[#1A1615] tabular-nums">
                    {finalAmount.toFixed(2)} € TTC
                  </div>
                </div>
                <div className="text-right text-xs text-[#9E7A4A]">
                  <span className="font-semibold">Livraison numérique immédiate</span>
                  <div className="text-[11px] text-[#1A1615]/50">Formats EPUB, PDF & Kindle</div>
                </div>
              </div>

              {/* Customer Contact */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1615]/70">
                  1. Vos coordonnées de réception
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#1A1615]/70 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jean Dupont"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1A1615]/15 rounded-xl text-sm focus:outline-none focus:border-[#9E7A4A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#1A1615]/70 mb-1">
                      Adresse email (pour recevoir les liens)
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jean.dupont@exemple.fr"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1A1615]/15 rounded-xl text-sm focus:outline-none focus:border-[#9E7A4A]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1615]/70">
                  2. Méthode de paiement
                </label>
                
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'card', label: 'Carte Bancaire', icon: CreditCard },
                    { id: 'apple', label: 'Apple Pay', icon: Smartphone },
                    { id: 'paypal', label: 'PayPal', icon: Sparkles }
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        paymentMethod === m.id
                          ? 'border-[#9E7A4A] bg-[#9E7A4A]/10 font-semibold text-[#1A1615]'
                          : 'border-[#1A1615]/10 bg-white hover:border-[#1A1615]/30 text-[#1A1615]/70'
                      }`}
                    >
                      <m.icon className="w-4 h-4 text-[#9E7A4A]" />
                      <span className="text-xs">{m.label}</span>
                    </button>
                  ))}
                </div>

                {/* Card input mockup fields */}
                <div className="p-4 bg-white rounded-2xl border border-[#1A1615]/10 space-y-3">
                  <div>
                    <label className="block text-xs text-[#1A1615]/60 mb-1">
                      Numéro de carte
                    </label>
                    <div className="relative">
                      <CreditCard className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1615]/40" />
                      <input
                        type="text"
                        defaultValue="4532 •••• •••• 8892"
                        className="w-full pl-9 pr-3 py-2 bg-[#FAF8F5] border border-[#1A1615]/15 rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[#1A1615]/60 mb-1">
                        Expiration
                      </label>
                      <input
                        type="text"
                        defaultValue="08 / 28"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#1A1615]/15 rounded-lg text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#1A1615]/60 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        defaultValue="382"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#1A1615]/15 rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#1A1615] hover:bg-[#2C2624] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Traitement sécurisé en cours...</span>
                  ) : (
                    <>
                      <span>Confirmer et payer {finalAmount.toFixed(2)} €</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#1A1615]/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Garantie 30 jours satisfait ou remboursé. Aucun prélèvement caché.</span>
                </div>
              </div>

            </form>
          ) : (
            /* Order Success View */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#9E7A4A] font-semibold">
                  Paiement Validé
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#1A1615]">
                  Félicitations pour votre élan, {fullName || 'cher lecteur'} !
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1615]/70 max-w-md mx-auto">
                  Votre commande <strong>#{orderId}</strong> est confirmée. Vos liens de téléchargement
                  ont également été envoyés à <strong>{email}</strong>.
                </p>
              </div>

              {/* Download links for purchased items */}
              <div className="bg-white p-5 rounded-2xl border border-[#1A1615]/10 text-left space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#1A1615]/10 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1615]">
                    Vos Ebooks Prêts au Téléchargement
                  </span>
                  <span className="text-xs text-emerald-700 font-medium">
                    Accès permanent
                  </span>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.ebook.id}
                      className="p-3 bg-[#FAF8F5] rounded-xl border border-[#1A1615]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.ebook.coverImage}
                          alt={item.ebook.title}
                          className="w-10 h-13 object-cover rounded shadow shrink-0"
                        />
                        <div>
                          <h4 className="font-serif font-semibold text-sm text-[#1A1615]">
                            {item.ebook.title}
                          </h4>
                          <div className="text-[11px] text-[#1A1615]/60">
                            {item.ebook.bonusIncluded}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDownloadEbook(item.ebook.title, 'PDF')}
                          className="px-3 py-1.5 bg-white border border-[#1A1615]/15 hover:border-[#9E7A4A] rounded-lg text-xs font-medium text-[#1A1615] flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#9E7A4A]" />
                          <span>PDF</span>
                        </button>
                        <button
                          onClick={() => handleDownloadEbook(item.ebook.title, 'EPUB')}
                          className="px-3 py-1.5 bg-[#1A1615] hover:bg-[#2C2624] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>EPUB</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#1A1615] text-white rounded-xl text-sm font-medium hover:bg-[#2C2624] transition-colors cursor-pointer"
              >
                Fermer et retourner à la boutique
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Ebook, CartItem } from './types';
import { EBOOKS } from './data/ebooks';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { BundleSection } from './components/BundleSection';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ReaderModal } from './components/ReaderModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteesSection } from './components/GuaranteesSection';
import { Footer } from './components/Footer';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedEbookForDetail, setSelectedEbookForDetail] = useState<Ebook | null>(null);
  const [selectedEbookForReader, setSelectedEbookForReader] = useState<Ebook | null>(null);
  const [activeAudioEbook, setActiveAudioEbook] = useState<Ebook | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Cart operations
  const handleAddToCart = (ebook: Ebook) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.ebook.id === ebook.id);
      if (existing) {
        return prev.map((item) =>
          item.ebook.id === ebook.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ebook, quantity: 1, format: 'pack-complet' }];
    });
  };

  const handleAddBundleToCart = (bundleEbooks: Ebook[]) => {
    setCart((prev) => {
      let updated = [...prev];
      bundleEbooks.forEach((ebook) => {
        const existing = updated.find((item) => item.ebook.id === ebook.id);
        if (existing) {
          updated = updated.map((item) =>
            item.ebook.id === ebook.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          updated.push({ ebook, quantity: 1, format: 'pack-complet' });
        }
      });
      return updated;
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (ebookId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.ebook.id === ebookId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (ebookId: string) => {
    setCart((prev) => prev.filter((item) => item.ebook.id !== ebookId));
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1B18]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenSearch={() => {
          scrollToCatalog();
          const input = document.querySelector<HTMLInputElement>('input[placeholder*="Rechercher"]');
          input?.focus();
        }}
        onSelectCategory={(cat) => {
          setSelectedCategoryFilter(cat);
          scrollToCatalog();
        }}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCatalog={scrollToCatalog}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Catalog Section */}
        <CatalogSection
          ebooks={EBOOKS}
          onSelectEbook={(ebook) => setSelectedEbookForDetail(ebook)}
          onReadSample={(ebook) => setSelectedEbookForReader(ebook)}
          onAddToCart={handleAddToCart}
          onPlayAudioExcerpt={(ebook) => setActiveAudioEbook(ebook)}
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectCategoryFilter={setSelectedCategoryFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Bundle Collection Promotion */}
        <BundleSection
          ebooks={EBOOKS}
          onAddBundleToCart={handleAddBundleToCart}
        />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Guarantees & Commitments */}
        <GuaranteesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-overs */}
      <DiagnosticQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectEbook={(ebook) => setSelectedEbookForDetail(ebook)}
        onReadSample={(ebook) => setSelectedEbookForReader(ebook)}
        onAddToCart={(ebook) => {
          handleAddToCart(ebook);
          setIsCartOpen(true);
        }}
      />

      <ProductDetailModal
        ebook={selectedEbookForDetail}
        isOpen={!!selectedEbookForDetail}
        onClose={() => setSelectedEbookForDetail(null)}
        onAddToCart={(ebook) => {
          handleAddToCart(ebook);
          setIsCartOpen(true);
        }}
        onReadSample={(ebook) => {
          setSelectedEbookForDetail(null);
          setSelectedEbookForReader(ebook);
        }}
        onPlayAudioExcerpt={(ebook) => setActiveAudioEbook(ebook)}
      />

      <ReaderModal
        ebook={selectedEbookForReader}
        isOpen={!!selectedEbookForReader}
        onClose={() => setSelectedEbookForReader(null)}
        onAddToCart={(ebook) => {
          handleAddToCart(ebook);
          setIsCartOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onExploreCatalog={() => {
          setIsCartOpen(false);
          scrollToCatalog();
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Floating Audio Preview Bar */}
      <AudioPlayerBar
        ebook={activeAudioEbook}
        onClose={() => setActiveAudioEbook(null)}
        onAddToCart={(ebook) => {
          handleAddToCart(ebook);
          setIsCartOpen(true);
        }}
      />
    </div>
  );
}

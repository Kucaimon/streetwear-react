import { useState, useRef } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import CategoriesSection from './components/CategoriesSection';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import AuthModal from './components/AuthModal';
import ProfileModal from './components/ProfileModal';
import CheckoutModal from './components/CheckoutModal';
import Notification from './components/Notification';
import './styles/index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const catalogRef = useRef(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Scroll to catalog
    setTimeout(() => {
      catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <AppProvider>
      <div className="app">
        <Header />
        <Marquee />
        <Hero />
        <TrendingSection />
        <CategoriesSection onCategoryClick={handleCategoryClick} />
        <div ref={catalogRef}>
          <Catalog initialCategory={selectedCategory} key={selectedCategory} />
        </div>
        <Footer />
        
        {/* Modals & Overlays */}
        <CartSidebar />
        <AuthModal />
        <ProfileModal />
        <CheckoutModal />
        <Notification />
      </div>
    </AppProvider>
  );
}

export default App;

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const filterCategories = [
  { value: 'all', label: 'Все товары' },
  { value: 'hoodies', label: 'Hoodies' },
  { value: 't-shirts', label: 'T-Shirts' },
  { value: 'jackets', label: 'Jackets' },
  { value: 'sneakers', label: 'Sneakers' },
  { value: 'pants', label: 'Pants' },
  { value: 'accessories', label: 'Accessories' }
];

export default function Catalog({ initialCategory = null }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [viewMode, setViewMode] = useState('grid');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 500]);
  };

  return (
    <section className="catalog-section" id="catalog">
      <div className="catalog-container">
        <div className="catalog-header">
          <h1 className="catalog-title">CATALOG</h1>
          <p className="catalog-subtitle">Вся коллекция уличной моды</p>
        </div>

        <div className="catalog-controls">
          <button 
            className="catalog-filters-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
            </svg>
            ФИЛЬТРЫ
          </button>

          <div className="catalog-results">
            <span>{filteredProducts.length} товаров</span>
          </div>

          <div className="catalog-sort">
            <label>Сортировка:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="popular">По популярности</option>
              <option value="price-asc">Цена: по возрастанию</option>
              <option value="price-desc">Цена: по убыванию</option>
              <option value="name">По названию</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>

          <div className="catalog-view">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="catalog-main">
          {/* Sidebar */}
          <aside className={`catalog-sidebar ${sidebarOpen ? 'active' : ''}`}>
            <div className="filter-section">
              <h3 className="filter-title">Категории</h3>
              <div className="filter-options">
                {filterCategories.map(cat => (
                  <label key={cat.value} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.value}
                      onChange={() => setSelectedCategory(cat.value)}
                    />
                    <span className="checkmark"></span>
                    {cat.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Цена</h3>
              <div className="price-range">
                <div className="price-inputs">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                    placeholder="От"
                  />
                  <span>—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                    placeholder="До"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                  className="price-slider"
                />
              </div>
            </div>

            <div className="filter-actions">
              <button className="btn btn-primary btn-full" onClick={() => setSidebarOpen(false)}>
                ПРИМЕНИТЬ
              </button>
              <button className="btn btn-outline btn-full" onClick={resetFilters}>
                СБРОСИТЬ
              </button>
            </div>
          </aside>

          {/* Products */}
          <div className={`catalog-products ${viewMode === 'list' ? 'list-view' : ''}`}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} showWishlist />
            ))}
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div className="filter-overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </section>
  );
}




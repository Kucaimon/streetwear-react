import { useState } from 'react';
import { categories } from '../data/products';

// Placeholder SVG
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='400' viewBox='0 0 350 400'%3E%3Crect fill='%23222' width='350' height='400'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' font-family='Arial' font-size='14' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

function CategoryCard({ category, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getOptimizedImageUrl = (url) => {
    if (!url) return placeholderImage;
    if (url.includes('unsplash.com')) {
      return url + '&q=80&fm=webp&auto=format';
    }
    return url;
  };

  return (
    <a 
      href="#catalog" 
      className="category-card"
      onClick={(e) => {
        e.preventDefault();
        onClick?.(category.id);
      }}
    >
      <div className="category-image">
        {!imageLoaded && (
          <div className="image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        <img 
          src={imageError ? placeholderImage : getOptimizedImageUrl(category.image)} 
          alt={category.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => { setImageError(true); setImageLoaded(true); }}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </div>
      <h3 className="category-name">{category.name}</h3>
    </a>
  );
}

export default function CategoriesSection({ onCategoryClick }) {
  return (
    <section className="categories" id="categories">
      <div className="section-container">
        <h2 className="section-title">SHOP BY CATEGORY</h2>
        
        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard 
              key={category.id}
              category={category}
              onClick={onCategoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

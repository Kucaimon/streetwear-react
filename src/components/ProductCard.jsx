import { useState } from 'react';
import { useApp } from '../context/AppContext';

// Placeholder SVG как data URL
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='350' viewBox='0 0 300 350'%3E%3Crect fill='%23222' width='300' height='350'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' font-family='Arial' font-size='14' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function ProductCard({ product, showWishlist = false }) {
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const inWishlist = isInWishlist(product.id);
  
  const getBadgeClass = () => {
    if (product.badge?.includes('%')) return 'sale';
    if (product.badge === 'HOT') return 'hot';
    return '';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Получаем URL изображения (с fallback на placeholder)
  const getImageUrl = (url) => {
    if (!url) return placeholderImage;
    return url;
  };

  return (
    <div className="product-card">
      {product.badge && (
        <div className={`product-badge ${getBadgeClass()}`}>{product.badge}</div>
      )}
      
      <div className="product-image">
        {/* Placeholder/Loading skeleton */}
        {!imageLoaded && (
          <div className="image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        
        <img 
          src={imageError ? placeholderImage : getImageUrl(product.image)} 
          alt={product.name}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        
        <button 
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        
        {showWishlist && (
          <button 
            className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill={inWishlist ? 'currentColor' : 'none'} 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        )}
      </div>
      
      <div className="product-info">
        <span className="product-category">#{product.category.toUpperCase()}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-rating">★ {product.rating}</span>
        </div>
      </div>
    </div>
  );
}

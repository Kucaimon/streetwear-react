import { useState } from 'react';

const heroImageUrl = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=700&fit=crop';
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='700' viewBox='0 0 600 700'%3E%3Crect fill='%23222' width='600' height='700'/%3E%3C/svg%3E";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            DEFINE YOUR<br />
            <span className="highlight">STREET</span><br />
            <span className="highlight">STYLE</span>
          </h1>
          <p className="hero-text">
            Унисекс-коллекция для тех, кто не боится выделяться.<br />
            Бунт против скучной моды.
          </p>
          <div className="hero-buttons">
            <a href="#trending" className="btn btn-primary">
              SHOP NOW
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#categories" className="btn btn-outline">EXPLORE</a>
          </div>
        </div>
        <div className="hero-image">
          {!imageLoaded && (
            <div className="image-placeholder hero-placeholder">
              <div className="loading-spinner"></div>
            </div>
          )}
          <img 
            src={imageError ? placeholderImage : heroImageUrl}
            alt="Street Style Fashion"
            loading="eager"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => { setImageError(true); setImageLoaded(true); }}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </div>
      </div>
    </section>
  );
}

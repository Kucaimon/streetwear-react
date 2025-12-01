import { useState } from 'react';

// Встроенное SVG изображение для Hero секции
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="700" viewBox="0 0 600 700">
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#c8ff00"/>
      <stop offset="50%" style="stop-color:#1a1a1a"/>
      <stop offset="100%" style="stop-color:#000"/>
    </linearGradient>
  </defs>
  <rect width="600" height="700" fill="url(#heroBg)"/>
  <text x="300" y="280" font-size="120" text-anchor="middle">🔥</text>
  <text x="300" y="380" font-family="Arial Black" font-size="48" fill="#fff" text-anchor="middle">STREET</text>
  <text x="300" y="440" font-family="Arial Black" font-size="48" fill="#c8ff00" text-anchor="middle">STYLE</text>
  <text x="300" y="500" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">DEFINE YOUR LOOK</text>
</svg>`;

const heroImageUrl = `data:image/svg+xml,${encodeURIComponent(heroSvg)}`;

// Placeholder
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='700' viewBox='0 0 600 700'%3E%3Crect fill='%23222' width='600' height='700'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' font-family='Arial' font-size='18' text-anchor='middle' dy='.3em'%3ELoading...%3C/text%3E%3C/svg%3E";

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

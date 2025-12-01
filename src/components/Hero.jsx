import { useState } from 'react';

// Стильное SVG изображение для Hero секции
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="700" viewBox="0 0 600 700">
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#c8ff00"/>
      <stop offset="30%" style="stop-color:#1a1a1a"/>
      <stop offset="100%" style="stop-color:#000"/>
    </linearGradient>
  </defs>
  <rect width="600" height="700" fill="url(#heroBg)"/>
  <rect x="100" y="250" width="400" height="200" rx="20" fill="rgba(0,0,0,0.4)"/>
  <text x="300" y="330" font-family="Arial Black, sans-serif" font-size="56" fill="#fff" text-anchor="middle" letter-spacing="8">STREET</text>
  <text x="300" y="400" font-family="Arial Black, sans-serif" font-size="56" fill="#c8ff00" text-anchor="middle" letter-spacing="8">WEAR</text>
  <text x="300" y="500" font-family="Arial, sans-serif" font-size="16" fill="#888" text-anchor="middle" letter-spacing="4">DEFINE YOUR STYLE</text>
</svg>`;

const heroImageUrl = `data:image/svg+xml,${encodeURIComponent(heroSvg)}`;

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

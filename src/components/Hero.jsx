export default function Hero() {
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
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=700&fit=crop&crop=top" 
            alt="Street Style Fashion" 
          />
        </div>
      </div>
    </section>
  );
}


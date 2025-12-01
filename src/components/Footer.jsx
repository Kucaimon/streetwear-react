export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" onClick={scrollToTop} className="logo">STREETWEAR</a>
          <p className="footer-tagline">Определяй свой стиль.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">SHOP</h4>
            <ul>
              <li><a href="#hoodies">Hoodies</a></li>
              <li><a href="#sneakers">Sneakers</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">SUPPORT</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">FOLLOW</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#tiktok">TikTok</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 STREETWEAR. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}


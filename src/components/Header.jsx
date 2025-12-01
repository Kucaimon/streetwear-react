import { useApp } from '../context/AppContext';

export default function Header() {
  const { 
    cartCount, 
    setCartOpen, 
    setAuthModalOpen, 
    setProfileModalOpen, 
    user 
  } = useApp();

  const handleAuthClick = () => {
    if (user) {
      setProfileModalOpen(true);
    } else {
      setAuthModalOpen(true);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">STREETWEAR</a>
        
        <nav className="nav">
          <a href="#catalog" className="nav-link">CATALOG</a>
          <a href="#wishlist" className="nav-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            WISHLIST
          </a>
        </nav>
        
        <div className="header-actions">
          <button className="nav-link cart-link" onClick={() => setCartOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            CART
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          
          <button className="nav-link login-btn" onClick={handleAuthClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{user ? user.name.split(' ')[0].toUpperCase() : 'LOGIN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}


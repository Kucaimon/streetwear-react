import { useApp } from '../context/AppContext';

export default function CartSidebar() {
  const { 
    cart, 
    cartTotal, 
    cartOpen, 
    setCartOpen, 
    removeFromCart, 
    updateQuantity,
    setCheckoutModalOpen 
  } = useApp();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCartOpen(false);
    setCheckoutModalOpen(true);
  };

  return (
    <>
      <div 
        className={`cart-overlay ${cartOpen ? 'active' : ''}`}
        onClick={() => setCartOpen(false)}
      />
      
      <div className={`cart-sidebar ${cartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">YOUR CART</h2>
          <button className="cart-close" onClick={() => setCartOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p>Корзина пуста</p>
              <span>Добавьте товары, чтобы начать покупки</span>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-quantity">
                    <button 
                      className="qty-btn" 
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      className="qty-btn" 
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="cart-shipping">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary btn-full" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
}




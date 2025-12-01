import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function CheckoutModal() {
  const { 
    checkoutModalOpen, 
    setCheckoutModalOpen, 
    cart, 
    cartTotal, 
    clearCart,
    updateUserStats,
    showNotification 
  } = useApp();
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  const [shipping, setShipping] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    phone: ''
  });
  
  const [payment, setPayment] = useState({
    method: 'card',
    cardNumber: '',
    expiry: '',
    cvc: '',
    cardName: ''
  });

  const formatCardNumber = (value) => {
    const v = value.replace(/\s/g, '').replace(/\D/g, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const newOrderNumber = 'SW' + Date.now().toString().slice(-5);
    setOrderNumber(newOrderNumber);
    
    updateUserStats(cartTotal);
    clearCart();
    setLoading(false);
    setStep(3);
  };

  const handleClose = () => {
    setCheckoutModalOpen(false);
    setStep(1);
    setShipping({ firstName: '', lastName: '', address: '', city: '', zip: '', phone: '' });
    setPayment({ method: 'card', cardNumber: '', expiry: '', cvc: '', cardName: '' });
  };

  if (!checkoutModalOpen) return null;

  return (
    <div className="modal-overlay active" onClick={handleClose}>
      <div className="modal modal-checkout" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Steps */}
        <div className="checkout-steps">
          {[1, 2, 3].map(s => (
            <div 
              key={s} 
              className={`step ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}
            >
              <span className="step-number">{step > s ? '✓' : s}</span>
              <span className="step-label">
                {s === 1 ? 'Доставка' : s === 2 ? 'Оплата' : 'Готово'}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Shipping */}
        {step === 1 && (
          <div className="checkout-step-content">
            <h2 className="modal-title">SHIPPING INFO</h2>
            <form onSubmit={handleShippingSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Имя</label>
                  <input
                    type="text"
                    value={shipping.firstName}
                    onChange={(e) => setShipping(p => ({ ...p, firstName: e.target.value }))}
                    placeholder="Иван"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Фамилия</label>
                  <input
                    type="text"
                    value={shipping.lastName}
                    onChange={(e) => setShipping(p => ({ ...p, lastName: e.target.value }))}
                    placeholder="Иванов"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Адрес</label>
                <input
                  type="text"
                  value={shipping.address}
                  onChange={(e) => setShipping(p => ({ ...p, address: e.target.value }))}
                  placeholder="ул. Примерная, д. 1"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Город</label>
                  <input
                    type="text"
                    value={shipping.city}
                    onChange={(e) => setShipping(p => ({ ...p, city: e.target.value }))}
                    placeholder="Москва"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Индекс</label>
                  <input
                    type="text"
                    value={shipping.zip}
                    onChange={(e) => setShipping(p => ({ ...p, zip: e.target.value }))}
                    placeholder="123456"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Телефон</label>
                <input
                  type="tel"
                  value={shipping.phone}
                  onChange={(e) => setShipping(p => ({ ...p, phone: e.target.value }))}
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                ПРОДОЛЖИТЬ К ОПЛАТЕ
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="checkout-step-content">
            <h2 className="modal-title">PAYMENT</h2>
            
            <div className="order-summary">
              <h3>Ваш заказ</h3>
              <div className="order-items">
                {cart.map(item => (
                  <div key={item.id} className="order-item">
                    <div className="order-item-name">
                      <span>{item.name}</span>
                      <span className="order-item-qty">×{item.quantity}</span>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <span>Итого:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <form onSubmit={handlePaymentSubmit}>
              <div className="payment-methods">
                <label className={`payment-method ${payment.method === 'card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={payment.method === 'card'}
                    onChange={(e) => setPayment(p => ({ ...p, method: e.target.value }))}
                  />
                  <div className="payment-method-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    <span>Банковская карта</span>
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label>Номер карты</label>
                <input
                  type="text"
                  value={payment.cardNumber}
                  onChange={(e) => setPayment(p => ({ ...p, cardNumber: formatCardNumber(e.target.value) }))}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Срок действия</label>
                  <input
                    type="text"
                    value={payment.expiry}
                    onChange={(e) => setPayment(p => ({ ...p, expiry: formatExpiry(e.target.value) }))}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input
                    type="text"
                    value={payment.cvc}
                    onChange={(e) => setPayment(p => ({ ...p, cvc: e.target.value.replace(/\D/g, '').slice(0, 3) }))}
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Имя на карте</label>
                <input
                  type="text"
                  value={payment.cardName}
                  onChange={(e) => setPayment(p => ({ ...p, cardName: e.target.value.toUpperCase() }))}
                  placeholder="IVAN IVANOV"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? (
                  <span className="btn-loader">
                    <svg className="spinner" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="31.4 31.4" />
                    </svg>
                  </span>
                ) : (
                  'ОПЛАТИТЬ'
                )}
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="checkout-step-content">
            <div className="success-content">
              <div className="success-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="modal-title">ORDER CONFIRMED!</h2>
              <p className="success-message">
                Спасибо за покупку! Ваш заказ <strong>#{orderNumber}</strong> успешно оформлен.
              </p>
              <p className="success-email">Подтверждение отправлено на вашу почту</p>

              <div className="order-details">
                <div className="order-detail">
                  <span>Ожидаемая доставка</span>
                  <strong>3-5 рабочих дней</strong>
                </div>
                <div className="order-detail">
                  <span>Сумма заказа</span>
                  <strong>${cartTotal.toFixed(2)}</strong>
                </div>
              </div>

              <button className="btn btn-primary btn-full" onClick={handleClose}>
                ПРОДОЛЖИТЬ ПОКУПКИ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('streetwear_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Auth State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('streetwear_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('streetwear_users');
    return saved ? JSON.parse(saved) : [];
  });

  // Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('streetwear_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // UI State
  const [cartOpen, setCartOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('streetwear_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('streetwear_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('streetwear_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('streetwear_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart Functions
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification('Добавлено в корзину!');
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    showNotification('Товар удалён из корзины');
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      const updated = prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
      return updated;
    });
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Auth Functions
  const register = (name, email, password) => {
    if (users.find(u => u.email === email)) {
      showNotification('Email уже зарегистрирован!', 'error');
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      orders: 0,
      spent: 0,
      points: 100,
      createdAt: new Date().toISOString()
    };

    setUsers(prev => [...prev, newUser]);
    setUser(newUser);
    showNotification('Добро пожаловать в STREETWEAR! 🎉');
    return true;
  };

  const login = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      showNotification(`С возвращением, ${found.name}!`);
      return true;
    }
    showNotification('Неверный email или пароль', 'error');
    return false;
  };

  const logout = () => {
    setUser(null);
    showNotification('Вы вышли из аккаунта');
  };

  const updateUserStats = (orderTotal) => {
    if (user) {
      const updatedUser = {
        ...user,
        orders: user.orders + 1,
        spent: user.spent + orderTotal,
        points: user.points + Math.floor(orderTotal)
      };
      setUser(updatedUser);
      setUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u));
    }
  };

  // Wishlist Functions
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showNotification('Удалено из избранного');
        return prev.filter(id => id !== productId);
      } else {
        showNotification('Добавлено в избранное ❤️');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const value = {
    // Cart
    cart,
    cartTotal,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    
    // Auth
    user,
    register,
    login,
    logout,
    updateUserStats,
    
    // Wishlist
    wishlist,
    toggleWishlist,
    isInWishlist,
    
    // UI
    cartOpen,
    setCartOpen,
    authModalOpen,
    setAuthModalOpen,
    profileModalOpen,
    setProfileModalOpen,
    checkoutModalOpen,
    setCheckoutModalOpen,
    notification,
    showNotification
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};




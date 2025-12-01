import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function AuthModal() {
  const { authModalOpen, setAuthModalOpen, register, login } = useApp();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (success) {
        setAuthModalOpen(false);
        resetForm();
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        return;
      }
      const success = register(formData.name, formData.email, formData.password);
      if (success) {
        setAuthModalOpen(false);
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!authModalOpen) return null;

  return (
    <div className="modal-overlay active" onClick={() => setAuthModalOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setAuthModalOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {isLogin ? (
          <div className="auth-form">
            <h2 className="modal-title">WELCOME BACK</h2>
            <p className="modal-subtitle">Войдите в свой аккаунт</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Пароль</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">ВОЙТИ</button>
            </form>

            <p className="auth-switch">
              Нет аккаунта?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>
                Зарегистрироваться
              </a>
            </p>
          </div>
        ) : (
          <div className="auth-form">
            <h2 className="modal-title">JOIN THE CREW</h2>
            <p className="modal-subtitle">Создайте свой аккаунт</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Пароль</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Минимум 6 символов"
                  required
                  minLength={6}
                />
              </div>
              <div className="form-group">
                <label>Подтвердите пароль</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">СОЗДАТЬ АККАУНТ</button>
            </form>

            <p className="auth-switch">
              Уже есть аккаунт?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>
                Войти
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


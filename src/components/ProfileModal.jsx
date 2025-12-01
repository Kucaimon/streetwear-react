import { useApp } from '../context/AppContext';

export default function ProfileModal() {
  const { profileModalOpen, setProfileModalOpen, user, logout } = useApp();

  if (!profileModalOpen || !user) return null;

  const handleLogout = () => {
    logout();
    setProfileModalOpen(false);
  };

  return (
    <div className="modal-overlay active" onClick={() => setProfileModalOpen(false)}>
      <div className="modal modal-profile" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setProfileModalOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="profile-header">
          <div className="profile-avatar">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{user.orders}</span>
            <span className="stat-label">Заказов</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">${user.spent.toFixed(0)}</span>
            <span className="stat-label">Потрачено</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.points}</span>
            <span className="stat-label">Баллов</span>
          </div>
        </div>

        <div className="profile-menu">
          <a href="#" className="profile-menu-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Мои данные
          </a>
          <a href="#" className="profile-menu-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            История заказов
          </a>
          <a href="#" className="profile-menu-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Избранное
          </a>
        </div>

        <button className="btn btn-outline btn-full" onClick={handleLogout}>
          ВЫЙТИ
        </button>
      </div>
    </div>
  );
}


import { useApp } from '../context/AppContext';

export default function Notification() {
  const { notification } = useApp();

  if (!notification) return null;

  const bgColor = notification.type === 'error' ? '#ef4444' : '#c8ff00';
  const textColor = notification.type === 'error' ? '#fff' : '#000';

  return (
    <div 
      className="notification"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: bgColor,
        color: textColor,
        padding: '1rem 2rem',
        fontWeight: 600,
        fontSize: '0.9rem',
        zIndex: 2000,
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        animation: 'slideIn 0.3s ease'
      }}
    >
      {notification.message}
    </div>
  );
}


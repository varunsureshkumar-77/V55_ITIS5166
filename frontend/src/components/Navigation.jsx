import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/navigation.css';

const Navigation = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <div className="main-nav__brand">
          <h1 className="main-nav__title">V55 Clean Energy</h1>
        </div>

        <div className="main-nav__links">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `main-nav__link ${isActive ? 'main-nav__link--active' : ''}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/summary"
            className={({ isActive }) =>
              `main-nav__link ${isActive ? 'main-nav__link--active' : ''}`
            }
          >
            Summary
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `main-nav__link ${isActive ? 'main-nav__link--active' : ''}`
            }
          >
            Reports
          </NavLink>
        </div>

        <div className="main-nav__actions">
          <span className="main-nav__user">
            {user?.firstName || user?.email || 'User'}
          </span>
          <button onClick={handleLogout} className="main-nav__logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

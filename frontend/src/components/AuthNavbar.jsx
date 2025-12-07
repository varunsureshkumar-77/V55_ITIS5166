import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/landing.css';

const AuthNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="landing-nav">
      <div className="landing-nav__container">
        <div className="landing-nav__logo">
          <img src="/pngwing.com.png" alt="V55 Logo" className="landing-nav__logo-img" />
          <span className="landing-nav__brand">V55 Clean Energy</span>
        </div>

        <div className="landing-nav__actions">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `landing-nav__link ${isActive ? 'landing-nav__link--active' : ''}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/summary"
            className={({ isActive }) =>
              `landing-nav__link ${isActive ? 'landing-nav__link--active' : ''}`
            }
          >
            Summary
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `landing-nav__link ${isActive ? 'landing-nav__link--active' : ''}`
            }
          >
            Reports
          </NavLink>

          <NavLink
            to="/project-info"
            className={({ isActive }) =>
              `landing-nav__link ${isActive ? 'landing-nav__link--active' : ''}`
            }
          >
            Project Information
          </NavLink>

          <span className="landing-nav__user">
            {user?.firstName || user?.email || 'User'}
          </span>

          <button onClick={handleLogout} className="landing-nav__btn landing-nav__btn--logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import '../styles/landing.css';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="landing-page">
      {/* Black Navbar */}
      <nav className="landing-nav">
        <div className="landing-nav__container">
          <div className="landing-nav__logo">
            <img src="/pngwing.com.png" alt="V55 Logo" className="landing-nav__logo-img" />
            <span className="landing-nav__brand">V55 Clean Energy</span>
          </div>

          <div className="landing-nav__actions">
            <Link to="/signup" className="landing-nav__btn landing-nav__btn--signup">
              Sign Up
            </Link>
            <Link to="/login" className="landing-nav__btn landing-nav__btn--login">
              Login
            </Link>
            <button 
              className="landing-nav__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Hamburger Menu Dropdown */}
        {menuOpen && (
          <div className="landing-menu">
            <div className="landing-menu__section">
              <h3 className="landing-menu__title">Links</h3>
              <ul className="landing-menu__list">
                <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
                <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
                <li><a href="#innovation" onClick={() => scrollToSection('innovation')}>Innovation</a></li>
                <li><a href="#statistics" onClick={() => scrollToSection('statistics')}>Statistics</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              </ul>
            </div>
            <div className="landing-menu__section">
              <button 
                className="landing-menu__contact-btn"
                onClick={() => {
                  setContactFormOpen(true);
                  setMenuOpen(false);
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="landing-section landing-hero">
        <div className="landing-hero__content">
          <h1 className="landing-hero__title">
            Power the Future with Clean Energy
          </h1>
          <p className="landing-hero__subtitle">
            Track renewable energy innovations, analyze global capacity trends, and explore 
            the future of sustainable power generation.
          </p>
          <div className="landing-hero__actions">
            <Link to="/signup" className="landing-btn landing-btn--primary">
              Get Started
            </Link>
            <button 
              onClick={() => scrollToSection('features')} 
              className="landing-btn landing-btn--secondary"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="landing-hero__image">
          <div className="landing-hero__visual">
            <div className="energy-icon-card">
              <Icon name="leaf" size={60} />
            </div>
            <div className="energy-icon-card">
              <Icon name="sun" size={60} />
            </div>
            <div className="energy-icon-card">
              <Icon name="wind" size={60} />
            </div>
            <div className="energy-icon-card">
              <Icon name="zap" size={60} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="landing-section landing-features">
        <div className="landing-section__header">
          <h2 className="landing-section__title">Comprehensive Clean Energy Dashboard</h2>
          <p className="landing-section__subtitle">
            Everything you need to track and understand renewable energy trends
          </p>
        </div>
        <div className="landing-features__grid">
          <div className="landing-feature-card">
            <div className="landing-feature-card__icon">
              <Icon name="analytics" size={48} />
            </div>
            <h3 className="landing-feature-card__title">Real-Time Analytics</h3>
            <p className="landing-feature-card__desc">
              Track renewable energy capacity growth with interactive charts and real-time data visualizations.
            </p>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-card__icon">
              <Icon name="lock" size={48} />
            </div>
            <h3 className="landing-feature-card__title">Secure Authentication</h3>
            <p className="landing-feature-card__desc">
              Your data is protected with JWT authentication and encrypted password storage.
            </p>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-card__icon">
              <Icon name="trendUp" size={48} />
            </div>
            <h3 className="landing-feature-card__title">Investment Insights</h3>
            <p className="landing-feature-card__desc">
              Analyze global clean energy investments across solar, wind, storage, and emerging technologies.
            </p>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-card__icon">
              <Icon name="globe" size={48} />
            </div>
            <h3 className="landing-feature-card__title">Global Coverage</h3>
            <p className="landing-feature-card__desc">
              Access data from IRENA and IEA covering renewable energy trends across all major economies.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="landing-section landing-innovation">
        <div className="landing-innovation__content">
          <h2 className="landing-section__title">Latest Innovations</h2>
          <p className="landing-innovation__text">
            Stay updated with breakthrough developments in renewable energy technology. From offshore 
            wind farms to advanced battery storage, solar panel efficiency improvements, and green hydrogen 
            production - we track it all.
          </p>
          <ul className="landing-innovation__list">
            <li>Solar PV capacity grew 73% in 2024</li>
            <li>Offshore wind installations up 45%</li>
            <li>Battery storage capacity doubled</li>
            <li>Floating wind technology expansion</li>
          </ul>
        </div>
        <div className="landing-innovation__visual">
          <div className="stat-box">
            <div className="stat-box__number">550+</div>
            <div className="stat-box__label">GW Added in 2024</div>
          </div>
          <div className="stat-box">
            <div className="stat-box__number">$495B</div>
            <div className="stat-box__label">Global Investment</div>
          </div>
          <div className="stat-box">
            <div className="stat-box__number">30%</div>
            <div className="stat-box__label">Global Capacity</div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="landing-section landing-statistics">
        <div className="landing-section__header">
          <h2 className="landing-section__title">By The Numbers</h2>
          <p className="landing-section__subtitle">
            The renewable energy revolution in real-time data
          </p>
        </div>
        <div className="landing-stats__grid">
          <div className="landing-stat">
            <div className="landing-stat__icon">
              <Icon name="zap" size={40} />
            </div>
            <div className="landing-stat__number">473 GW</div>
            <div className="landing-stat__label">Added in 2023</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat__icon">
              <Icon name="battery" size={40} />
            </div>
            <div className="landing-stat__number">85 GWh</div>
            <div className="landing-stat__label">Storage Capacity</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat__icon">
              <Icon name="trendUp" size={40} />
            </div>
            <div className="landing-stat__number">-12%</div>
            <div className="landing-stat__label">Carbon Emissions</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat__icon">
              <Icon name="globe" size={40} />
            </div>
            <div className="landing-stat__number">70%</div>
            <div className="landing-stat__label">From Top 3 Economies</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="landing-section landing-about">
        <div className="landing-about__content">
          <h2 className="landing-section__title">About V55 Clean Energy</h2>
          <p className="landing-about__text">
            V55 is a comprehensive dashboard for tracking renewable energy innovations and global capacity trends. 
            Built with modern web technologies, our platform provides real-time insights into the clean energy 
            transition. Access detailed analytics, investment reports, and capacity growth trends from authoritative 
            sources like IRENA and IEA.
          </p>
          <p className="landing-about__text">
            Our mission is to make renewable energy data accessible and actionable for researchers, policymakers, 
            investors, and anyone interested in the future of sustainable energy.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer__content">
          <p>&copy; 2024 V55 Clean Energy. All rights reserved.</p>
          <div className="landing-footer__links">
            <a href="#hero">Privacy Policy</a>
            <a href="#hero">Terms of Service</a>
            <a href="#hero" onClick={() => setContactFormOpen(true)}>Contact</a>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {contactFormOpen && (
        <div className="modal-overlay" onClick={() => setContactFormOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setContactFormOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="modal-title">Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea 
                  id="contact-message" 
                  rows="5" 
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-form__submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;

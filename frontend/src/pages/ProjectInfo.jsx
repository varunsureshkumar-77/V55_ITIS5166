import AuthNavbar from '../components/AuthNavbar';
import '../styles/projectinfo.css';
import config from '../config/api.config';

const API_BASE_URL = config.apiUrl.replace('/api', '');

const ProjectInfo = () => {
  return (
    <div className="project-info">
      <AuthNavbar />
      <div className="project-info__container">
        <h1 className="project-info__title">Project Information</h1>
        <p className="project-info__subtitle">Technologies & Features Implemented in V55 Clean Energy App</p>

        <div className="project-info__section">
          <h2 className="project-info__section-title">
            Frontend Technologies
          </h2>
          <div className="project-info__cards">
            <div className="project-info__card">
              <h3 className="project-info__card-title">React 18</h3>
              <p className="project-info__card-description">
                Modern JavaScript library for building user interfaces with component-based architecture, hooks, and efficient rendering.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Tailwind CSS</h3>
              <p className="project-info__card-description">
                Utility-first CSS framework for rapid UI development with responsive design and custom styling.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">BEM Methodology</h3>
              <p className="project-info__card-description">
                Block Element Modifier naming convention for maintainable, scalable CSS architecture.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Vite</h3>
              <p className="project-info__card-description">
                Next-generation frontend build tool with lightning-fast HMR (Hot Module Replacement) and optimized production builds.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">React Router v6</h3>
              <p className="project-info__card-description">
                Declarative routing for React applications with protected routes and navigation guards.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Axios</h3>
              <p className="project-info__card-description">
                Promise-based HTTP client for making API requests with interceptors and automatic JSON transformation.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Custom Favicon</h3>
              <p className="project-info__card-description">
                Professional branding with custom favicon, removing the default broken image icon for a polished appearance.
              </p>
            </div>
          </div>
        </div>

        <div className="project-info__section">
          <h2 className="project-info__section-title">
            Backend Technologies
          </h2>
          <div className="project-info__cards">
            <div className="project-info__card">
              <h3 className="project-info__card-title">Node.js & Express</h3>
              <p className="project-info__card-description">
                Server-side JavaScript runtime with Express framework for building RESTful APIs with middleware support.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">MySQL Database</h3>
              <p className="project-info__card-description">
                Relational database with mysql2 driver for efficient data storage, retrieval, and complex queries.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">JWT Authentication</h3>
              <p className="project-info__card-description">
                JSON Web Token based stateless authentication with 7-day token expiration and secure httpOnly cookies.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">bcrypt Encryption</h3>
              <p className="project-info__card-description">
                Industry-standard password hashing with 12 salt rounds for secure credential storage, preventing rainbow table attacks.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Google OAuth 2.0</h3>
              <p className="project-info__card-description">
                Passport.js integration with Google OAuth strategy for social authentication, automatic user creation, and profile data import.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Swagger/OpenAPI</h3>
              <p className="project-info__card-description">
                Interactive API documentation with swagger-ui-express, JSDoc annotations, and "Try it out" functionality for easy testing.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">CORS Configuration</h3>
              <p className="project-info__card-description">
                Cross-Origin Resource Sharing setup with credentials support for secure frontend-backend communication.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Environment Variables</h3>
              <p className="project-info__card-description">
                Secure configuration management with dotenv for sensitive credentials and environment-specific settings.
              </p>
            </div>
          </div>
        </div>

        <div className="project-info__section">
          <h2 className="project-info__section-title">
            Security Features
          </h2>
          <div className="project-info__cards">
            <div className="project-info__card">
              <h3 className="project-info__card-title">HTTPS/SSL/TLS</h3>
              <p className="project-info__card-description">
                End-to-end encryption with self-signed SSL certificates (4096-bit RSA) for development, demonstrating security best practices.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Secure Sessions</h3>
              <p className="project-info__card-description">
                Express-session with httpOnly, sameSite, and secure flags to prevent XSS and CSRF attacks.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Password Validation</h3>
              <p className="project-info__card-description">
                Client-side and server-side validation with minimum length requirements and complexity checks.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Protected Routes</h3>
              <p className="project-info__card-description">
                Authentication middleware protecting API endpoints and frontend routes from unauthorized access.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Account Security</h3>
              <p className="project-info__card-description">
                Prevention of account hijacking by blocking OAuth linking with existing local accounts.
              </p>
            </div>
          </div>
        </div>

        <div className="project-info__section">
          <h2 className="project-info__section-title">
            DevOps & Production Features
          </h2>
          <div className="project-info__cards">
            <div className="project-info__card">
              <h3 className="project-info__card-title">PM2 Process Manager</h3>
              <p className="project-info__card-description">
                Production-grade process management with auto-restart on crashes, cluster mode, memory limits, and structured logging.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Git Version Control</h3>
              <p className="project-info__card-description">
                Source code management with .gitignore for sensitive files (SSL certificates, logs, environment variables).
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">Structured Logging</h3>
              <p className="project-info__card-description">
                PM2 log management with separate error, output, and combined log files for debugging and monitoring.
              </p>
            </div>
            <div className="project-info__card">
              <h3 className="project-info__card-title">NPM Scripts</h3>
              <p className="project-info__card-description">
                Automated development workflow with npm scripts for starting, stopping, restarting, and monitoring the application.
              </p>
            </div>
          </div>
        </div>

        <div className="project-info__section">
          <h2 className="project-info__section-title">
            Professional Highlights
          </h2>
          <div className="project-info__highlights">
            <div className="project-info__highlight">
              <div className="project-info__highlight-content">
                <h3>Enterprise-Grade Security</h3>
                <p>HTTPS encryption, bcrypt hashing (12 rounds), JWT tokens, OAuth 2.0, and secure session management matching industry standards.</p>
              </div>
            </div>
            <div className="project-info__highlight">
              <div className="project-info__highlight-content">
                <h3>Interactive Documentation</h3>
                <p>Swagger UI at /api-docs with complete API specifications, request/response schemas, and interactive testing capabilities.</p>
              </div>
            </div>
            <div className="project-info__highlight">
              <div className="project-info__highlight-content">
                <h3>Production-Ready Architecture</h3>
                <p>PM2 process management, environment-based configuration, error handling, and scalable code structure.</p>
              </div>
            </div>
            <div className="project-info__highlight">
              <div className="project-info__highlight-content">
                <h3>Modern Development Practices</h3>
                <p>Component-based architecture, RESTful API design, responsive UI, code organization following best practices.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-info__footer">
          <p className="project-info__footer-text">
            Built for NBAD Course - University of North Carolina at Charlotte
          </p>
          <div className="project-info__footer-links">
            <a href={`${API_BASE_URL}/api-docs`} target="_blank" rel="noopener noreferrer" className="project-info__footer-link">
              View API Docs
            </a>
            <span className="project-info__footer-separator">•</span>
            <a href="https://github.com/varunsureshkumar-77/V55_ITIS5166" target="_blank" rel="noopener noreferrer" className="project-info__footer-link">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;

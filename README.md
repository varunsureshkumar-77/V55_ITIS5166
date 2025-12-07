# V55 Clean Energy - Full Stack Application

A production-ready Single Page Application (SPA) with fully decoupled frontend and backend architecture. This project demonstrates modern web development practices including secure authentication, HTTPS/TLS encryption, OAuth 2.0 integration, API documentation, and process management.

## Live Application

- **Main Application**: [https://159.65.173.35.nip.io](https://159.65.173.35.nip.io)
- **Frontend** (NGINX on port 80): [https://159.65.173.35.nip.io](https://159.65.173.35.nip.io)
- **Backend API** (Node.js on port 3000): [https://159.65.173.35.nip.io/api](https://159.65.173.35.nip.io/api)
- **Backend Health Check**: [https://159.65.173.35.nip.io/api/health](https://159.65.173.35.nip.io/api/health)
- **API Documentation (Swagger)**: [https://159.65.173.35.nip.io/api-docs](https://159.65.173.35.nip.io/api-docs)
- **Lighthouse Accessibility Report**: [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-v55-frontend-web-app/kt4wvtqtkq?hl=en-GB&form_factor=desktop)

### Deployment Architecture
- **Server**: Single DigitalOcean Droplet (159.65.173.35)
- **Frontend**: NGINX reverse proxy serving React SPA on port 80 (HTTPS)
- **Backend**: Node.js/Express API on port 3000 (proxied through NGINX)
- **Database**: MySQL running locally on the server
- **Process Manager**: PM2 ensuring 24/7 backend availability
- **SSL/TLS**: Self-signed certificate for HTTPS encryption

### Archived Deployments
- **Firebase Frontend** (deprecated): [https://v55-frontend.web.app](https://v55-frontend.web.app)
- **Heroku Backend** (deprecated): [https://v55-backend-5ab44bfcd040.herokuapp.com/api/health](https://v55-backend-5ab44bfcd040.herokuapp.com/api/health)

## Tech Stack

### Frontend
- React 18 with Vite build tooling
- React Router v6 for client-side routing
- Tailwind CSS and BEM methodology for styling
- Axios for HTTP requests
- Context API for state management

### Backend
- Node.js with Express framework
- MySQL database with mysql2 driver
- JWT authentication with 7-day token expiration
- bcryptjs password hashing (12 salt rounds)
- Passport.js with Google OAuth 2.0 strategy
- Swagger/OpenAPI documentation (swagger-ui-express)
- PM2 process management for production deployment

### Security & DevOps
- HTTPS/SSL/TLS with self-signed certificates for development
- Secure session management (httpOnly, sameSite, secure flags)
- CORS configuration for cross-origin requests
- Environment-based configuration with dotenv
- Structured logging and error handling

## Project Structure

```
v55-app/
├── backend/
│   ├── config/
│   │   ├── database.js          # MySQL connection pool
│   │   ├── passport.js          # Google OAuth strategy
│   │   └── swagger.js           # API documentation config
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── routes/
│   │   ├── auth.js              # Authentication endpoints
│   │   └── data.js              # Protected data endpoints
│   ├── ssl/                     # Self-signed certificates (development)
│   ├── logs/                    # PM2 log files
│   ├── ecosystem.config.cjs     # PM2 configuration
│   ├── .env                     # Environment variables (not in git)
│   ├── .env.example             # Environment template
│   ├── package.json
│   └── server.js                # Express server with HTTPS
│
└── frontend/
    ├── public/
    │   └── pngwing.com.png      # Custom favicon
    ├── src/
    │   ├── components/
    │   │   ├── ProtectedRoute.jsx
    │   │   └── AuthNavbar.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── LandingPage.jsx
    │   │   ├── Login.jsx
    │   │   ├── Signup.jsx
    │   │   ├── AuthCallback.jsx # OAuth callback handler
    │   │   ├── Dashboard.jsx
    │   │   ├── Summary.jsx
    │   │   ├── Reports.jsx
    │   │   └── ProjectInfo.jsx  # Technology documentation
    │   ├── services/
    │   │   └── api.js           # Axios instance with interceptors
    │   ├── styles/              # BEM-based CSS modules
    │   ├── App.jsx
    │   └── main.jsx
    ├── ssl/                     # Self-signed certificates (development)
    ├── package.json
    └── vite.config.js           # Vite with HTTPS configuration
```

## Features

### Authentication
- User registration with bcrypt password hashing (12 salt rounds)
- Secure login with JWT tokens (7-day expiration)
- Google OAuth 2.0 single sign-on
- Protected routes with authentication middleware
- Persistent authentication using localStorage
- Secure logout functionality
- Account security preventing OAuth account hijacking

### Security
- HTTPS/TLS encryption for all communications
- Self-signed SSL certificates for development
- JWT-based stateless authentication
- Secure session management (httpOnly, sameSite, secure flags)
- Password strength validation
- CORS configuration for cross-origin security
- Environment-based secret management
- SQL injection prevention with parameterized queries

### API Documentation
- Interactive Swagger UI at `/api-docs`
- Complete OpenAPI 3.0 specification
- Request/response schemas with examples
- "Try it out" functionality for endpoint testing
- Bearer token authentication support

### Process Management
- PM2 ecosystem configuration
- Auto-restart on crashes
- Cluster mode support
- Memory limit controls
- Structured logging (error, output, combined logs)
- NPM scripts for PM2 operations

### UI/UX
- Modern, responsive design with Tailwind CSS
- BEM methodology for maintainable CSS
- Mobile-first responsive layouts
- Loading states and error handling
- Smooth animations and transitions
- Custom favicon for professional branding
- Clean navigation with active route highlighting

### Data Visualization
- Chart.js integration for data display
- Summary page with clean energy innovation trends
- Reports page with regional investment data
- Interactive charts with tooltips

## CSS Methodology

The project follows BEM (Block Element Modifier) methodology for maintainable and scalable CSS:

```css
/* Block - Standalone component */
.auth-form { }

/* Element - Part of the block */
.auth-form__header { }
.auth-form__title { }
.auth-form__input { }

/* Modifier - Variation of block or element */
.btn--primary { }
.btn--full { }
.auth-form--error { }
```

Benefits:
- Clear naming conventions
- Reduced CSS specificity issues
- Self-documenting code structure
- Easy to understand component relationships

### API Documentation Test

1. Navigate to `https://localhost:5000/api-docs`
2. Explore the interactive Swagger UI
3. Test endpoints using the "Try it out" button
4. For protected endpoints, click "Authorize" and enter your JWT token

### PM2 Process Management Test

```fish
# Start with PM2
npm run pm2:start

# Check status
npm run pm2:monit

# View logs
npm run pm2:logs

# Restart
npm run pm2:restart

# Stop
npm run pm2:stop
```

## Application Flow

### User Journey

1. **Landing Page** → User visits application → Presented with clean landing page
2. **Authentication Choice** → User can choose:
   - Local signup with email/password
   - Login with existing credentials
   - Continue with Google OAuth
3. **Protected Access** → After authentication:
   - JWT token stored in localStorage
   - Redirected to Dashboard
   - Access to Summary, Reports, and Project Info pages
4. **Session Persistence** → Token validated on each protected route access
5. **Logout** → Token removed from localStorage → Redirect to landing page

### Technical Flow

```
Client Request → React Router → Protected Route Check
                                      ↓
                              Token Present?
                                      ↓
                    Yes ←─────────────┼─────────────→ No
                     ↓                                 ↓
              Verify with API                   Redirect to Login
                     ↓
              Valid Token?
                     ↓
        Yes ←────────┼────────→ No
         ↓                       ↓
    Render Page           Redirect to Login
```

## Environment Variables

### Backend (.env)

```env
# Server Configuration
PORT=5000
USE_HTTPS=true
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=v55user
DB_PASSWORD=your_secure_password
DB_NAME=v55_db

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_change_this
JWT_EXPIRE=7d

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=https://localhost:5000/api/auth/google/callback

# Frontend URL (for CORS and OAuth redirects)
FRONTEND_URL=https://localhost:5173

# Session Configuration
SESSION_SECRET=your_session_secret_change_this
```

### Security Notes

- Never commit `.env` files to version control
- Use strong, randomly generated secrets for production
- Rotate secrets regularly
- Use environment-specific configurations (development, staging, production)
- For production, use certificate authority signed SSL certificates (Let's Encrypt)

## Technologies Used

### Backend Technologies
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MySQL2** - MySQL client with promise support and prepared statements
- **bcryptjs** - Password hashing library with configurable salt rounds
- **jsonwebtoken** - JWT implementation for stateless authentication
- **Passport.js** - Authentication middleware with strategy support
- **passport-google-oauth20** - Google OAuth 2.0 strategy for Passport
- **swagger-jsdoc** - JSDoc-based Swagger specification generator
- **swagger-ui-express** - Interactive API documentation interface
- **express-session** - Session middleware for Express
- **cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable loader
- **PM2** - Production process manager with cluster support

### Frontend Technologies
- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM v6** - Declarative routing for React applications
- **Vite** - Next-generation frontend build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client
- **Chart.js** - Simple yet flexible charting library
- **react-chartjs-2** - React wrapper for Chart.js

### Development Tools
- **nodemon** - Auto-restart server on file changes
- **OpenSSL** - SSL/TLS certificate generation
- **Git** - Version control with .gitignore for sensitive files

## License

This project is developed for educational purposes as part of the NBAD course at the University of North Carolina at Charlotte.

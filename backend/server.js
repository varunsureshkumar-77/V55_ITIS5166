import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import authRoutes from './routes/auth.js';
import dataRoutes from './routes/data.js';
import passport from './config/passport.js';
import swaggerSpec from './config/swagger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not defined in environment variables');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.USE_HTTPS === 'true' || isProduction,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'V55 Clean Energy API Docs',
  customfavIcon: '/favicon.ico'
}));

// Swagger JSON endpoint
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'V55 Backend Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Load SSL certificates
const useHTTPS = process.env.USE_HTTPS === 'true' && !isProduction;
let server;

if (useHTTPS) {
  try {
    const sslOptions = {
      key: fs.readFileSync(join(__dirname, 'ssl', 'key.pem')),
      cert: fs.readFileSync(join(__dirname, 'ssl', 'cert.pem'))
    };
    
    server = https.createServer(sslOptions, app);
    server.listen(PORT, () => {
      console.log(`HTTPS Server is running on https://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to load SSL certificates:', error.message);
    console.log('Falling back to HTTP server');
    server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`HTTP Server is running on http://localhost:${PORT}`);
    });
  }
} else {
  server = http.createServer(app);
  server.listen(PORT, () => {
    const protocol = isProduction ? 'https' : 'http';
    console.log(`${protocol.toUpperCase()} Server is running on port ${PORT}`);
  });
}

export default server;

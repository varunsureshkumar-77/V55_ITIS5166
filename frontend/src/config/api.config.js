// API Configuration
const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://159.65.173.35/api'
    : 'https://localhost:5000/api',
};

export default config;

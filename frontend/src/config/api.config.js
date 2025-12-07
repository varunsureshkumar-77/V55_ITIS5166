// API Configuration
const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://v55-backend-5ab44bfcd040.herokuapp.com/api'
    : 'https://localhost:5000/api',
};

export default config;

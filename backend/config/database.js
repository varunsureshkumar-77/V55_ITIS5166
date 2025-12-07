import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'v55user',
  password: process.env.DB_PASSWORD || 'v55password',
  database: process.env.DB_NAME || 'v55_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

pool.getConnection()
  .then(async (connection) => {
    try {
      const dbName = process.env.DB_NAME || 'v55_db';
      await connection.query(`USE ${dbName}`);
      await connection.query('SELECT 1');
      console.log('Database connected successfully');
      console.log(`Using database: ${dbName}`);
    } catch (err) {
      console.error('Database query test failed:', err.message);
    } finally {
      connection.release();
    }
  })
  .catch(err => {
    console.error('Database connection failed:', err.message);
  });

export default pool;

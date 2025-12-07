import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: process.env.NODE_ENV !== 'production' && fs.existsSync(path.resolve(__dirname, 'ssl/key.pem')) 
      ? {
          key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
        }
      : false,
    port: 5173,
    host: true,
  },
})

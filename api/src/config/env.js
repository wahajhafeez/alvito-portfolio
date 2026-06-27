import dotenv from 'dotenv';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,

  MONGODB_URI: process.env.MONGODB_URI,

  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  CORS_ALLOWED_ORIGINS: process.env.CORS_ALLOWED_ORIGINS
    ? process.env.CORS_ALLOWED_ORIGINS.split(',').map((o) => o.trim())
    : [],

  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,

  ADMIN_SECRET: process.env.ADMIN_SECRET || 'change-me-in-production',
};

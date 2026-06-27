import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { generalRateLimit } from './middlewares/rateLimit.js';
import config from './config/env.js';

const app = express();

const allowedOrigins = [config.FRONTEND_URL, ...config.CORS_ALLOWED_ORIGINS].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      if (config.NODE_ENV === 'development') return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-admin-secret'],
  })
);

app.use(generalRateLimit);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Portfolio API', env: config.NODE_ENV });
});

app.use('/api', routes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

export default app;

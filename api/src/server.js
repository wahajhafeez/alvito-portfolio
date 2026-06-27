import app from './app.js';
import config from './config/env.js';
import connectDB from './config/database.js';

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.PORT, '0.0.0.0', () => {
      console.log(
        `Portfolio API running in ${config.NODE_ENV} mode on port ${config.PORT}`
      );
    });

    process.on('SIGTERM', () => {
      console.log('SIGTERM received. Shutting down gracefully...');
      process.exit(0);
    });

    process.on('SIGINT', () => {
      console.log('SIGINT received.');
      process.exit(0);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();

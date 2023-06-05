import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';
async function bootstrap() {
  let server: Server;
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database connected');
    server = app.listen(config.prot, () => {
      logger.info(`Server running on port ${config.prot}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect DB: ', err);
  }

  process.on('unhandledRejection', err => {
    console.log('unhandledRejection detected:');
    if (server) {
      server.close(() => {
        errorLogger.error(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

import mongoose from 'mongoose';
import app from './app';
import config from './config';
// import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', err => {
  console.log(err);
  process.exit(1);
});

let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected');
    server = app.listen(config.prot, () => {
      console.log(`Server running on port ${config.prot}`);
    });
  } catch (err) {
    console.log('Failed to connect DB: ', err);
  }

  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        console.log(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM: is received');
  if (server) {
    server.close();
  }
});

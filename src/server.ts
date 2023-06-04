import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected')
    app.listen(config.prot, () => {
      logger.info(`Server running on port ${config.prot}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect DB: ', err)
  }
}

bootstrap()

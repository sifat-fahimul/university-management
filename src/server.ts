import mongoose from 'mongoose'
import app from './app'
import config from './config'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connected')

    app.listen(config.prot, () => {
      console.log(`Server running on port ${config.prot}`)
    })
  } catch (err) {
    console.log('Failed to connect DB: ', err)
  }
}

bootstrap()

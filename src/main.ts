import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const port = process.env.APP_PORT || 3333

  app.enableCors()

  await app.listen(port)

  console.log(`${process.env.APP_NAME} running on port ${port}`)
}

bootstrap()

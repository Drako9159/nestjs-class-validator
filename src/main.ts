import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // delete 0.0.0.0 on production
  await app.listen(3000, '0.0.0.0');
}
bootstrap();

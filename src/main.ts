import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // configure global pipes for class-validator
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // delete 0.0.0.0 on production
  await app.listen(3000, '0.0.0.0');
}
bootstrap();

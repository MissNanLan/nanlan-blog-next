import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Nanlan Blog API')
    .setDescription('Nanlan Blog API description')
    .setVersion('1.0')
    .addTag('Nanlan Blog')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
    yamlDocumentUrl: 'swagger/yaml',
  });

  await app.listen(3001);
}
bootstrap();

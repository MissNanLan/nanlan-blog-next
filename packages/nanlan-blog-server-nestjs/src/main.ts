import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS配置
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // 数据转换
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 自动转换数据类型
      transformOptions: {
        enableImplicitConversion: true, // 允许隐式类型转换
      },
    }),
  );
  // 全局注册转换拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());
  // 注册全局异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api');

  // swagger 配置 (仅开发环境)
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Nanlan Blog API')
      .setDescription('Nanlan Blog API Description')
      .setVersion('1.0')
      .addTag('Nanlan Blog')
      .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document, {
      jsonDocumentUrl: 'swagger/json',
      yamlDocumentUrl: 'swagger/yaml',
    });

  }

  await app.listen(process.env.PORT || 3001);
}

// 为了支持 Vercel Serverless Functions
export default async function handler(req, res) {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const instance = app.getHttpAdapter().getInstance();
  return instance(req, res);
}

// 本地开发时使用
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}

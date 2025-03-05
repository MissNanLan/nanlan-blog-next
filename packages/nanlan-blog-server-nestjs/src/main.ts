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
    allowedHeaders: ["X-Requested-With,Content-Type,Accept,Authorization"],
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
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(process.env.PORT || 3001);
}

bootstrap();
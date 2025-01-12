import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  MethodNotAllowedException,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiException } from '../exception/api.exception';
import { ResponseTransform } from '../transforms/response.transform';
import { LoggerUtil } from '../utils/logger.util';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const logger = new LoggerUtil(HttpExceptionFilter.name);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = '服务器内部错误';
    let error = null;
    let stack = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
      error = exception.getResponse();
      stack = (exception as any).stack;
    } else if (exception instanceof ApiException) {
      status = exception.statusCode;
      message = exception.message;
      error = exception.error;
      stack = exception.stack;
    } else if (exception instanceof MethodNotAllowedException) {
      status = exception.getStatus();
      message = exception.message;
      error = exception.getResponse();
      stack = (exception as any).stack;
    } else if (exception instanceof Error) {
      message = exception.message;
      error = exception.stack;
      stack = exception.stack;
    }

    logger.error(message, stack, error);
    response.status(status).json(ResponseTransform.error(message, status));
  }
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ResponseTransform } from '../transforms/response.transform';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // 分页数据
        if (data.pageInfo) {
          return ResponseTransform.success({
            ...data.pageInfo,
            content: data.items,
          });
        }
        return ResponseTransform.success(data);
      }),
    );
  }
}

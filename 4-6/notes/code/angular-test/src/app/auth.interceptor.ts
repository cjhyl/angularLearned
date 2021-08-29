import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

// 拦截器是个服务类
@Injectable()
// 本来拦截器明明为AuthInterceptor，需实现HttpInterceptor接口
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  // HttpInterceptor需实现拦截方法intercept
  // 入参request为请求对象 next用于回传修改后的请求对象和处理响应拦截
  // 出参 返回值为一个可观察对象Observable
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request', request)
    // 克隆并修改请求头
    const req = request.clone({
      setHeaders: {
        hello: "hello"
      }
    })
    return next.handle(req).pipe(
      retry(2),// 辅助方法retry,请求失败后重新请求，入参为请求次数
    );
  }
}

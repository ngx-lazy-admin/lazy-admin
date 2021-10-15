import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { MessageService } from '../services/message.service'



@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor(
    private message: MessageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({setHeaders: {
      'X-Requested-With': 'XMLHttpRequest',
      'request-id': Math.random().toString(36).slice(-8) +  '-' + new Date().getTime()
    }});
    const messageId = this.message.loading('数据加载中...')
    return next.handle(req).pipe(debounceTime(3000)).pipe(tap(event => {
      this.message.remove(messageId);
    }, error => {
      this.message.remove(messageId);
      if (error.status === 401 && location.pathname !== '/login') {
        location.href = 'login?return_url=' + encodeURIComponent(location.href);
      }
    }));
  }
}

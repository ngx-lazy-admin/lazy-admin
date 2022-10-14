import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message/message.service';
// import { MessageService } from '../services/message/message.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor(
    private message: MessageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({setHeaders: {
      'request-id': Math.random().toString(36).slice(-8) +  '-' + new Date().getTime()
    }});
    return next.handle(req).pipe(tap(event => {
    }, error => {
      if (error.status === 401 && location.pathname !== '/login') {
        location.href = 'login?return_url=' + encodeURIComponent(location.href);
      }
    }));
  }
}

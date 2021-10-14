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


@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({setHeaders: {
      'X-Requested-With': 'XMLHttpRequest',
      'request-id': Math.random().toString(36).slice(-8) +  '-' + new Date().getTime()
    }});
    console.log('request: loading');
    
    return next.handle(req).pipe(debounceTime(1000)).pipe(tap(event => {
      console.log(event)
      console.log('request: event')
    }, error => {
      console.log(error)
      console.log('request: error')
      if (error.status === 401 && location.pathname !== '/login') {
        location.href = 'login?return_url=' + encodeURIComponent(location.href);
      }
    }));
  }
}

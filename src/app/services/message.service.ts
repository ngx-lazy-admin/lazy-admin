

import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Menu } from '../interfaces/menu'
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _destroy$ = new Subject();
  private _loading$ = new BehaviorSubject<boolean|null>(null);

  get loading$() {
    return this._loading$.asObservable()
  }

  constructor(private message: NzMessageService) {}

  success(str: string): void {
    this.message.success(str);
  }

  error(str: string): void {
    this.message.error(str);
  }

  warning(str: string): void {
    this.message.warning(str);
  }

  loading (msg: string, duration: number = 0) {
    this._loading$.next(true);
    return this.message.loading(msg, { nzDuration: duration }).messageId;
  }

  remove (messageId: string) {
    this._loading$.next(false);
    this.message.remove(messageId)
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

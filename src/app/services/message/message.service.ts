import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NzMessageDataOptions, NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _destroy$ = new Subject();
  private _loading$ = new BehaviorSubject<boolean|null>(null);

  get loadingChange$() {
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

  loading (msg: string, duration: NzMessageDataOptions = { nzDuration: 0}) {
    this._loading$.next(true);
    return this.message.loading(msg, duration).messageId;
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

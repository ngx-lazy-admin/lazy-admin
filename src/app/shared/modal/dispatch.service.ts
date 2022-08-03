import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatchService   {

  constructor() {}

  modal$ = new Subject<any>();

  open (type: string, params?: any, componentParams?: any) {
    this.modal$.next({type: type, params: params, componentParams: componentParams})
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatchService   {

  constructor() {}

  modal$ = new Subject<any>();

  open (type: string, params?: any, componentParams?: any) {
    this.modal$.next({operation: 'open', type: type, params: params, componentParams: componentParams})
  }

  close (id: string) {
    this.modal$.next({operation: 'close', id: id})
  }

  closeAll (id: string) {
    this.modal$.next({operation: 'closeAll'})
  }

  hide (id: string) {
    if (id) {
      this.modal$.next({operation: 'hide', id: id})
    }
  }

  hideAll () {
    console.log('hideAll')
    this.modal$.next({operation: 'hideAll'})
  }

  show (id: string) {
    this.modal$.next({operation: 'show', id: id})
  }

  showAll () {
    this.modal$.next({operation: 'showAll'})
  }
}

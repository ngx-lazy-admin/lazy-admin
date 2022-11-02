import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsefulService {
  constructor() {
    console.log('Useful Service is created');
  }
}

@Injectable({
  providedIn: 'root'
})
export class NeedsService {
  constructor(public service: UsefulService) {
    console.log('NeedsService is created');
    console.log(this);
  }
  template = {};
  setTemplate(id: any) {
    this.template = {
      id: id
    };
    console.log(id);
  }

  getTemplate() {
    return this.template;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DispatchService {
  constructor() {}

  modal$ = new Subject<any>();
  templateRef = {};

  open(type: string, params?: any, componentParams?: any) {
    this.modal$.next({ operation: 'open', type: type, params: params, componentParams: componentParams });
  }

  close(id: string) {
    this.modal$.next({ operation: 'close', id: id });
  }

  closeAll(id: string) {
    this.modal$.next({ operation: 'closeAll' });
  }

  hide(id: string) {
    if (id) {
      this.modal$.next({ operation: 'hide', id: id });
    }
  }

  hideAll() {
    console.log('hideAll');
    this.modal$.next({ operation: 'hideAll' });
  }

  show(id: string) {
    this.modal$.next({ operation: 'show', id: id });
  }

  showAll() {
    this.modal$.next({ operation: 'showAll' });
  }

  // addTemplateRef (key, templateRef) {
  //   this.templateRef(templateRef,)
  // }
}

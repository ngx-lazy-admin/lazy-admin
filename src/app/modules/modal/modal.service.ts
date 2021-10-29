import {
  Injectable,
  ViewChild,
  Inject,
  AfterViewInit, Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef  } from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal, DomPortalOutlet,  } from '@angular/cdk/portal';

import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import hotkeys from 'hotkeys-js';
import { ModalComponent } from './modal.component';
import { DOCUMENT,  } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ModalService   {
  
  // tplModalButtonLoading = false;
  // disabled = false;

  // tplModal:any = null;
  // distance = {x: 0, y: 0}

  // componentPortal: ComponentPortal<ComponentPortalExample> = new ComponentPortal(ComponentPortalExample);
  // private _document = DOCUMENT;


  constructor(
  ) {}

 
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {

    // this.tplModal = this.modal.create({
    //   nzContent: this.componentPortal,
    //   nzMask: false,
    //   nzMaskClosable: false,
    //   nzClosable: false,
    //   nzComponentParams: {
    //     value: 'Template Context'
    //   },
    //   nzOnOk: () => console.log('Click ok')
    // });

    // class NgTemplateOutletExample {
    //   eng:TemplateRef = this.createTemplateRef('<ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>');
    //   myContext = {$implicit: 'World'};
    // }

    // if (!this._outlet) {
    //   this._outlet = new DomPortalOutlet(this._document.createElement('div'),
    //   this._componentFactoryResolver, this._appRef, this._injector);
    // }
    // const element: HTMLElement = this._template.elementRef.nativeElement;
    // element.parentNode!.insertBefore(this._outlet.outletElement, element);
    // this._portal.attach(this._outlet, context);


  }

  ceateModal () {
    // let container = this._document.createElement('div');
    // container.classList.add('component-portal');
    // container = this._document.body.appendChild(container);
    // let container = this.element.nativeElement.createElement('div');
    // container.classList.add('component-portal');
    // container = this.element.nativeElement.body.appendChild(container);
  }
}

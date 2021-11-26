import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Injectable,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ComponentPortal, DomPortalOutlet, DomPortal, Portal, TemplatePortal,   } from '@angular/cdk/portal';

import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import hotkeys from 'hotkeys-js';
import { ModalComponent } from './modal.component';
import { NzModalCustomComponent } from './modal-form.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService   {
  viewContainerRef!: ViewContainerRef

  constructor(
    private modal: NzModalService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ceateForm(params: any): NzModalRef {

    // const componentPortal = new ComponentPortal(ComponentPortalExample);

    console.log(ComponentPortalExample)

     const userSettingsPortal = new ComponentPortal(ComponentPortalExample);

    // this.componentPortal.createEmbeddedView('this is a embedded view')

    console.log(userSettingsPortal)

    const modal = this.modal.create({
      nzTitle: '11',
      nzWidth: params.nzWidth || 1200,
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        fields: params.field,
        model: params.model
      },
      nzOnOk: params.nzOnOk,
      nzFooter: params.nzFooter
    });
    // const instance = modal.getContentComponent();
    // modal.afterOpen.subscribe(() => {
    //   console.log('[afterOpen] emitted!')
    // });

    // modal.afterClose.subscribe(result =>  {
    //   console.log('[afterClose] The result is:', result)
    // });
    return modal
  }
}


@Component({
  selector: 'component-portal-example',
  template: `Hello, this is a component portal
    <ng-template #templatePortalContent>Hello, this is a template portal</ng-template>
  `,
})
export class ComponentPortalExample {
    @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;

    public aaaa: any
    constructor() {
      this.aaaa = this.templatePortalContent
    }
}


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
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  RendererFactory2
  
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { NgElement, WithProperties } from '@angular/elements';
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

  userSettingsPortal: any

  currentIndex: number = 1001

  private renderer: Renderer2;

  private _modals: NzModalRef[] = [];
  private _hideAllStatus: boolean = false;

  constructor(
    private modal: NzModalService,
    private injector: Injector,
    private rendererFactory: RendererFactory2,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

  }


    // This uses the new custom-element method to add the popup to the DOM.
    showAsElement(message: string) {
      // Create element
      const popupEl = document.createElement('popup-element') as any;
  
      // Listen to the close event
      popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
  
      // Set the message
      popupEl.message = message;
  
      // Add to the DOM
      document.body.appendChild(popupEl);

      console.log(popupEl)
    }

  ceateForm(params: any, $event: any): NzModalRef {
    console.log('ceateForm')

    $event.stopPropagation();
    // this.showAsElement('3333')
    // const componentPortal = new ComponentPortal(ComponentPortalExample);

    // console.log(ComponentPortalExample)
    // console.log(ComponentPortalExample.greeting('ddd'))

    //  this.userSettingsPortal = new ComponentPortal(ComponentPortalExample);

    // this.componentPortal.createEmbeddedView('this is a embedded view')

    // userSettingsPortal.detach()

    // console.log(this.userSettingsPortal.component)

    // const popup = document.createElement('popup-component');

    // // Create the component and wire it up with the element
    // const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    // const popupComponentRef = factory.create(this.injector, [], popup);

    // // Attach to the view so that the change detector knows to run
    // this.applicationRef.attachView(popupComponentRef.hostView);
    // console.log(params.title)
    this._hideAllStatus = false;
    const modal = this.modal.create({
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzZIndex: this.currentIndex,
      nzComponentParams: {
        fields: params.field,
        model: params.model,
        title: params.nzTitle
      },
      ...params
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    this._modals.push(modal)
    // const instance = modal.getContentComponent();
    // modal.afterOpen.subscribe(() => {
    //   console.log('[afterOpen] emitted!')
    // });

    // modal.afterClose.subscribe(result =>  {
    //   console.log('[afterClose] The result is:', result)
    // });
    this.renderer.listen( modal.containerInstance.modalElementRef.nativeElement,'click',(event) => {
      if ((modal.containerInstance.config.nzZIndex || 0) < this.currentIndex) {
        modal.containerInstance.config.nzZIndex = ++this.currentIndex;
      }
      modal.containerInstance.config.nzZIndex = ++this.currentIndex;
    })
    return modal
  }

  closeAll () {
    console.log(this.modal)


    this.modal.closeAll()
  }

  hideAll () {
    console.log('666')
    if (!this._hideAllStatus) {
      this._hideAllStatus = true
      this._modals.map(modal => {
        this.hideModal(modal)
      })
      this.currentIndex = 1001
    }
  }

  show ($event: any) {
    console.log('show')
    $event.stopPropagation();
    // console.log
    this._hideAllStatus = false;
    this._modals.map(modal => {
      this.showModal(modal)
    })

  }

  // 显示移除 d-none
  showModal (modal: NzModalRef) {
    const config = modal.getConfig()
    let className = config.nzWrapClassName?.split(" ")
    console.log(className)

    if (className?.find(name => name === 'd-none')) {
      className = className?.filter(item => item !== 'd-none')
    }
    console.log(className)
    modal.updateConfig({
      ...config,
      nzWrapClassName: className?.join(' ')
    })
  }

  // 隐藏添加 d-none
  hideModal (modal: NzModalRef) {
    const config = modal.getConfig()
    let className = config.nzWrapClassName?.split(" ")
    if (!className?.find(name => name === 'd-none')) {
      className?.push('d-none')
    }
    modal.updateConfig({
      ...config,
      nzZIndex: 1000,
      nzWrapClassName: className?.join(' ')
    })
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

    
  greeting(name: string) {
    console.log("hello" + name);
  }
}


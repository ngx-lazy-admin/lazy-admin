import {
  Component,
  ChangeDetectionStrategy,
	TemplateRef,
	ViewChild,
  ViewContainerRef,
  ElementRef,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  ChangeDetectorRef,
} from '@angular/core';
import { DomPortalOutlet, Portal, TemplatePortal } from '@angular/cdk/portal';
import { ModalService } from '../modal.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { appendClassName } from 'src/app/utils/class-name';

@Component({
  selector: 'app-share-template',
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTemplateComponent {

  // 弹窗模板
  @ViewChild('portalTemplateRef') portalTemplateRef!: TemplateRef<any>;

  // 弹窗标题的模板
  @ViewChild('titleTemplateRef') titleTemplateRef!: TemplateRef<any>;

  // iframe template
  @ViewChild('iframeTemplateRef') iframeTemplateRef!: TemplateRef<any>;

  // form template
  @ViewChild('formTemplateRef') formTemplateRef!: TemplateRef<any>;

  // blank template
  @ViewChild('blankTemplateRef') blankTemplateRef!: TemplateRef<any>;

  selectedPortal!: Portal<any>;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private injector: Injector,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService,
    private cd: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    this.addEventListenMessage()
  }

  open (ref: any, params: any) {
    console.log(ref, params)
  }
  

// .cdk-overlay-container,
// .cdk-overlay-backdrop,
// .ant-modal-wrap  {
//     pointer-events: none !important;
// }

  // 获取组件模板
  public getComponentRef (params?: any): TemplateRef<any> {

    const selectedPortal = new TemplatePortal(this.getTemplateRef(params.type), this._viewContainerRef, {
      context: params
    });

    const portalOutlet = new DomPortalOutlet(
      this.elementRef.nativeElement as HTMLElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    const embeddedViewRef = portalOutlet.attachTemplatePortal(selectedPortal);
    return this.portalTemplateRef
  }

  // get TemplateRef
  public getTemplateRef (type?: 'title' | 'blank' | 'iframe' | 'form'): TemplateRef<any> {
    // 获取template, 填充实例
    switch (type) {
      case 'title':
        return this.titleTemplateRef
      case 'iframe':
        return this.iframeTemplateRef
      case 'form':
        return this.formTemplateRef
      case 'blank':
        return this.blankTemplateRef
      default:
        return this.blankTemplateRef
    }
  }

  // template click
  templateClick ($event: any, modalRef: NzModalRef, params?: any) {
    console.log(params)
    if ($event.type === 'close') {
      modalRef.destroy();
    } else if ($event.type === 'min') {
      const className = appendClassName(modalRef.getConfig().nzWrapClassName, 'd-none')
      modalRef.updateConfig({nzWrapClassName: className});
    } else if ($event.type === 'max') {
      const element = modalRef.getElement().querySelector('.ant-modal-content')
      if (document?.fullscreenElement) {
        document?.exitFullscreen()
      } else {
        element?.requestFullscreen()
      }
    }
  }

  // Listen Iframe Event
  addEventListenMessage () {
    window.addEventListener('message', (e) => {
      // console.log(e)
      if (e.data && e.data.key && e.data.value) {
        // this.modalService.open(e.data.key, e.data.value);
      }
    })
  }
}

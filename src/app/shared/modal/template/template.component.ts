import {
  Component,
  ChangeDetectionStrategy,
	TemplateRef,
	ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { DomPortalOutlet, Portal, } from '@angular/cdk/portal';
import { ModalService } from '../modal.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { appendClassName } from 'src/app/utils/class-name';

@Component({
  selector: 'app-share-template',
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTemplateComponent {

  // title template
  @ViewChild('titleTemplateRef') titleTemplateRef!: TemplateRef<any>;

  // iframe template
  @ViewChild('iframeTemplateRef') iframeTemplateRef!: TemplateRef<any>;

  // form template
  @ViewChild('formTemplateRef') formTemplateRef!: TemplateRef<any>;

  // blank template
  @ViewChild('blankTemplateRef') blankTemplateRef!: TemplateRef<any>;


  constructor(
    private modalService: ModalService,
    private cd: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    this.addEventListenMessage()
  }

  open (ref: any, params: any) {
    console.log(ref, params)
  }
  
  // get TemplateRef
  public getTemplateRef (type?: 'title' | 'blank' | 'iframe' | 'form' | string): TemplateRef<any> {
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
    if ($event.type === 'close') {
      modalRef.destroy();
    }
    
    if ($event.type === 'min') {
      const className = appendClassName(modalRef.getConfig().nzWrapClassName, 'd-none')
      modalRef.updateConfig({nzWrapClassName: className});
    } 
    
    if ($event.type === 'max') {
      const element = modalRef.getElement().querySelector('.ant-modal-content')
      if (document?.fullscreenElement) {
        document?.exitFullscreen()
      } else {
        element?.requestFullscreen()
      }
    }
  }

  // Listen Iframe Event
  addEventListenMessage ()  {
    window.addEventListener('message', (e) => {
      // console.log(e)
      if (e.data && e.data.key && e.data.value) {
        // this.modalService.open(e.data.key, e.data.value); 
      }
    })
  }
}

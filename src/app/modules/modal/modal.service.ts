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

  // 创建弹窗
  ceateForm(params: any, $event: any): NzModalRef {
    $event.stopPropagation();

    this._hideAllStatus = false;
    const modal = this.modal.create({
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzZIndex: this.currentIndex,
      nzStyle: {
        left: ((this._modals.length) * 20) + 'px',
        top: ((this._modals.length) * 20 + 100) + 'px',
      },
      nzComponentParams: {
        fields: params.field,
        model: params.model,
        title: params.nzTitle
      },
      ...params
    });

    // 监听弹窗打开
    modal.afterOpen.subscribe(() => {
      console.log('[afterOpen] emitted!')
    });

    // 监听弹窗关闭
    modal.afterClose.subscribe(result => {
      console.log('[afterClose] The result is:', result)
    });

    // 监听弹窗点击
    this.renderer.listen( modal.containerInstance.modalElementRef.nativeElement,'click',(event) => {
      if ((modal.containerInstance.config.nzZIndex || 0) < this.currentIndex) {
        modal.containerInstance.config.nzZIndex = ++this.currentIndex;
      }
      modal.containerInstance.config.nzZIndex = ++this.currentIndex;
    })

    this._modals.push(modal)

    return modal
  }

  // 关闭所有弹窗
  closeAll () {
    this.modal.closeAll()
  }

  openAll () {
    console.log(this.modal.openModals)
  }

  // 隐藏所有弹窗
  hideAll () {
    if (!this._hideAllStatus) {
      this._hideAllStatus = true
      this.modal.openModals.map(modal => {
        this.hideModal(modal)
      })
      this.currentIndex = 1001
    }
  }

  // 显示所有弹窗
  show ($event: any) {
    $event.stopPropagation();
    // console.log
    this._hideAllStatus = false;
    this.modal.openModals.map(modal => {
      this.showModal(modal)
    })
  }

  // 显示弹窗
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

  // 隐藏弹窗
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

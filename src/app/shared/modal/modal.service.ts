import { Injectable, Renderer2, ViewContainerRef, RendererFactory2, TemplateRef, ViewChild } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { randomString } from 'src/app/utils';
import { appendClassName, removeClassName } from 'src/app/utils/class-name';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  viewContainerRef!: ViewContainerRef;

  currentIndex: number = 1000;

  modalIndex: number = 1000;

  private renderer: Renderer2;

  private change$ = new BehaviorSubject(0);

  get change() {
    return this.change$.asObservable();
  }

  constructor(private modal: NzModalService, private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    this.change$.subscribe(item => {
      console.log('change$');
    });
  }

  // 创建弹窗
  create(templateRef: TemplateRef<any>, params?: any) {
    // 设置
    if (params.id) {
      const modal = this.find(params.id);
      if (modal) {
        modal.destroy();
        return;
      }
    }

    let nzComponentParams = {};
    if (params?.nzComponentParams) {
      nzComponentParams = params?.nzComponentParams;
    }

    let id = params.id || randomString(32);

    const modal = this.modal.create({
      id: id,
      nzContent: templateRef,
      nzTitle: null,
      nzMask: false,
      nzViewContainerRef: this.viewContainerRef,
      nzBodyStyle: {
        padding: 0
      },
      nzStyle: {
        left: this.modal.openModals.length * 20 + 'px',
        top: this.modal.openModals.length * 20 + 100 + 'px'
      },
      ...params,
      nzComponentParams: {
        id: id,
        ...nzComponentParams
      },
      nzClosable: false
    });

    // console.log(this.ne)

    // 监听弹窗打开
    modal.afterOpen.subscribe(result => {
      console.log('[afterOpen] emitted!', result);
      if (params?.afterOpen) {
        params.afterOpen(modal);
      }

      this.change$.next(1);
    });

    // 监听弹窗关闭
    modal.afterClose.subscribe(result => {
      console.log('[afterClose] The result is:', result);
      if (params?.afterClose) {
        params.afterClose(modal);
      }
      this.change$.next(2);
    });

    this.listenModal(modal);
  }

  private listenModal(modal: NzModalRef) {
    // 监听弹窗点击
    this.renderer.listen(modal.containerInstance.modalElementRef.nativeElement, 'mousedown', event => {
      // 所有弹窗层级减一
      this.modal.openModals.forEach(modal => {
        const zIndex = modal.containerInstance.config.nzZIndex || this.modalIndex;
        modal.containerInstance.config.nzZIndex = zIndex > this.modalIndex ? zIndex - 1 : this.modalIndex;
      });

      // 当前弹窗层级设置最大
      modal.containerInstance.config.nzZIndex = this.modalIndex + this.modal.openModals.length;
    });

    // 添加样式穿透
    // modal?.getElement().parentElement?.parentElement?.classList.add('pointer-events-none');

    // 添加穿透
    // .cdk-overlay-container,
    // .cdk-overlay-backdrop,
    // .ant-modal-wrap  {
    //     pointer-events: none !important;
    // }

    // 添加滚动
    // ::ng-deep .ant-modal-wrap {
    //   overflow: unset;
    // }

    // const element = modal.getElement().querySelector('.ant-modal-content')

    // 修改弹窗层级
    setTimeout(() => {
      modal.containerInstance.config.nzZIndex = this.modalIndex + this.modal.openModals.length;
    }, 0);
  }

  show(modal: NzModalRef) {
    modal.updateConfig({ nzWrapClassName: removeClassName(modal.getConfig().nzWrapClassName, 'd-none') });
    this.change$.next(3);
  }

  showAll() {
    this.modal.openModals?.map(modal => this.show(modal));
  }

  hide(modal: NzModalRef) {
    modal.updateConfig({ nzWrapClassName: appendClassName(modal.getConfig().nzWrapClassName, 'd-none') });
    this.change$.next(4);
  }

  hideAll() {
    this.modal.openModals?.map(modal => this.hide(modal));
  }

  find(id: string) {
    return id && this.modal.openModals.find(item => item.getConfig()?.nzComponentParams?.id === id);
  }

  close(modal: NzModalRef) {
    modal?.destroy();
  }

  closeAll() {
    this.modal.closeAll();
  }

  destroy(modal: NzModalRef) {
    modal?.destroy();
  }
}

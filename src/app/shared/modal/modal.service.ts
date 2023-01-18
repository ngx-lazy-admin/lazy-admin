import { Injectable, Renderer2, ViewContainerRef, RendererFactory2, TemplateRef, ViewChild } from '@angular/core';
import { ModalOptions, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { randomString } from 'src/app/utils';
import { appendClassName, removeClassName } from 'src/app/utils/class-name';
import { ModalTemplateComponent } from './template/template.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  @ViewChild(ModalTemplateComponent) private modalTemplate!: ModalTemplateComponent;

  viewContainerRef!: ViewContainerRef;

  modalIndex: number = 800;

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
  create(Template: TemplateRef<any> | string, params?: any) {
    // 设置

    let templateRef = Template

    if (Template instanceof String) {
      console.log(Template)
      templateRef = this.modalTemplate.getTemplateRef(<string>Template);
    }

    if (params.id) {
      const modal = this.find(params.id);
      if (modal) {
        modal.destroy();
        return;
      }
    }

    const id = params.id || randomString(32);

    const config: ModalOptions = {
      id: id,
      nzContent: templateRef,
      nzTitle: null,
      nzMask: true,
      nzViewContainerRef: this.viewContainerRef,
      nzBodyStyle: {
        padding: 0
      },
      nzStyle: {
        left: this.modal.openModals.length * 20 + 'px',
        top: this.modal.openModals.length * 20 + 100 + 'px'
      },
      nzClosable: false,
      ...params,
      nzComponentParams: {
        id: id,
        ...params?.nzComponentParams
      }
    }

    const modal = this.modal.create(config);

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

    this.listenModal(modal, config);
  }

  private listenModal(modal: NzModalRef, config: ModalOptions) {
    // 监听弹窗点击
    this.renderer.listen(modal.containerInstance.modalElementRef.nativeElement, 'mousedown', event => {
      if (!config.nzMask) {
        // 所有弹窗层级减一
        this.modal.openModals.forEach(modal => {
          const zIndex = modal.containerInstance.config.nzZIndex || this.modalIndex;
          modal.containerInstance.config.nzZIndex = zIndex > this.modalIndex ? zIndex - 1 : this.modalIndex;
        });

        // 当前弹窗层级设置最大
        modal.containerInstance.config.nzZIndex = this.modalIndex + this.modal.openModals.length;
      }
    });

    // 如果有遮罩层, 则不穿透
    if (!config.nzMask) {
      // 添加样式穿透　1.　弹窗添加样式穿透之后无法滚动　　2.　弹窗取消穿透, 弹窗无法隐藏
      modal?.getElement().parentElement?.parentElement?.classList.add('pointer-events-none');
    }
    
    // const element = modal.getElement().querySelector('.ant-modal-content')

    // 修改弹窗层级
    setTimeout(() => {
      if (!config.nzMask) {
        modal.containerInstance.config.nzZIndex = this.modalIndex + this.modal.openModals.length;
      }
    }, 0);
  }

  // 显示弹窗
  show(modal: NzModalRef) {
    modal.updateConfig({ nzWrapClassName: removeClassName(modal.getConfig().nzWrapClassName, 'd-none') });
    this.change$.next(3);
  }

  // 显示全部弹窗
  showAll() {
    this.modal.openModals?.map(modal => this.show(modal));
  }

  // 隐藏弹窗
  hide(modal: NzModalRef) {
    modal.updateConfig({ nzWrapClassName: appendClassName(modal.getConfig().nzWrapClassName, 'd-none') });
    this.change$.next(4);
  }

  // 隐藏全部弹窗
  hideAll() {
    this.modal.openModals?.map(modal => this.hide(modal));
  }

  find(id: string) {
    return id && this.modal.openModals.find(item => item.getConfig()?.nzComponentParams?.id === id);
  }

  // 关闭弹窗
  close(modal: NzModalRef) {
    modal?.destroy();
  }

  // 关闭全部弹窗
  closeAll() {
    this.modal.closeAll();
  }

  // 销毁
  destroy(modal: NzModalRef) {
    modal?.destroy();
  }
}

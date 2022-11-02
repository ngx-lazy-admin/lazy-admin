import { Inject, Injectable, Renderer2, ViewContainerRef, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { PreviewContent } from './preview-content.component';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  viewContainerRef!: ViewContainerRef;

  userSettingsPortal: any;

  currentIndex: number = 500;

  private renderer: Renderer2;

  private _hideAllStatus: boolean = false;

  constructor(
    private modal: NzModalService,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  // 创建弹窗
  open(params: any): NzModalRef {
    // $event && $event.stopPropagation();
    const id = this.randomString(32);
    this._hideAllStatus = false;
    const modal = this.modal.create({
      nzContent: PreviewContent,
      nzWidth: 1200,
      nzViewContainerRef: this.viewContainerRef,
      nzZIndex: this.currentIndex,
      nzStyle: {
        left: this.modal.openModals.length * 20 + 'px',
        top: this.modal.openModals.length * 20 + 100 + 'px'
      },
      nzFooter: null,
      nzComponentParams: {
        id: id,
        fields: params.fields,
        model: params.model,
        title: params.title,
        modal: this.modal,
        click: (type: string, id: string) => {
          if (type == 'close') {
            this.close(id);
          } else if (type == 'min') {
            this.hide(id);
          }
        }
      },
      nzClosable: false,
      ...params
    });

    // 监听弹窗打开
    modal.afterOpen.subscribe(() => {
      console.log('[afterOpen] emitted!');
    });

    // 监听弹窗关闭
    modal.afterClose.subscribe(result => {
      console.log('[afterClose] The result is:', result);
    });

    // 监听弹窗点击
    this.renderer.listen(modal.containerInstance.modalElementRef.nativeElement, 'click', event => {
      if ((modal.containerInstance.config.nzZIndex || 0) < this.currentIndex) {
        modal.containerInstance.config.nzZIndex = ++this.currentIndex;
      }
      modal.containerInstance.config.nzZIndex = ++this.currentIndex;
    });

    // 添加样式穿透
    if (modal) {
      const element = modal.getElement().parentElement?.parentElement;
      element?.classList.add('pointer-events-none');
    }

    return modal;
  }

  // 预览图片
  img() {}

  // 预览视频

  // 预览音频

  close(id: string) {
    const modal = this.modal.openModals.find(item => item.componentInstance?.id === id);
    if (modal) {
      modal.destroy();
    }
  }

  // 显示所有弹窗
  hide(id: string) {
    const modal = this.modal.openModals.find(item => item.componentInstance?.id === id);

    if (modal) {
      const element = modal.getElement().parentElement?.parentElement;
      element?.classList.add('pointer-events-none');
    }
  }

  // 显示所有弹窗
  show($event: any) {
    $event.stopPropagation();
    this._hideAllStatus = false;
    this.modal.openModals.map(modal => {
      this.showModal(modal);
    });
  }

  // 关闭所有弹窗
  closeAll() {
    this.modal.closeAll();
  }

  // 隐藏所有弹窗
  hideAll() {
    if (!this._hideAllStatus) {
      this._hideAllStatus = true;
      this.modal.openModals.map(modal => {
        this.hideModal(modal);
      });
      this.currentIndex = 1001;
    }
  }

  // 显示弹窗
  showModal(modal: NzModalRef) {
    const config = modal.getConfig();
    let className = config.nzWrapClassName?.split(' ');

    if (className?.find(name => name === 'd-none')) {
      className = className?.filter(item => item !== 'd-none');
    }

    modal.updateConfig({
      ...config,
      nzWrapClassName: className?.join(' ')
    });
  }

  // 隐藏弹窗
  hideModal(modal: NzModalRef) {
    const config = modal.getConfig();
    let className = config.nzWrapClassName?.split(' ');
    if (!className?.find(name => name === 'd-none')) {
      className?.push('d-none');
    }
    modal.updateConfig({
      ...config,
      nzZIndex: 1000,
      nzWrapClassName: className?.join(' ')
    });
  }

  randomString(e: number) {
    e = e || 32;
    var t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
      a = t.length,
      n = '';
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n;
  }
}

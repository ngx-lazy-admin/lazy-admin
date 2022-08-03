import { Injectable, Renderer2, ViewContainerRef, RendererFactory2 } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FieldService } from 'src/app/services/api/field';
import { CacheService } from 'src/app/services/router/cache.service';
import { randomString } from 'src/app/utils';
import { FormModal } from './form-modal/form-modal.component';
import { Observable } from 'rxjs';
import { SearchModal } from './search-modal/search-modal.component';
import { DispatchService } from './dispatch.service';

type modalType = 'search' | 'form'

const modals = {
  'search': SearchModal,
  'form': FormModal
}

@Injectable({
  providedIn: 'root'
})
export class ModalService   {
  viewContainerRef!: ViewContainerRef

  userSettingsPortal: any

  currentIndex: number = 1000

  private renderer: Renderer2;

  private _hideAllStatus: boolean = false;

  constructor(
    private modal: NzModalService,
    private rendererFactory: RendererFactory2,
    private fieldService: FieldService,
    private cache: CacheService,
    private dispatch: DispatchService,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // 监听调度器
    this.dispatch.modal$.subscribe(item => {
      this.open(item.type, item.params, item.componentParams).subscribe()
    })
  }

  open (type: modalType, params?: any, componentParams?: any) {
    return new Observable ((observed) => {
      this._hideAllStatus = false;
      const modal = this.modal.create({
        nzContent: modals[type],
        nzViewContainerRef: this.viewContainerRef,
        nzZIndex: this.currentIndex,
        nzMask: false,
        nzStyle: {
          left: ((this.modal.openModals.length) * 20) + 'px',
          top: ((this.modal.openModals.length) * 20 + 100) + 'px',
        },
        nzComponentParams: {
          ...componentParams
        },
        nzClosable: false,
        ...params
      });
  
      // 监听弹窗打开
      modal.afterOpen.subscribe((result) => {
        console.log('[afterOpen] emitted!', result)
        if (params.afterOpen) {
          params.afterOpen(modal)
        }
      });
  
      // 监听弹窗关闭
      modal.afterClose.subscribe(result => {
        console.log('[afterClose] The result is:', result)
        observed.next(result)
        if (params.afterClose) {
          params.afterClose(modal)
        }
      });
  
      // 监听弹窗点击
      this.renderer.listen( modal.containerInstance.modalElementRef.nativeElement,'click',(event) => {
        if ((modal.containerInstance.config.nzZIndex || 0) < this.currentIndex) {
          modal.containerInstance.config.nzZIndex = ++this.currentIndex;
        }
        modal.containerInstance.config.nzZIndex = ++this.currentIndex;
      })
  
      // 添加样式穿透
      if (modal) {
        const element = modal.getElement().parentElement?.parentElement
        element?.classList.add('pointer-events-none')
      }
    })
  }

  // 
  close (id: string) {
    const modal = this.modal.openModals.find(item => item.componentInstance?.id === id)
    modal?.destroy()
  }


  hide (id: string) {
    const modal = this.modal.openModals.find(item => item.componentInstance?.id === id)
    modal?.getElement().parentElement?.parentElement?.classList.add('pointer-events-none')
  }

  // 显示所有弹窗
  show ($event: any) {
    $event.stopPropagation();
    this._hideAllStatus = false;
    this.modal.openModals.map(modal => {
      this.showModal(modal)
    })
  }

  // 关闭所有弹窗
  closeAll () {
    this.modal.closeAll()
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

  // 显示弹窗
  showModal (modal: NzModalRef) {
    const config = modal.getConfig()
    let className = config.nzWrapClassName?.split(" ")

    if (className?.find(name => name === 'd-none')) {
      className = className?.filter(item => item !== 'd-none')
    }

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

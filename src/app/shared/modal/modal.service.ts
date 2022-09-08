import { Injectable, Renderer2, ViewContainerRef, RendererFactory2 } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FieldService } from 'src/app/services/api/field';
import { CacheService } from 'src/app/services/router/cache.service';
import { randomString } from 'src/app/utils';
import { FormModal } from './form-modal/form-modal.component';
import { Observable } from 'rxjs';
import { SearchModal } from './search-modal/search-modal.component';
import { DispatchService } from './dispatch.service';
import { BlankModal } from './blank-modal/blank-modal.component';

type modalType = 'search' | 'form' | 'blank'

const modals = {
  'search': SearchModal,
  'form': FormModal,
  'blank': BlankModal
}

// append class
const addClassName = (className: string = '', str: string): string => {
  return  className.split(' ')?.filter(item => item === 'd-none')?.join(' ') + ' ' + str
} 

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  viewContainerRef!: ViewContainerRef

  userSettingsPortal: any

  currentIndex: number = 1000

  modalIndex: number = 1000

  private renderer: Renderer2;

  constructor(
    private modal: NzModalService,
    private rendererFactory: RendererFactory2,
    private dispatch: DispatchService,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // 监听调度器
    this.dispatch.modal$.subscribe(item => {
      
      const modal = this.find(item?.id)
      if (item.operation === 'open') {
        this.open(item.type, item.params, item.componentParams).subscribe()
      } else if (modal){
        if (item.operation === 'close') {
          this.close(modal as NzModalRef<any>)
        }
        
        if (item.operation === 'hide') {
          this.hide(modal as NzModalRef<any>)
        } 
      } else {
        if (item.operation === 'hideAll') {
          this.hideAll()
        }

        if (item.operation === 'showAll') {
          this.showAll()
        }
      }
    })
  }

  open (type: modalType, params?: any, componentParams?: any) {
    return new Observable ((observed) => {
      const id = randomString(32)
      const modal = this.modal.create({
        id: id,
        nzContent: modals[type],
        nzFooter: null,
        nzViewContainerRef: this.viewContainerRef,
        nzMask: false,
        nzBodyStyle: {
          padding: 0
        },
        nzStyle: {
          left: ((this.modal.openModals.length) * 20) + 'px',
          top: ((this.modal.openModals.length) * 20 + 100) + 'px',
        },
        nzComponentParams: {
          id: id,
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
      this.renderer.listen( modal.containerInstance.modalElementRef.nativeElement, 'mousedown', (event) => {

        // 所有弹窗层级减一
        this.modal.openModals.forEach(modal => {
          const zIndex = modal.containerInstance.config.nzZIndex || this.modalIndex
          modal.containerInstance.config.nzZIndex = zIndex > this.modalIndex ? zIndex - 1 : this.modalIndex
        })

        // 当前弹窗层级设置最大
        modal.containerInstance.config.nzZIndex = this.modalIndex + this.modal.openModals.length;
      })
  
      // 添加样式穿透
      if (modal) {
        const element = modal.getElement().parentElement?.parentElement
        element?.classList.add('pointer-events-none')
      }

      setTimeout(() => {
        modal.containerInstance.config.nzZIndex = this.modalIndex + this.modal.openModals.length;
      }, 0)

    })
  }

  close (modal: NzModalRef) {
    modal?.destroy()
  }

  show (modal: NzModalRef) {
    const config = modal.getConfig()
    const className = config.nzWrapClassName
      ?.split(' ')
      ?.filter(item => item !== 'd-none')
      ?.join(' ')

    if (className === config.nzWrapClassName) {
      return
    }

    modal.updateConfig({
      ...config,
      nzWrapClassName: className
    })
  }

  hide (modal: NzModalRef) {
    const config = modal.getConfig()
    const className = config.nzWrapClassName
      ?.split(' ')
      ?.filter(item => item === 'd-none')
      ?.join(' ')

    modal.updateConfig({
      ...config,
      nzClassName: 'className',
      nzWrapClassName: className + ' d-none'
    })
  }

  showAll () {
    console.log('showAll')
    this.modal.openModals?.map(modal => {
      this.show(modal)
    })
  }

  closeAll () {
    this.modal.closeAll()
  }

  hideAll () {
    this.modal.openModals?.forEach(modal => {
      const config = modal.getConfig()
      console.log(addClassName(config.nzWrapClassName, ' d-none'))
      modal.updateConfig({
        nzWrapClassName: addClassName(config.nzWrapClassName, ' d-none') 
      })
    })
  }

  find (id: string) {
    return id && this.modal.openModals.find(item => item.componentInstance?.id === id)
  }
}

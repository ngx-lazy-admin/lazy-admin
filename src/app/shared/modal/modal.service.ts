import { Injectable, Renderer2, ViewContainerRef, RendererFactory2, TemplateRef, ViewChild, Injector } from '@angular/core';
import { ModalOptions, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { randomString } from 'src/app/utils';
import { FormModal } from './form-modal/form-modal.component';
import { SearchModal } from './search-modal/search-modal.component';
import { DispatchService, UsefulService, NeedsService } from './dispatch.service';
import { BlankModal } from './blank-modal/blank-modal.component';


type modalType = 'search' | 'form' | 'blank'

const modals = {
  'search': SearchModal,
  'form': FormModal,
  'blank': BlankModal
}

// append class
const appendClassName = (className: string = '', str: string): string => {
  return className ? removeClassName(className, str) + ' ' + str : str
} 

const removeClassName = (className: string = '', str: string): string => {
  return className.split(' ')?.filter(item => item != str)?.join(' ')
} 

// const addClassName = (element: Element, className: string) => {
//   element.classList.add(className);
// }

// const removeClassName = (element: Element, className: string) => {
//   element.classList.remove(className);
// }


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  viewContainerRef!: ViewContainerRef

  userSettingsPortal: any

  currentIndex: number = 1000

  modalIndex: number = 1000

  private renderer: Renderer2;

  @ViewChild(BlankModal) blank!: BlankModal;

  constructor(
    private modal: NzModalService,
    private rendererFactory: RendererFactory2,
    private dispatch: DispatchService,
    private injector: Injector,
    private needsService: NeedsService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // 监听调度器
    this.dispatch.modal$.subscribe(item => {
      
      const modal = this.find(item?.id)
      if (item.operation === 'open') {
        this.open(item.type, item.params, item.componentParams)
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

  // 打开弹窗
  open (type: modalType, params?: any, componentParams?: any) {
    // 组件实例化
    // this.attachModalContainer(params)
    // 获取template
    
    const id = randomString(32)

    let  modal: NzModalRef | null = null
    modal = this.modal.create({
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
        close: () => {
          modal?.destroy()
        },
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
      console.log(this.needsService.getTemplate())
    });

    // 监听弹窗关闭
    modal.afterClose.subscribe(result => {
      console.log('[afterClose] The result is:', result)
      if (params.afterClose) {
        params.afterClose(modal)
      }
    });

    this.listenModal(modal)
  }

  // 创建弹窗
  create (templateRef: TemplateRef<any>, params?: any, componentParams?: any) {
    // console.log(this.attachModalContainer(params))
    const id = randomString(32)
    const modal = this.modal.create({
      id: id,
      nzContent: templateRef,
      nzTitle: '1111',
      nzMask: false,
      nzViewContainerRef: this.viewContainerRef,
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

    // console.log(this.ne)

    // 监听弹窗打开
    modal.afterOpen.subscribe((result) => {
      console.log('[afterOpen] emitted!', result)
      console.log(this.needsService.getTemplate())
      if (params?.afterOpen) {
        params.afterOpen(modal)
      }
    });

    // 监听弹窗关闭
    modal.afterClose.subscribe(result => {
      console.log('[afterClose] The result is:', result)
      if (params?.afterClose) {
        params.afterClose(modal)
      }
    });

    this.listenModal(modal)
  }


  private listenModal (modal: NzModalRef) {
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
    modal?.getElement().parentElement?.parentElement?.classList.add('pointer-events-none')

    // 修改弹窗层级
    setTimeout(() => {
      modal.containerInstance.config.nzZIndex = this.modalIndex + this.modal.openModals.length;
    }, 0)
  }

  // 显示弹窗
  private show (modal: NzModalRef) {
    modal.updateConfig({nzWrapClassName: removeClassName(modal.getConfig().nzWrapClassName, 'd-none')})
  }

  // 隐藏弹窗
  private hide (modal: NzModalRef) {
    modal.updateConfig({nzWrapClassName: appendClassName(modal.getConfig().nzWrapClassName, 'd-none')})
  }

  // 显示全部弹窗
  private showAll () {
    this.modal.openModals?.forEach(modal => {
      modal.updateConfig({nzWrapClassName: removeClassName(modal.getConfig().nzWrapClassName, 'd-none')})
    })
  }

  // 隐藏所有弹窗
  private hideAll () {
    this.modal.openModals?.forEach(modal => {
      modal.updateConfig({nzWrapClassName: appendClassName(modal.getConfig().nzWrapClassName, ' d-none') })
    })
  }

  // 查找弹窗
  private find (id: string) {
    return id && this.modal.openModals.find(item => item.componentInstance?.id === id)
  }

  // 销毁弹窗
  private close (modal: NzModalRef) {
    modal?.destroy()
  }

  // 销毁所有弹窗
  private closeAll () {
    this.modal.closeAll()
  }

  // const injector = Injector.create({
  //   providers:
  //     [{ provide: NeedsService, deps: [UsefulService] }, { provide: UsefulService, deps: [] }]
  // });
  // console.log(' true or false?' , injector.get(NeedsService).service instanceof UsefulService);

  private attachModalContainer(config: ModalOptions): ComponentPortal<BasePortalOutlet> {
    const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
    
    const injector = Injector.create({
      parent: userInjector || this.injector,
      providers: [
        { provide: ModalOptions, useValue: config },
        { provide: NeedsService, deps: [UsefulService] },
        { provide: UsefulService, deps: [] }
      ]
    });

    const containerPortal = new ComponentPortal<any>(
      BlankModal,
      config.nzViewContainerRef,
      injector,
    );

    return containerPortal;
  }

  private createInjector<T, R>(modalRef: NzModalRef<T, R>, config: ModalOptions<T>): Injector {
    const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;

    return Injector.create({
      parent: userInjector || this.injector,
      providers: [{ provide: NzModalRef, useValue: modalRef }]
    });
  }
}


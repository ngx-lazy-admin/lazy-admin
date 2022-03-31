
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  tplModalButtonLoading = false;
  disabled = false;

  tplModal:any = null;
  distance = {x: 0, y: 0}

  currentIndex: number = 1001;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private modalService: ModalService
  ) {

  }

  model = {
    email: 'email@gmail.com'
  }

  fields = [
    {
      key: 'email',
      type: 'nz-input',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ]

  open(title: any, $event: any) {
    // this.modals.createComponentModal(this.fields, this.model)
    // console.log(title)

   const modal = this.modalService.create({
      nzWidth: '900px',
      nzWrapClassName: 'dragModal',
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      fields: this.fields,
      model: this.model,
      nzMask: false,
      nzFooter: [
        {
          label: '取消1',
          onClick: () => modal.destroy()
        },
        {
          label: '确定',
          type: 'primary',
          onClick: ($event: any) => {
            return new Promise(resolve => setTimeout(() => {
              console.log($event)
              modal.containerInstance.config.nzZIndex = this.currentIndex++;
              // modal.destroy()
            }, 60));
          }
        }
      ]
    }, $event)

    // 容器实例添加监听事件, 如果z-index < max, 另 max + 1 , 并赋值给 z-index
    // 关闭弹窗, 则最大值减一

    modal.containerInstance.containerClick.subscribe(item => {
      console.log('containerClick')
    })

    this.renderer.listen( modal.containerInstance.modalElementRef.nativeElement,'click',(event) => {
      if ((modal.containerInstance.config.nzZIndex || 0) < this.currentIndex) {
        modal.containerInstance.config.nzZIndex = ++this.currentIndex;
      }
    })

    modal.containerInstance.containerClick.subscribe(res => {

    })
  }

  close () {
    this.modalService.closeAll()
  }

  show ($event: any) {
    this.modalService.show($event)
  }
}

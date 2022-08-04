
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalService } from 'src/app/shared/modal';
import { DispatchService } from 'src/app/shared/modal/dispatch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  constructor(
    private renderer: Renderer2,
    private modalService: ModalService,
    private dispatch: DispatchService
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

  create($event: any) {
  //  const modal = this.modalService.create({
  //     nzWidth: '900px',
  //     nzWrapClassName: 'dragModal',
  //     nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
  //     fields: this.fields,
  //     model: this.model,
  //     nzMask: false,
  //     nzFooter: [
  //       {
  //         label: '取消1',
  //         onClick: () => modal.destroy()
  //       },
  //       {
  //         label: '确定',
  //         type: 'primary',
  //         onClick: ($event: any) => {
  //           return new Promise(resolve => setTimeout(() => {
  //             console.log($event)
  //             modal.destroy()
  //           }, 2000));
  //         }
  //       }
  //     ]
  //   }, $event)
  }

  close ($event: any) {
    this.modalService.closeAll()
  }

  open ($event: any) {
    this.modalService.show($event)
  }

  search ($event: any) {
    this.modalService.open('search')
  }

  form ($event: any) {
    const params = {
      fields: this.fields,
      model: this.model,
    }
    this.modalService.open('form', params)
  }

  dispatchSearch ($event: any) {
    // 需求一个回调, 时间
    let params = {
      afterClose: () => {
        console.log('弹窗关闭了')
      }
    }
    let componentParams = null 
    this.dispatch.open('search', params, componentParams)
  }

  dispatchForm ($event: any) {
    this.dispatch.open('form')
  }

  blank ($event: any) {
    this.dispatch.open('blank')
  }

  modalId: string = ''

  openBlank ($event: any) {
    let params = {
      afterOpen: (modal: any) => {
        console.log('弹窗打开了')
        console.log(modal)
        this.modalId = modal.componentInstance.id
      }
    }
    this.dispatch.open('blank', params)
  }

  closeBlank ($event: any) {
    this.dispatch.close(this.modalId)
  }

  hideBlank ($event: any) {
    this.dispatch.hide(this.modalId)
  }

  showBlank ($event: any) {
    this.dispatch.open('blank')
  }

  hideAllBlank ($event: any) {
    this.dispatch.hideAll()
  }

  showAllBlank ($event: any) {
    this.dispatch.showAll()
  }
}

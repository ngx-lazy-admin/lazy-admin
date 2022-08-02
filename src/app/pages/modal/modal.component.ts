
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalService } from 'src/app/shared/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  constructor(
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

  create($event: any) {
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
              modal.destroy()
            }, 2000));
          }
        }
      ]
    }, $event)
  }

  close ($event: any) {
    this.modalService.closeAll()
  }

  open ($event: any) {
    this.modalService.show($event)
  }
}


import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalService } from '../../modules/modal';

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

  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private modals: ModalService
  ) {
    // hotkeys('f5', (event, handler) => {
    //   // Prevent the default refresh event under WINDOWS system
    //   event.preventDefault() 
    //   alert('you pressed F5!') 
    // });
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

  open() {
    // this.modals.createComponentModal(this.fields, this.model)



   const modal = this.modals.ceateForm({
      nzTitle: '111',
      nzWidth: '900px',
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      field: this.fields,
      model: this.model,
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
            }, 60));
          }
        }
      ]
    })
  }
}

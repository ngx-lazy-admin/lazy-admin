
/* declarations: NzModalCustomComponent */
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, Optional   } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import hotkeys from 'hotkeys-js';

import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  tplModalButtonLoading = false;
  disabled = false;

  tplModal:any = null;
  distance = {x: 0, y: 0}

  form = new FormGroup({});

  constructor(

    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    @Optional()
    private modalService: ModalService
  ) {
    this.modalService.viewContainerRef = viewContainerRef
    // hotkeys('f5', (event, handler) => {
    //   // Prevent the default refresh event under WINDOWS system
    //   event.preventDefault() 
    //   alert('you pressed F5!') 
    // });
  }

  model = {
    email: 'email@gmail.com', 
    checkbox: ['222'], 
    checkboxGroup: [{
      label: '苹果',
      value: '1'
    },
    {
      label: '香蕉',
      value: '2'
    }]
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
    },
    {
      key: 'checkbox-group',
      type: 'nz-checkbox-group',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        text: '哈哈哈',
        change: (field: FormlyFieldConfig, $event: Event) => {
          // console.log(field, $event)
          // console.log(this)
        }
      }
    },
    {
      key: 'checkbox',
      type: 'nz-checkbox-wrapper',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        text: '哈哈哈',
        nzOptions: [
          {
            label: '苹果',
            value: '222',
            checked: false,
            disabled: true
          },
          {
            label: '香蕉',
            value: '233',
            checked: false
          },
        ],
        change: (field: FormlyFieldConfig, $event: Event) => {
          // console.log(field, $event)
          // console.log(this)
          field.templateOptions?.nzOptions.push([{
            label: '香蕉',
            value: '233',
            checked: false
          }])
        }
      }
    }
  ]

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMask: false,
      nzMaskClosable: true,
      nzClassName: 'dragModal',
      nzClosable: true,
      nzViewContainerRef: this.viewContainerRef,
      // nzComponentParams: {
      //   value: 'Template Context'
      // },
      nzOnOk: () => {
        // console.log(this.model)
      },
      nzOnCancel: ($event: Event) => {
        return true
      }
    });
  }

  createComponentModal(): void {
    this.modalService.createComponentModal()
    // const modal = this.modal.create({
    //   nzTitle: 'Modal Title',
    //   nzContent: NzModalCustomComponent,
    //   nzViewContainerRef: this.viewContainerRef,
    //   nzComponentParams: {
    //     title: 'title in component',
    //     subtitle: 'component sub title，will be changed after 2 sec'
    //   },
    //   nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    //   nzFooter: [
    //     {
    //       label: 'change component title from outside',
    //       onClick: componentInstance => {
    //         componentInstance!.title = 'title in inner component is changed';
    //       }
    //     }
    //   ]
    // });
    // const instance = modal.getContentComponent();
    // modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // // Return a result when closed
    // modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // // delay until modal instance created
    // setTimeout(() => {
    //   instance.subtitle = 'sub title is changed';
    // }, 2000);
  }

  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = false;
    modelRef.destroy();
  }
}

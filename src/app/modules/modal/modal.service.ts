import {
  Injectable,
  ViewChild,
  Inject,
  AfterViewInit, Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef  } from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal, DomPortalOutlet,  } from '@angular/cdk/portal';

import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import hotkeys from 'hotkeys-js';
import { ModalComponent } from './modal.component';
import { DOCUMENT,  } from '@angular/common';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzModalCustomComponent } from './modal-form.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService   {
  
  hero!: any;


  form = new FormGroup({});

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


  viewContainerRef!: ViewContainerRef

  constructor(
    private modal: NzModalService,

  ) {}

  // constructor(
  //   viewContainerRef:ViewContainerRef,
  //   service:MyService
  //   ){ service.vcRef = viewContainerRef; }

  fetchCachedHero(id: number) {
    // if (!this.hero) {
    //   this.hero = this.heroService.getHeroById(id);
    // }
    // return this.hero;
  }

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Modal Title1',
      nzWidth: 1200,
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        fields: this.fields,
        model: this.model
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: '取消',
          onClick: ($event) => {
            console.log('取消');
            return true;
          }
        },
        {
          label: '确定',
          type: 'primary',
          onClick: ($event: Partial<NzModalCustomComponent>) => {
            console.log('确定')
            modal.close();
            return true;
          }
        }
      ]
    });

    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => {
      console.log('[afterOpen] emitted!')
    });

    modal.afterClose.subscribe(result =>  {
      console.log('[afterClose] The result is:', result)
    });

    // delay until modal instance created
    setTimeout(() => {
      console.log(instance)
    }, 2000);
  }
}



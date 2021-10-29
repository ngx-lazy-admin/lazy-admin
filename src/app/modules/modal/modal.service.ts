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
  
  // tplModalButtonLoading = false;
  // disabled = false;

  // tplModal:any = null;
  // distance = {x: 0, y: 0}

  // componentPortal: ComponentPortal<ComponentPortalExample> = new ComponentPortal(ComponentPortalExample);
  // private _document = DOCUMENT;
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
      nzContent: NzModalCustomComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        fields: this.fields,
        model: this.model
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            // componentInstance!.title = 'title in inner component is changed';
            console.log(componentInstance)
          }
        }
      ]
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      console.log(instance)
    }, 2000);
  }


  

  ceateModal () {
    // let container = this._document.createElement('div');
    // container.classList.add('component-portal');
    // container = this._document.body.appendChild(container);
    // let container = this.element.nativeElement.createElement('div');
    // container.classList.add('component-portal');
    // container = this.element.nativeElement.body.appendChild(container);
  }
}

// @Component({
//   selector: 'nz-modal-custom-component',
//   template: `
//     <div>
//       <h2>{{ title }}</h2>
//       <h4>{{ subtitle }}</h4>
//       <p>
//         <span>Get Modal instance in component</span>
//         <button  (click)="destroyModal()">destroy 1modal in the component</button>
//       </p>
//     </div>
//   `
// })
// export class NzModalHeaderComponent {
//   @Input() title?: string;
//   @Input() subtitle?: string;

//   constructor(private modal: NzModalRef) {}

//   destroyModal(): void {
//     this.modal.destroy({ data: 'this the result data' });
//   }
// }

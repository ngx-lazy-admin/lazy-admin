import { FormlyFieldConfig } from "@ngx-formly/core";
import { Injectable, Injector } from "@angular/core";
import { FieldService } from './field.services';


@Injectable({
  providedIn: 'root'
})
export class FieldMockService { 
  constructor(
    private injector: Injector
  ) {
  }

  get fieldService () {
    return this.injector.get(FieldService)
  }
  
  field: FormlyFieldConfig[] =  [
    {
      type: 'steps',
      key: 'name',
      className: "w-50 d-block",
      wrappers: ['inline'],
      templateOptions: {
        label: "姓名",
        required: true,
        placeholder: '姓名',
        readonly: true,
        nzShowArrow: false,
        status: 'wait',
        configOptions: [
          {
            label: 'Finished',
            description: 'This is a description.',
            subtitle: 'nzSubtitle'
          },
          {
            label: 'In Progress',
            description: 'This is a description.'
          },
          {
            label: 'Waiting',
            description: 'This is a description.'
          },
        ]
      }
    },
    {
      type: 'button',
      templateOptions: {
        text: '下一步',
        click: (field: any, _this: any) => {
          console.log(field)
          console.log(_this.message.error('hello world'))
        }
      }
    },
    {
      type: 'button',
      templateOptions: {
        text: '上一步',
        click: (field: any, _this: any) => {
          console.log(field)
          console.log(_this.message.error('hello world'))
          _this.http.get('api/user')
            .subscribe((item: any) => {
              console.log(item)
            });
          
        }
      }
    }
  ]
}

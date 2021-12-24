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
  
  _field =  ` [
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
        click: (field, $event) => {
          console.log(this)
          field.form?.root.get('name')?.patchValue(field.form?.root.get('name')?.value + 1)
          // this.cd.detectChanges();
          this.fieldService.save(field.form?.root.value)
          // HttpClient.
        }
      }
    },
    {
      type: 'button',
      templateOptions: {
        text: '上一步',
        click: (field, $event) => {
          console.log(field)
          field.form?.root.get('name')?.patchValue(field.form?.root.get('name')?.value - 1)
          // this.cd.detectChanges(); 
        }
      }
    }
  ]`

  field = [
    {
      field: this._field,
      model: null
    }
  ]  
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(item => {
      // console.log(item)
    })
  }

  form = new FormGroup({});
  model = {
    data: [
      { month: '一月', temperature: 5, city: '北京' },
      { month: '二月', temperature: 10, city: '北京' },
      { month: '一月', temperature: 8, city: '南京' },
      { month: '二月', temperature: 14, city: '南京' }
    ]
 }

  fields: FormlyFieldConfig[] = [
    {
      key: 'data',
      type: 'g2',
      className: 'w-100 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      type: 'nz-button',
      templateOptions: {
        text: '修改数据',
        click: (fields, event) => {
          const temperature = Math.random() * 10;
          fields.form?.get('data')?.patchValue([...fields.form?.get('data')?.value,  { month: '二月', temperature: temperature, city: '赣州' }])
        }
      }
    }
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }
}

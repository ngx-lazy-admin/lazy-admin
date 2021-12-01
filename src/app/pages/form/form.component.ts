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
    tag: [
      {
        label: '背景',
        checked: true
      }
    ],
    data: [
      { month: '一月', temperature: 5, city: '北京' },
      { month: '二月', temperature: 10, city: '北京' },
      { month: '一月', temperature: 8, city: '南京' },
      { month: '二月', temperature: 14, city: '南京' }
    ]
 }

  fields: FormlyFieldConfig[] = [
    {
      key: 'tag',
      type: 'nz-tag-group',
      className: 'm-5',
      templateOptions: {
        label: 'Categories',
        text: 'tags'
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

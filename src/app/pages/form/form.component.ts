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
      console.log(item)
    })
  }

  form = new FormGroup({});
  model = { email: 'email@gmail.com', checkbox: ['222'] };
  fields: FormlyFieldConfig[] = [
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
      key: 'checkbox',
      type: 'nz-checkbox-wrapper',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        text: '哈哈哈',
        options: [
          {
            label: '苹果',
            value: '222',
            checked: false
          },
          {
            label: '香蕉',
            value: '233',
            checked: false
          },
        ],
        change: (field, $event) => {
          // console.log(field, $event)
          // console.log(this)
        }
      }
    }
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(model);
  }
}

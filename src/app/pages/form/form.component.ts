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
  model = { email: 'email@gmail.com' };
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
      key: 'autocomplete',
      type: 'nz-autocomplete',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        compareWith: (o1: any, o2: any) => {
          return o1 == o2.value
        },
        nzDataSource: [
          {
            label: '233',
            value: '2332',
            disabled: true,
          },
          {
            label: '111',
            value: '1111',
            disabled: false,
          },
          {
            label: '333',
            value: '3333',
          },
        ]
      }
    },
    {
      type: 'nz-button',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        text: '确定',
        click: (field, $event) => {
          console.log(field, $event)
        }
      }
    }
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(model);
  }
}

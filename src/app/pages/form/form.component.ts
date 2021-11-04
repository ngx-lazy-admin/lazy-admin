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
  model = {rate: 1, email: 'email@gmail.com', checkbox: ['222'], 'checkbox-group': [{
    label: '苹果',
    value: '1'
  },
  {
    label: '香蕉',
    value: '2'
  }]};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'nz-input',
      className: 'w-100 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'date',
      type: 'nz-date-picker',
      className: 'w-100 mb-2 d-inline-block',
      templateOptions: {
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
      }
    },
    {
      key: 'radio',
      type: 'nz-radio',
      className: 'w-100 mb-2 d-inline-block',
      templateOptions: {
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
        text: '这是文案'
      }
    },
    {
      key: 'rate ',
      type: 'nz-rate',
      className: 'w-100 mb-2 d-inline-block',
      templateOptions: {
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
        text: '这是文案'
      }
    },
    {
      key: 'radio-group',
      type: 'nz-radio-group',
      className: 'w-100 mb-2 d-inline-block',
      templateOptions: {
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
        text: '这是文案',
        nzOptions: [
          {
            value: 'A',
            label: 'A'
          },
          {
            value: 'B',
            label: 'B'
          },
          {
            value: 'C',
            label: 'C'
          }
        ],
        change: (fields, $event) => {
          console.log($event)
        }
      }
    },
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(model);
  }
}

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
    rate: 1, 
    email: '', 
    checkbox: ['222'], 
    'checkbox-group': [{
    label: '苹果',
    value: '1'
  },
  {
    label: '香蕉',
    value: '2'
  }], 
  upload: [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'yyy.png',
      url: 'https://pic1.zhimg.com/v2-1a289c30879b143c920efb0fc1741cf9_xl.jpg',
      status: 'done'
    }
  ]};


  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'nz-input',
      className: 'w-100 mb-2 d-inline-block',
      wrappers: ['form'],
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
      key: 'upload',
      type: 'nz-upload',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Date',
        required: true,
        text: '上传',
        change: (fields, info) => {
          console.log(info)
        }
      }
    },
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }
}

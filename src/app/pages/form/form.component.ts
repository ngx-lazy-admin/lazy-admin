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
  ],
  slider: 100,
  sliderRange: [15, 20],
  dateTime: null
};


  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'nz-input',
      className: 'mb-2 d-inline-block',
      wrappers: ['form'],
      templateOptions: {
        nzLayout: 'inline',
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'dateTime',
      type: 'nz-time-picker',
      className: 'mb-2 d-inline-block',
      templateOptions: {
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
        nzFormat: 'HH:mm:ss'
      }
    },  
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }
}

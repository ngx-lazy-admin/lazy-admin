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
    quill: '<p>1111</p><p>1111</p><p>11111111</p><p>1111</p><p>111</p><p><br></p><h1>工作经验</h1><h3>  开始日期 – 结束日期</h3><h2>职务，<span style=\"color: windowtext;\">公司</span></h2><p>描述你的职责和在影响力和成果方面取得的成就。举例说明，但尽量保持简洁。</p><p>  </p><p><br></p>'
  }

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
      key: 'quill',
      type: 'quill',
      className: 'mb-2 w-50 d-inline-block',
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

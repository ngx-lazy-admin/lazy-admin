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
    email: '# 啊啊啊 \n\n啊啊啊~~~~', 
 }

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'tui',
      className: 'w-100 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      type: 'nz-button',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        text: '添加',
        placeholder: 'Enter email',
        required: true,
        click: (fields, model) => {
          let value =  fields.form?.root.get('email')?.value;
          fields.form?.root.get('email')?.patchValue(value + '哈哈哈哈哈哈哈')
          // console.log()
        }
      },
    },
    {
      type: 'nz-button',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        text: '清空',
        placeholder: 'Enter email',
        required: true,
        click: (fields, model) => {
          let value =  fields.form?.root.get('email')?.value;
          fields.form?.root.get('email')?.patchValue('')
          // console.log()
        }
      },
    }
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }
}

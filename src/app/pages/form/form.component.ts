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
    select: '1',
    UserName: 'Zhou Maomao', 
    Telephone: '18100000000', 
    Live: 'Hangzhou, Zhejiang',
    Remark: 'Template <script>alert("0wned")</script> <b>Syntax</b>',
    Address: 'No. 18,  <script>console.log("0wned")</script> Wantang Road, Xihu District, <span class="text-primary">Hangzhou, Zhejiang, China</span>' 
  }

  fields: FormlyFieldConfig[] = [
    {
      type: 'nz-description',
      className: 'm-5',
      templateOptions: {
        nzLabel: 'Categories',
        nzColumn: { xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }
      },
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'UserName',
          templateOptions: {
            nzLabel: 'UserName',
            required: true,
          },
        },
        {
          type: 'text',
          key: 'Telephone',
          templateOptions: {
            nzLabel: 'Telephone',
          },
        },
        {
          type: 'text',
          key: 'Live',
          templateOptions: {
            nzLabel: 'Live',
          },
        },
        {
          type: 'text',
          key: 'Remark',
          templateOptions: {
            nzLabel: 'Remark',
          },
        },
        {
          type: 'text',
          key: 'Address',
          templateOptions: {
            nzLabel: 'Address',
          },
        },
      ],
    },
    {
      key: 'select',
      type: 'nz-select',
      className: 'd-block',
      templateOptions: {
        text: '按钮',
        nzOptions: [
          {
            label: '1111',
            value: '1'
          },
          {
            label: '2222',
            value: '2'
          }
        ],
        click: (field, $event) => {
          console.log(field.form?.get('Address')?.value)
          field.form?.get('Address')?.patchValue(field.form?.get('Address')?.value + 1)
        }
      }
    }
  ];


  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }
}

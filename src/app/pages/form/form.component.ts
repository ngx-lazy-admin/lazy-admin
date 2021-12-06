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
    data: {
      month: 1, 
      temperature: 5, 
      city1: 2 
    }, 
 }

  fields: FormlyFieldConfig[] = [
    {
      key: 'data',
      type: 'nz-description',
      className: 'm-5',
      templateOptions: {
        nzLabel: 'Categories',
        nzBordered: true,
        nzColumn: { xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }
      },
      fieldGroup: [
        {
          type: 'text',
          key: 'month',
          templateOptions: {
            nzLabel: 'month',
            required: true,
          },
        },
        {
          type: 'text',
          key: 'temperature',
          templateOptions: {
            nzLabel: 'temperature',
          },
        },
        {
          type: 'text',
          key: 'city',
          templateOptions: {
            nzLabel: 'city',
          },
        },
        {
          type: 'text',
          key: 'city1',
          templateOptions: {
            nzLabel: 'city1',
          },
        },
        
      ],
    },
    {
      type: 'nz-input',
      key: 'month1',
      templateOptions: {
        nzLabel: 'month1',
        required: true,
      },
    },

  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }
}

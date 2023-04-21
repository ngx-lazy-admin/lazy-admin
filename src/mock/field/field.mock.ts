import { FormlyFieldConfig } from '@ngx-formly/core';

export const field: FormlyFieldConfig[] = [
  {
    id: 'dashboard',
    type: 'steps',
    key: 'name',
    className: 'w-50 d-block',
    wrappers: ['inline'],
    props: {
      label: '姓名',
      required: true,
      placeholder: '姓名',
      readonly: true,
      nzShowArrow: false,
      status: 'wait',
      configOptions: [
        {
          label: 'Finished',
          description: 'This is a description.',
          subtitle: 'nzSubtitle'
        },
        {
          label: 'In Progress',
          description: 'This is a description.'
        },
        {
          label: 'Waiting',
          description: 'This is a description.'
        }
      ]
    }
  },
  {
    type: 'button',
    props: {
      text: '下一步',
      click: (field: FormlyFieldConfig, _this: any) => {
        console.log(field?.formControl?.value);
        console.log(_this.message.error('hello world'));
      }
    }
  },
  {
    type: 'button',
    props: {
      text: '上一步',
      click: (field: any, _this: any) => {
        _this.http.get('api/user').subscribe((item: any) => {
          console.log(item);
        });
      }
    }
  }
];

import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const VirtualTableMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '按钮类型',
      description: '按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。',
    },
    fieldGroup: [
      {
        key: 'data',
        type: 'virtual-table',
        className: "d-block mb-2",
        templateOptions: {
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              templateOptions: {
                label: 'name'
              }
            },
            {
              key: 'age',
              type: 'template',

              templateOptions: {
                label: 'age'
              }
            },
            {
              key: 'address',
              type: 'template',

              templateOptions: {
                label: 'address'
              }
            },
            {
              key: 'action',
              type: 'template',
              templateOptions: {
                label: 'action'
              }
            }
          ]
        }
      }
    ]
  }
]
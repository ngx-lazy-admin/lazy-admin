import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ColumnTableMockFields = [
  {
    type: 'code-card',
    className: 'd-block mb-3 col-12',
    props: {
      title: '按钮类型',
      description: '按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。'
    },
    fieldGroup: [
      {
        key: 'list',
        type: 'virtual-table',
        className: 'd-block mb-2',
        props: {},
        fieldArray: {
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              props: {
                label: 'name'
              }
            },
            {
              key: 'age',
              type: 'template',

              props: {
                label: 'age'
              }
            },
            {
              key: 'address',
              type: 'template',

              props: {
                label: 'address'
              }
            },
            {
              key: 'action',
              type: 'template',
              props: {
                label: 'action'
              }
            }
          ]
        }
      }
    ]
  }
];

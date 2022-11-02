import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ListMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-12',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '简单列表',
          description: `列表拥有大、中、小三种尺寸。

          通过设置 size 为 largesmall 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
          
          可通过设置 nzHeader 和 nzFooter，来自定义列表头部和尾部。`
        },
        fieldGroup: [
          {
            key: 'list-1-1-1',
            type: 'list',
            className: 'd-block',
            templateOptions: {
              text: 'Checkbox'
            },
            fieldArray: {
              className: 'd-block m-3',
              fieldGroup: [
                {
                  key: 'name',
                  type: 'text',
                  className: '',
                  templateOptions: {}
                },
                {
                  key: 'address',
                  type: 'text',
                  className: '',
                  templateOptions: {}
                }
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '栅格列表',
          description: '可以通过设置 nz-list 的 nzGrid 属性来实现栅格列表。'
        },
        fieldGroup: [
          {
            key: 'list-1-1-1',
            type: 'list',
            className: 'd-block row',
            templateOptions: {
              text: 'Checkbox'
            },
            fieldArray: {
              className: 'd-inline-block col-3',
              fieldGroup: [
                {
                  type: 'card',
                  className: 'd-block col-12',
                  templateOptions: {
                    title: 'Title',
                    content: 'Card content'
                  },
                  fieldGroup: [
                    {
                      key: 'address',
                      type: 'text'
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

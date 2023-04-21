import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const CollapseMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '折叠面板',
          description: '可以同时展开多个面板，这个例子默认展开了第一个。'
        },
        fieldGroup: [
          {
            key: 'collapse-1-1-1',
            type: 'collapse',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox',
              header: 'footers'
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'header',
                  type: 'text',
                  className: 'd-inline-block mx-2',
                  defaultValue: false,
                  props: {
                    text: 'Checkbox',
                    disabled: true
                  }
                },

                {
                  key: 'children',
                  fieldGroup: []
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '不可用',
          description: 'checkbox 不可用。'
        },
        fieldGroup: [
          {
            key: 'checkbox-2-1-1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            defaultValue: false,
            props: {
              text: 'Checkbox',
              disabled: true
            }
          },
          {
            key: 'checkbox-2-1-2',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            defaultValue: true,
            props: {
              text: 'Checkbox',
              disabled: true
            }
          }
        ]
      }
    ]
  }
];

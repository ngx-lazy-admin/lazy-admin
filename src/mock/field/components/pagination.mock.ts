import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const PaginationMockFields = [
  {
    type: 'group',
    className: "d-block mb-3 col-6",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的 checkbox',
        },
        fieldGroup: [
          {
            key: 'pagination',
            type: 'pagination',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: "d-block mb-3 col-6",
    templateOptions: {
      title: '基本',
      subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        fieldGroup: [

        ]
      }
    ]
  },
]
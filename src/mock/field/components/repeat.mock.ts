import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const RepeatMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-12',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '基本用法',
          description: '数字输入框'
        },
        fieldGroup: [
          {
            type: 'repeat',
            key: 'list',
            className: 'col-12 d-block',
            templateOptions: {},
            fieldArray: {
              fieldGroup: [
                {
                  key: 'name',
                  type: 'template',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '规则名称'
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

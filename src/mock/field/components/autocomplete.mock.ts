import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const AutocompleteMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '基本用法',
          description: '通过 nzDataSource 设置自动完成的数据源'
        },
        fieldGroup: [
          {
            key: 'autocomplete-1-1-1',
            type: 'autocomplete',
            className: 'd-block mb-2',
            defaultValue: 3,
            templateOptions: {
              placeholder: 'input here',
              modelChange: `(value) => [value, value + value, value + value + value]`
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '不区分大小写',
          description: '不区分大小写的 AutoComplete'
        },
        fieldGroup: [
          {
            key: 'autocomplete-1-2-1',
            type: 'autocomplete',
            className: 'd-block mb-2',
            templateOptions: {
              options: ['Burns Bay Road', 'Downing Street', 'Wall Street'],
              placeholder: 'try to type "b"',
              changeFn: `(value, field) => field.templateOptions.options
                .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1)
              `
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '查询模式 - 不确定类目',
          description: '查询模式: 不确定类目 示例。'
        },
        fieldGroup: [
          {
            key: 'autocomplete-1-3-1',
            type: 'autocomplete',
            className: 'd-block mb-2',
            templateOptions: {
              options: ['Burns Bay Road', 'Downing Street', 'Wall Street'],
              placeholder: 'input here',
              changeFn: `(value, field) => field.templateOptions.options
                .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1)
              `
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-6',

    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '自定义输入组件',
          description: '自定义输入组件。'
        },
        fieldGroup: [
          {
            key: 'autocomplete-2-1-1',
            type: 'autocomplete',
            className: 'd-block mb-2',
            defaultValue: 3,
            templateOptions: {
              placeholder: 'input here',
              modelChange: `(value) => [value, value + value, value + value + value]`
            }
          }
        ]
      }
    ]
  }
];

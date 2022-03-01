import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const AutocompleteMockFields = [
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
          description: '通过 nzDataSource 设置自动完成的数据源',
        },
        fieldGroup: [
          {
            key: 'autocomplete1',
            type: 'autocomplete',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              placeholder: 'input here',
              changeFn: `(value) => [value, value + value, value + value + value]`
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '不区分大小写',
          description: '不区分大小写的 AutoComplete',
        },
        fieldGroup: [
          {
            key: 'autocomplete2',
            type: 'autocomplete',
            className: "d-block mb-2",
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
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '查询模式 - 不确定类目',
          description: '查询模式: 不确定类目 示例。',
        },
        fieldGroup: [
          {
            key: 'autocomplete2',
            type: 'autocomplete',
            className: "d-block mb-2",
            templateOptions: {
              options: ['Burns Bay Road', 'Downing Street', 'Wall Street'],
              placeholder: 'input here',
              changeFn: `(value, field) => field.templateOptions.options
                .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1)
              `
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "nzDisabled",
              
            }
          }
        ]
      },
    ]
  },
  {
    type: 'group',
    className: "d-block mb-3 col-6",

    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        fieldGroup: [
          {
            key: 'input-2-1',
            type: 'input',
            className: "d-inline-block m-2",
            templateOptions: {
              placeholder: 'large size',
              size: 'large',
            }
          },
          {
            key: 'input-2-2',
            type: 'input',
            className: "d-inline-block m-2",
            templateOptions: {
              placeholder: 'default size',
              size: 'default',
            }
          },
          {
            key: 'input-2-3',
            type: 'input',
            className: "d-inline-block m-2",
            templateOptions: {
              placeholder: 'small size',
              size: 'small',
            }
          },
        ],
        templateOptions: {
          title: '三种大小',
          description: `我们为 nz-input 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
          注意： 在表单里面，我们只使用大尺寸的输入框。`,
        },
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '切换不同选择器',
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "nzDisabled",
              
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "nzDisabled",
              
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "nzDisabled",
            }
          }
        ]
      },

    ]
  },
]
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const RadioMockFields = [
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
          description: '最简单的用法。',
        },
        fieldGroup: [
          {
            key: 'radio1',
            type: 'radio',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: 'Radio'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '单选组合',
          description: '一组互斥的 nz-radio 配合使用。',
        },
        fieldGroup: [
          {
            key: 'radio2',
            type: 'radio-group',
            className: "d-inline-block w-100",
            templateOptions: {
              text: "checked-disabled",
              options: [
                {
                  label: 'A',
                  value: 'A',
                },
                {
                  label: 'B',
                  value: 'B',
                },
                {
                  label: 'C',
                  value: 'C',
                },
                {
                  label: 'D',
                  value: 'D',
                },
              ]
            },
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: 'RadioGroup 组合 - 配置方式',
          description: '通过配置 options 参数来渲染单选框。',
        },
        fieldGroup: [
          {
            key: 'radio3',
            type: 'radio-group',
            className: "d-inline-block col-4",
            templateOptions: {
              text: "checked-disabled",
              options: [
                {
                  label: 'Apple',
                  value: 'Apple',
                },
                {
                  label: 'Pear',
                  value: 'Pear',
                },
                {
                  label: 'Orange',
                  value: 'Orange',
                }
              ]
            },
          },
          {
            key: 'radio3',
            type: 'radio-group',
            className: "d-inline-block col-4",
            templateOptions: {
              text: "checked-disabled",
              options: [
                {
                  label: 'Apple',
                  value: 'Apple',
                },
                {
                  label: 'Pear',
                  value: 'Pear',
                },
                {
                  label: 'Orange',
                  value: 'Orange',
                }
              ]
            },
          },
          {
            key: 'radio3',
            type: 'radio-group',
            className: "d-inline-block col-4",
            templateOptions: {
              text: "checked-disabled",
              options: [
                {
                  label: 'Apple',
                  value: 'Apple',
                },
                {
                  label: 'Pear',
                  value: 'Pear',
                },
                {
                  label: 'Orange',
                  value: 'Orange',
                }
              ]
            },
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '填底的按钮样式',
          description: '实色填底的单选按钮样式。',
        },
        fieldGroup: [
          {
            key: 'radio2',
            type: 'radio-group',
            className: "d-inline-block w-100",
            defaultValue: 'C',
            templateOptions: {
              text: "checked-disabled",
              buttonStyle: 'solid',
              radioButton: true,
              options: [
                {
                  label: 'Hangzhou',
                  value: 'A',
                },
                {
                  label: 'Shanghai',
                  value: 'B',
                },
                {
                  label: 'Beijing',
                  value: 'C',
                },
                {
                  label: 'Chengdu',
                  value: 'D',
                },
              ]
            },
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
          title: '切换不同选择器',
          subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
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
          subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
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
          subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
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
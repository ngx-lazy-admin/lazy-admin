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
            key: 'radio-1-1-1',
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
            key: 'radio-1-2-1',
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
            key: 'radio-1-3-1',
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
            key: 'radio-1-3-2',
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
            key: 'radio-1-3-3',
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
            key: 'radio-1-4-1',
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

    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '不可用',
          description: 'nz-radio 不可用。',
        },
        fieldGroup: [
          {
            key: 'radio-2-1-1',
            type: 'radio',
            className: "d-block mx-2",
            templateOptions: {
              text: "disabled",
            }
          },
          {
            key: 'radio-2-1-2',
            type: 'radio',
            className: "d-block mx-2",
            templateOptions: {
              text: "disabled",
            }
          },
          {
            type: 'button',
            className: "d-block m-2",
            templateOptions: {
              text: "Toggle disabled",
              type: 'primary'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: 'RadioGroup 垂直',
          description: '垂直的 nz-radio-group，配合更多输入框选项。',
        },
        fieldGroup: [
          {
            key: 'radio-1-2-1',
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
          title: '按钮样式',
          description: '按钮样式的单选组合。',
        },
        fieldGroup: [
          {
            key: 'radio-2-3-1',
            type: 'radio-group',
            className: "d-inline-block w-100 mb-2",
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
          },
          {
            key: 'radio-2-3-2',
            type: 'radio-group',
            className: "d-inline-block w-100 mb-2",
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
                  disabled: true
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
          },
          {
            key: 'radio-2-3-3',
            type: 'radio-group',
            className: "d-inline-block w-100",
            defaultValue: 'C',
            templateOptions: {
              text: "checked-disabled",
              buttonStyle: 'solid',
              radioButton: true,
              disabled: true,
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
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '大小',
          description: '大中小三种组合，可以和表单输入框进行对应配合。',
        },
        fieldGroup: [
          {
            key: 'radio-1-4-1',
            type: 'radio-group',
            className: "d-inline-block w-100 mb-2",
            defaultValue: 'C',
            templateOptions: {
              text: "checked-disabled",
              buttonStyle: 'solid',
              radioButton: true,
              size: 'large',
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
          },
          {
            key: 'radio-1-4-1',
            type: 'radio-group',
            className: "d-inline-block w-100 mb-2",
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
          },
          {
            key: 'radio-1-4-1',
            type: 'radio-group',
            className: "d-inline-block w-100 mb-2",
            defaultValue: 'C',
            templateOptions: {
              text: "checked-disabled",
              buttonStyle: 'solid',
              radioButton: true,
              size: 'small',
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
]
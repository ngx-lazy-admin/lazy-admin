import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ButtonMockFields = [
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
          title: '按钮类型',
          description: '按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。',
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-inline-block mb-2",
            defaultValue: 3,
            templateOptions: {
              text: 'Primary Button',
              type: 'primary',
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Default Button",
              type: 'default',
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Dashed Button",
              type: 'dashed',
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Text Button",
              type: 'text',
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Link Button",
              type: 'link',
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '按钮尺寸',
          description: `按钮有大、中、小三种尺寸。
          通过设置 nzSize 为 largesmall 分别把按钮设为大、小尺寸。若不设置 nzSize，则尺寸为中。`,
        },
        fieldGroup: [
          {
            type: 'button-group',
            className: "d-inline-block mb-2",
            defaultValue: 3,
            templateOptions: {
              text: 'Large',
              type: 'primary',
              options: [
                {
                  text: 'Large',
                  type: 'primary',
                },
                {
                  text: 'Large',
                  type: 'primary',
                },
                {
                  text: 'Large',
                  type: 'primary',
                },
              ]
            }
          },
          {
            type: 'button',
            className: "d-inline-block mb-2",
            defaultValue: 3,
            templateOptions: {
              text: 'default',
              type: 'primary',
            }
          },
          {
            type: 'button',
            className: "d-inline-block mb-2",
            defaultValue: 3,
            templateOptions: {
              text: 'Small',
              type: 'primary',
            }
          },
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
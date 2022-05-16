import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const InputMockFields = [
  {
    type: 'group',

    className: "d-block mb-3 col-6",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        key: 'code1',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '数字输入框',
        },
        fieldGroup: [
          {
            key: 'input1-1',
            type: 'input',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              placeholder: 'Basic usage'
            }
          },
          {
            key: 'input1-2',
            type: 'input',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Basic usage',
              disabled: true,
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '带移除图标',
          subtitle: '带移除图标的输入框，点击图标删除所有内容。',
        },
        fieldGroup: [
          {
            key: 'input3-1',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Autosize height based on content lines',
              autosize: true
            }
          },
          {
            key: 'input3-2',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Autosize height with minimum and maximum number of lines',
              autosize: { minRows: 2, maxRows: 4 }
            }
          },
          {
            key: 'input3-3',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Controlled autosize',
              autosize: { minRows: 4, maxRows: 6 }
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '带数字提示的文本域',
          subtitle: '展示数字提示。',
        },
        fieldGroup: [
          {
            key: 'input4-1',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Autosize height based on content lines',
              maxCharacterCount: 100
            }
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
          description: `我们为 nz-input 输入框定义了三种尺寸(大、默认、小)高度分别为 40px、32px 和 24px。
          注意: 在表单里面, 我们只使用大尺寸的输入框。`,
        },
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '文本域',
          subtitle: '用于多行输入。',
        },
        fieldGroup: [
          {
            key: 'input-2-1-1',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '适应文本高度的文本域',
          subtitle: 'nzAutosize 属性适用于 textarea 节点，并且只有高度会自动变化。另外 nzAutosize 可以设定为一个对象，指定最小行数和最大行数。',
        },
        fieldGroup: [
          {
            key: 'input-2-2-1',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Autosize height based on content lines',
              autosize: true
            }
          },
          {
            key: 'input-2-2-2',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Autosize height with minimum and maximum number of lines',
              autosize: { minRows: 2, maxRows: 4 }
            }
          },
          {
            key: 'input-2-2-3',
            type: 'textarea',
            className: "d-block mb-2",
            templateOptions: {
              placeholder: 'Controlled autosize',
              autosize: { minRows: 4, maxRows: 6 }
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '密码框',
          subtitle: '密码框。',
        },
        fieldGroup: [
          {
            key: 'input-2-3-1',
            type: 'input',
            className: "d-block mb-2",
            templateOptions: {
              type: 'password'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '无边框',
          subtitle: '没有边框。',
        },
        fieldGroup: [
          {
            key: 'input-2-4-1',
            type: 'input',
            className: "d-block mb-2",
            templateOptions: {
              borderless: true
            }
          }
        ]
      },
    ]
  },
]
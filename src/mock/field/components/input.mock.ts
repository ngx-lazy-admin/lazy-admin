import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const InputMockFields = [
  {
    type: 'group',

    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        key: 'code1',
        className: 'd-block mb-3 col-12',
        props: {
          title: '基本用法',
          description: '数字输入框'
        },
        fieldGroup: [
          {
            key: 'input1-1',
            type: 'input',
            className: 'd-block mb-2',
            defaultValue: 3,
            props: {
              placeholder: 'Basic usage'
            }
          },
          {
            key: 'input1-2',
            type: 'input',
            className: 'd-block mb-2',
            props: {
              placeholder: 'Basic usage',
              disabled: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '带移除图标',
          description: '带移除图标的输入框，点击图标删除所有内容。'
        },
        fieldGroup: [
          {
            key: 'input3-1',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {
              placeholder: 'Autosize height based on content lines',
              autosize: true
            }
          },
          {
            key: 'input3-2',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {
              placeholder: 'Autosize height with minimum and maximum number of lines',
              autosize: { minRows: 2, maxRows: 4 }
            }
          },
          {
            key: 'input3-3',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {
              placeholder: 'Controlled autosize',
              autosize: { minRows: 4, maxRows: 6 }
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '带数字提示的文本域',
          description: '展示数字提示。'
        },
        fieldGroup: [
          {
            key: 'input4-1',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {
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
    className: 'd-block mb-3 col-6',

    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        fieldGroup: [
          {
            key: 'input-2-1',
            type: 'input',
            className: 'd-inline-block m-2',
            props: {
              placeholder: 'large size',
              size: 'large'
            }
          },
          {
            key: 'input-2-2',
            type: 'input',
            className: 'd-inline-block m-2',
            props: {
              placeholder: 'default size',
              size: 'default'
            }
          },
          {
            key: 'input-2-3',
            type: 'input',
            className: 'd-inline-block m-2',
            props: {
              placeholder: 'small size',
              size: 'small'
            }
          }
        ],
        props: {
          title: '三种大小',
          description: `我们为 nz-input 输入框定义了三种尺寸(大、默认、小)高度分别为 40px、32px 和 24px。
          注意: 在表单里面, 我们只使用大尺寸的输入框。`
        }
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '文本域',
          description: '用于多行输入。'
        },
        fieldGroup: [
          {
            key: 'input-2-1-1',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '适应文本高度的文本域',
          description:
            'nzAutosize 属性适用于 textarea 节点，并且只有高度会自动变化。另外 nzAutosize 可以设定为一个对象，指定最小行数和最大行数。'
        },
        fieldGroup: [
          {
            key: 'input-2-2-1',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {
              placeholder: 'Autosize height based on content lines',
              autosize: true
            }
          },
          {
            key: 'input-2-2-2',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {
              placeholder: 'Autosize height with minimum and maximum number of lines',
              autosize: { minRows: 2, maxRows: 4 }
            }
          },
          {
            key: 'input-2-2-3',
            type: 'textarea',
            className: 'd-block mb-2',
            props: {
              placeholder: 'Controlled autosize',
              autosize: { minRows: 4, maxRows: 6 }
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '密码框',
          description: '密码框。'
        },
        fieldGroup: [
          {
            key: 'input-2-3-1',
            type: 'input',
            className: 'd-block mb-2',
            props: {
              type: 'password'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '无边框',
          description: '没有边框。'
        },
        fieldGroup: [
          {
            key: 'input-2-4-1',
            type: 'input',
            className: 'd-block mb-2',
            props: {
              borderless: true
            }
          }
        ]
      }
    ]
  }
];

import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ModalMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '基本使用',
          description: '第一个对话框。'
        },
        fieldGroup: [
          {
            type: 'modal',
            className: 'd-block mb-3 col-4',
            templateOptions: {
              text: 'showModal'
            },
            fieldGroup: [
              {
                key: 'template1',
                type: 'input',
                className: 'd-block mb-2',
                defaultValue: 'Card content'
              },
              {
                key: 'template2',
                type: 'input-number',
                className: 'd-block mb-2',
                defaultValue: 1
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '自定义组成部分',
          description: `更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
          不需要默认确定取消按钮时，你可以把 nzFooter 设为 null。`
        },
        fieldGroup: [
          {
            key: 'input1-3',
            type: 'modal',
            className: 'd-block mb-2',
            templateOptions: {
              label: '标签',
              placeholder: 'Basic usage',
              disabled: true
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
            templateOptions: {
              placeholder: 'large size',
              size: 'large'
            }
          },
          {
            key: 'input-2-2',
            type: 'input',
            className: 'd-inline-block m-2',
            templateOptions: {
              placeholder: 'default size',
              size: 'default'
            }
          },
          {
            key: 'input-2-3',
            type: 'input',
            className: 'd-inline-block m-2',
            templateOptions: {
              placeholder: 'small size',
              size: 'small'
            }
          }
        ],
        templateOptions: {
          title: '三种大小',
          description: `我们为 nz-input 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
          注意： 在表单里面，我们只使用大尺寸的输入框。`
        }
      }
    ]
  }
];

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
            type: 'button',
            className: "d-inline-block mx-2 mb-2", 
            templateOptions: {
              text: 'Large',
              size: 'large',
              type: 'primary',
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2 mb-2",
            
            templateOptions: {
              text: 'default',
              type: 'primary',
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2 mb-2",
            templateOptions: {
              text: 'Small',
              type: 'primary',
              size: 'small'
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '加载中状态',
          description: '添加 nzLoading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。',
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-inline-block m-2",
            
            templateOptions: {
              icon: 'poweroff',
              text: 'Loading',
              type: 'primary',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            
            templateOptions: {
              size: 'small',
              text: 'Loading',
              loading: true,
              type: 'primary',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            
            templateOptions: {
              size: 'small',
              text: 'Loading',
              loading: false,
              type: 'primary',
              click: `(_field, _this) => {
                console.log(_field.templateOptions.loading)
                _field.templateOptions.loading = !_field.templateOptions.loading
                console.log(_field.templateOptions.loading)

              }`
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            
            templateOptions: {
              loading: true,
              shape: 'circle',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            
            templateOptions: {
              type: 'primary',
              loading: true,
              shape: 'circle',
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: 'Block 按钮',
          description: 'nzBlock 属性将使按钮适合其父宽度。',
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-block mb-2",
            
            templateOptions: {
              block: true,
              text: 'Primary',
              type: 'primary',
            }
          },
          {
            type: 'button',
            className: "d-block mb-2",
            
            templateOptions: {
              block: true,
              text: 'Default',
              type: 'default',
            }
          },
          {
            type: 'button',
            className: "d-block mb-2",
            
            templateOptions: {
              block: true,
              text: 'Dashed',
              type: 'dashed',
            }
          },
          {
            type: 'button',
            className: "d-block mb-2",
            
            templateOptions: {
              block: true,
              text: 'text',
              type: 'Text',
            }
          },
          {
            type: 'button',
            className: "d-block mb-2",
            templateOptions: {
              block: true,
              text: 'link',
              type: 'link',
            }
          },
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
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'primary',
              text: 'Primary',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'primary',
              text: 'Primary',
              disabled: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'default',
              text: 'default',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'default',
              text: 'default',
              disabled: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'dashed',
              text: 'dashed',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'dashed',
              text: 'dashed',
              disabled: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'text',
              text: 'text',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'text',
              text: 'text',
              disabled: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'link',
              text: 'link',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'link',
              text: 'link',
              disabled: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'text',
              danger: true,
              text: 'danger text',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'text',
              text: 'danger text',
              danger: true,
              disabled: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'link',
              danger: true,
              text: 'danger link',
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'link',
              danger: true,
              text: 'danger link',
              disabled: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'primary',
              danger: true,
              text: 'danger Primary',
              disabled: false
            }
          },
          {
            type: 'button',
            className: "d-inline-block m-2",
            templateOptions: {
              type: 'primary',
              danger: true,
              text: 'danger Primary',
              disabled: true
            }
          },

        ],
        templateOptions: {
          title: '不可用状态',
          description: `添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。`,
        },
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '幽灵按钮',
          description: '添加 nzGhost 属性后，幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。',
          bodyClass: 'bg-secondary'
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-inline-block mb-2",
            templateOptions: {
              text: 'Primary',
              type: 'primary',
              ghost: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Default",
              type: 'default',
              ghost: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Dashed",
              type: 'dashed',
              ghost: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Link",
              type: 'link',
              ghost: true
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '危险按钮',
          description: '使用 nzDanger 将按钮标识为危险状态。',
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-inline-block mb-2",
            templateOptions: {
              text: 'Primary',
              type: 'primary',
              danger: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Default",
              type: 'default',
              danger: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Dashed",
              type: 'dashed',
              danger: true
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Link",
              type: 'link',
              danger: true
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '路由跳转',
          description: '使用 nzDanger 将按钮标识为危险状态。',
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-inline-block mb-2",
            templateOptions: {
              text: 'Primary',
              type: 'primary',
              danger: true
            }
          },
        ]
      }
    ]
  },
]
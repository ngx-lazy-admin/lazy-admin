import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const BadgeMockFields = [
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
          title: '基本',
          description: '简单的徽章展示，当 nzCount 为 0 时，默认不显示，但是可以使用 nzShowZero 修改为显示。',
        },
        fieldGroup: [
          {
            type: 'badge',
            className: "d-inline-block mb-2",
            templateOptions: {
              text: 'Primary Button',
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '封顶数字',
          description: `超过 nzOverflowCount 的会显示为 nzOverflowCount+，默认的 nzOverflowCount 为 99`,
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
          title: '可点击',
          description: '用 a 标签进行包裹即可。',
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-inline-block m-2",
            
            templateOptions: {
              // icon: 'poweroff',
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
          title: '状态点',
          description: '用于表示状态的小圆点。',
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
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: 'http 请求',
          description: 'http 请求',
        },
        fieldGroup: [
          {
            type: 'button',
            className: "d-inline-block mb-2",
            templateOptions: {
              text: 'Primary',
              type: 'primary',
              click: `(_field, _this) => {
                _this.http.get('api/components/button').subscribe(result => {
                  _this.message.success(result.info.content)
                })
              }`
            }
          },
        ]
      }

      
    ]
  },
]
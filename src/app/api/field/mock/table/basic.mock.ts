import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const TableBasicMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '按钮类型',
      description: '按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。',
    },
    fieldGroup: [
      {
        key: 'data',
        type: 'simple-table',
        className: "d-block mb-2",
        fieldArray: {
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              templateOptions: {
                label: 'name'
              }
            },
            {
              key: 'age',
              type: 'template',

              templateOptions: {
                label: 'age'
              }
            },
            {
              key: 'address',
              type: 'template',

              templateOptions: {
                label: 'address'
              }
            },
            {
              key: 'action',
              type: 'template',
              templateOptions: {
                label: 'action'
              }
            }
          ]
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
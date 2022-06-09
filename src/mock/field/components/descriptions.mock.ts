import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const DescriptionMockFields = [
  {
    type: 'group',
    className: "d-block mb-3 col-24",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-24",
        templateOptions: {
          title: '基本',
          description: '简单的展示。',
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: "d-block mx-2",
            templateOptions: {
              text: "Checkbox",
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                templateOptions: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                templateOptions: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                templateOptions: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                templateOptions: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                templateOptions: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-24",
        templateOptions: {
          title: '带边框的',
          description: '带边框和背景颜色列表。',
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: "d-block mx-2",
            templateOptions: {
              bordered: true
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                templateOptions: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                templateOptions: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                templateOptions: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                templateOptions: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                templateOptions: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-24",
        templateOptions: {
          title: '响应式',
          description: '通过响应式的配置可以实现在小屏幕设备上的完美呈现。',
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: "d-block mx-2",
            templateOptions: {
              bordered: true,
              column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                templateOptions: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                templateOptions: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                templateOptions: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                templateOptions: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                templateOptions: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-24",
        templateOptions: {
          title: '垂直',
          description: '垂直的列表。',
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: "d-block mx-2",
            templateOptions: {
              bordered: true,
              layout: "vertical"
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                templateOptions: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                templateOptions: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                templateOptions: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                templateOptions: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                templateOptions: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-24",
        templateOptions: {
          title: '列表表单',
          description: '列表表单',
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: "d-block mx-2",
            templateOptions: {
              bordered: true,
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'input',
                templateOptions: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'input',
                templateOptions: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'input',
                templateOptions: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'input',
                templateOptions: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'input',
                templateOptions: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
    ]
  }
]
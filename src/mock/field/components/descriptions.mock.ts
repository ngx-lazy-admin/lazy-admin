import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const DescriptionMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-24',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-24',
        props: {
          title: '基本',
          description: '简单的展示。'
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: 'd-block mx-2',
            props: {
              text: 'Checkbox'
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                props: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                props: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                props: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                props: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                props: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-24',
        props: {
          title: '带边框的',
          description: '带边框和背景颜色列表。'
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: 'd-block mx-2',
            props: {
              bordered: true
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                props: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                props: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                props: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                props: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                props: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-24',
        props: {
          title: '响应式',
          description: '通过响应式的配置可以实现在小屏幕设备上的完美呈现。'
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: 'd-block mx-2',
            props: {
              bordered: true,
              column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                props: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                props: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                props: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                props: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                props: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-24',
        props: {
          title: '垂直',
          description: '垂直的列表。'
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: 'd-block mx-2',
            props: {
              bordered: true,
              layout: 'vertical'
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'text',
                props: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'text',
                props: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'text',
                props: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'text',
                props: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'text',
                props: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-24',
        props: {
          title: '列表表单',
          description: '列表表单'
        },
        fieldGroup: [
          {
            key: 'descriptions-1-1-1',
            type: 'descriptions',
            className: 'd-block mx-2',
            props: {
              bordered: true
            },
            fieldGroup: [
              {
                key: 'username',
                type: 'input',
                props: {
                  label: 'username'
                }
              },
              {
                key: 'telephone',
                type: 'input',
                props: {
                  label: 'telephone'
                }
              },
              {
                key: 'live',
                type: 'input',
                props: {
                  label: 'Live'
                }
              },
              {
                key: 'remark',
                type: 'input',
                props: {
                  label: 'Remark'
                }
              },
              {
                key: 'address',
                type: 'input',
                props: {
                  label: 'Address'
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

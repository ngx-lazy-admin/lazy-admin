import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const CascaderMockFields = [
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
          description: '省市区级联。',
        },
        fieldGroup: [
          {
            key: 'cascader',
            type: 'cascader',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              placeholder: 'Basic usage',
              options: [
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                      children: [
                        {
                          value: 'xihu',
                          label: 'West Lake',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      value: 'ningbo',
                      label: 'Ningbo',
                      isLeaf: true
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: 'Jiangsu',
                  children: [
                    {
                      value: 'nanjing',
                      label: 'Nanjing',
                      children: [
                        {
                          value: 'zhonghuamen',
                          label: 'Zhong Hua Men',
                          isLeaf: true
                        }
                      ]
                    }
                  ]
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
          title: '禁用选项',
          description: '通过指定 options 里的 disabled 字段。',
        },
        fieldGroup: [
          {
            key: 'cascader',
            type: 'cascader',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              placeholder: 'Basic usage',
              options: [
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  disabled: true,
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                      children: [
                        {
                          value: 'xihu',
                          label: 'West Lake',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      value: 'ningbo',
                      label: 'Ningbo',
                      isLeaf: true
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: 'Jiangsu',
                  children: [
                    {
                      value: 'nanjing',
                      label: 'Nanjing',
                      children: [
                        {
                          value: 'zhonghuamen',
                          label: 'Zhong Hua Men',
                          isLeaf: true
                        }
                      ]
                    }
                  ]
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
          title: '大小',
          description: '不同大小的级联选择器。',
        },
        fieldGroup: [
          {
            key: 'cascader',
            type: 'cascader',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              size: 'large',
              placeholder: 'Basic usage',
              options: [
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  disabled: true,
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                      children: [
                        {
                          value: 'xihu',
                          label: 'West Lake',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      value: 'ningbo',
                      label: 'Ningbo',
                      isLeaf: true
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: 'Jiangsu',
                  children: [
                    {
                      value: 'nanjing',
                      label: 'Nanjing',
                      children: [
                        {
                          value: 'zhonghuamen',
                          label: 'Zhong Hua Men',
                          isLeaf: true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            key: 'cascader',
            type: 'cascader',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              size: 'large',
              placeholder: 'Basic usage',
              options: [
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  disabled: true,
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                      children: [
                        {
                          value: 'xihu',
                          label: 'West Lake',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      value: 'ningbo',
                      label: 'Ningbo',
                      isLeaf: true
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: 'Jiangsu',
                  children: [
                    {
                      value: 'nanjing',
                      label: 'Nanjing',
                      children: [
                        {
                          value: 'zhonghuamen',
                          label: 'Zhong Hua Men',
                          isLeaf: true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            key: 'cascader',
            type: 'cascader',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              size: 'small',
              placeholder: 'Basic usage',
              options: [
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  disabled: true,
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                      children: [
                        {
                          value: 'xihu',
                          label: 'West Lake',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      value: 'ningbo',
                      label: 'Ningbo',
                      isLeaf: true
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: 'Jiangsu',
                  children: [
                    {
                      value: 'nanjing',
                      label: 'Nanjing',
                      children: [
                        {
                          value: 'zhonghuamen',
                          label: 'Zhong Hua Men',
                          isLeaf: true
                        }
                      ]
                    }
                  ]
                }
              ]
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
      }
    ]
  },
]
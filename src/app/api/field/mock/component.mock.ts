
export const components = [
  {
    id: 'button',
    fields: `[
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Primary Button",
          type: 'primary',
          click: (field, _this) => {
            console.log(field)
            _this.message.success(field.templateOptions.text)
          }
        }
      },
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Default Button",
          type: 'default',
        }
      },
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Dashed Button",
          type: 'dashed',
        }
      }
    ]`,
    info: {
      title: 'Button 按钮',
      content: '按钮用于开始一个即时操作。'
    }
  },
  {
    id: 'card',
    fields: [
      {
        key: 'card1',
        type: 'card',
        className: "d-inline-block col-lg-3 col-md-4 col-sm-6 px-2 mb-2",
        templateOptions: {
          title: "Card title1",
        },
        fieldGroup: [
          {
            type: 'input',
            className: 'col-sm-4 d-inline-block mb-2',
            templateOptions: {
              label: 'Name of Investment',
              required: true,
            },
          },
          {
            type: 'input',
            className: 'col-sm-4 d-inline-block mb-2',
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            type: 'input',
            className: 'col-sm-4 d-inline-block mb-2',
            templateOptions: {
              label: 'Stock Identifier:',
            },
          },
          {
            type: 'button',
            className: 'float-end',
            templateOptions: {
              text: '提交',
              type: 'primary',
            }
          }
        ]
      }
    ],
    info: {
      title: 'Card卡片',
      content: '通用卡片容器。'
    }
  },
  {
    id: 'checkbox',
    fields: `[
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
          disabled: true
        }
      }
    ]`,
    data: {},
    info: {
      title: 'Checkbox 按钮',
      content: '多选框。'
    }
  },
  {
    id: 'input',
    fields: [
      {
        type: 'input',
        className: "d-block mb-2",
        templateOptions: {
          placeholder: 'Basic usage'
        }
      },
      {
        type: 'input',
        className: "d-block mb-2",
        templateOptions: {
          placeholder: 'Basic usage',
          disabled: true,
        }
      },
      {
        type: 'input',
        className: "d-block mb-2",
        templateOptions: {
          label: "标签",
          placeholder: 'Basic usage',
          disabled: true
        }
      },
      {
        type: 'input',
        className: "d-block mb-2",
        templateOptions: {
          label: "large size",
          placeholder: 'large size',
          size: 'large',
          disabled: true
        }
      }
    ],
    data: {},
    info: {
      title: 'Input输入框',
      content: '通过鼠标或键盘输入内容，是最基础的表单域的包装。'
    }
  },
  {
    id: 'date-picker',
    fields: [
      {
        type: 'card',
        className: "d-block mb-2 col-6",
        templateOptions: {
        },
        fieldGroup: [
          {
            type: 'card',
            className: "d-block mb-2 col-12",
            templateOptions: {
              title: '基本',
              subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
            },
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              },
              {
                key: 'week',
                type: 'date-picker',
                className: 'col-12  mb-3 d-inline-block',
                templateOptions: {
                  mode: "week"
                }
              },
              {
                key: 'month',
                type: 'date-picker',
                className: 'col-12  mb-3 d-inline-block',
                templateOptions: {
                  mode: "month"
                }
              },
            ]
          },
          {
            type: 'card',
            className: "d-block mb-2 col-6",
            templateOptions: {
              title: '切换不同选择器',
              subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
            },
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              }
            ]
          },
          {
            type: 'card',
            className: "d-block mb-2 col-6",
            templateOptions: {
              title: '日期格式',
              subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
            },
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              },
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              }
            ]
          },
          {
            type: 'card',
            className: "d-block mb-2 col-6",
            templateOptions: {
              title: '日期格式',
              subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
            },
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              },
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              }
            ]
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: "year"
            }
          },
        ]
      },
      {
        type: 'card',
        className: "d-block mb-2 col-6",
        templateOptions: {
          title: '基本',
          subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            type: 'card',
            className: "d-block mb-2 col-12",
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              },
              {
                key: 'week',
                type: 'date-picker',
                className: 'col-12  mb-3 d-inline-block',
                templateOptions: {
                  mode: "week"
                }
              },
              {
                key: 'month',
                type: 'date-picker',
                className: 'col-12  mb-3 d-inline-block',
                templateOptions: {
                  mode: "month"
                }
              },
            ]
          },
          {
            type: 'card',
            className: "d-block mb-2 col-6",
            templateOptions: {
              title: '切换不同选择器',
              subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
            },
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              }
            ]
          },
          {
            type: 'card',
            className: "d-block mb-2 col-6",
            templateOptions: {
              title: '日期格式',
              subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
            },
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              },
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              }
            ]
          },
          {
            type: 'card',
            className: "d-block mb-2 col-6",
            templateOptions: {
              title: '日期格式',
              subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
            },
            fieldGroup: [
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              },
              {
                key: 'date',
                type: 'date-picker',
                className: 'col-12 mb-3 d-inline-block',
                templateOptions: {
    
                }
              }
            ]
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: "year"
            }
          },
        ]
      },

    ],
    data: {},
    info: {
      title: 'Input输入框',
      content: '通过鼠标或键盘输入内容，是最基础的表单域的包装。'
    }
  },
]

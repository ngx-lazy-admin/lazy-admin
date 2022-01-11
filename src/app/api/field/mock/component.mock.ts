
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
      },
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Text Button",
          type: 'text',
        }
      },
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Link Button",
          type: 'link',
        }
      },
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
    fields: `[
      {
        key: 'input1',
        type: 'input',
        className: "d-block mb-2",
        templateOptions: {
          placeholder: 'Basic usage'
        }
      },
      {
        key: 'input2',
        type: 'input',
        className: "d-block mb-2",
        templateOptions: {
          placeholder: 'Basic usage',
          disabled: true,
        }
      },
      {
        key: 'input3',
        type: 'input',
        className: "d-block mb-2",
        wrappers: ['form'],
        templateOptions: {
          label: "标签",
          placeholder: 'Basic usage',
          disabled: true
        }
      },
      {
        key: 'input3',
        type: 'input',
        className: "d-block mb-2",
        wrappers: ['form'],
        templateOptions: {
          label: "large size",
          placeholder: 'large size',
          size: 'large',
          disabled: true
        }
      }
    ]`,
    data: {},
    info: {
      title: 'Input输入框',
      content: '通过鼠标或键盘输入内容，是最基础的表单域的包装。'
    }
  },
]

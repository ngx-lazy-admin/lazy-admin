
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
    fields: `[
      {
        key: 'name',
        type: 'card',
        className: "d-inline-block col-lg-3 col-md-4 col-sm-6 px-2 mb-2",
        templateOptions: {
          title: "Card title1",
        },
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            className: 'col-sm-4 mb-2',
            wrappers: ['form'],
            templateOptions: {
              label: 'Name of Investment',
              required: true,
            },
          },
          {
            type: 'nz-input',
            key: 'investmentDate',
            className: 'col-sm-4',
            wrappers: ['form'],
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
            wrappers: ['form'],
            templateOptions: {
              label: 'Stock Identifier:',
            },
          },
          {
            type: 'button',
            key: 'stockIdentifier',
            className: 'float-end',
            templateOptions: {
              text: '提交',
              type: 'primary',
              click: (field, _this) => {
                console.log('666')
                _this.message.success(field.templateOptions.text)
              },
            }
          },
        ]
      },
      {
        key: 'name',
        type: 'card',
        className: "d-inline-block col-lg-3 col-md-4 col-sm-6 px-2 mb-2",
        templateOptions: {
          title: "Card title2",
        },
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            className: 'col-sm-4 mb-2',
            wrappers: ['form'],
            templateOptions: {
              label: 'Name of Investment',
              required: true,
            },
          },
          {
            type: 'nz-input',
            key: 'investmentDate',
            className: 'col-sm-4',
            wrappers: ['form'],
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
            wrappers: ['form'],
            templateOptions: {
              label: 'Stock Identifier:',
            },
          },
          {
            type: 'button',
            key: 'stockIdentifier',
            className: 'float-end',
            templateOptions: {
              label: 'Stock Identifier:',
              text: '提交',
              type: 'primary'
            },
          },
        ]
      },
      {
        key: 'name',
        type: 'card',
        className: "d-inline-block col-lg-3 col-md-4 col-sm-6 px-2 mb-2",
        templateOptions: {
          title: "Card title3",
        },
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            className: 'col-sm-4 mb-2',
            wrappers: ['form'],
            templateOptions: {
              label: 'Name of Investment',
              required: true,
            },
          },
          {
            type: 'nz-input',
            key: 'investmentDate',
            className: 'col-sm-4',
            wrappers: ['form'],
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
            wrappers: ['form'],
            templateOptions: {
              label: 'Stock Identifier:',
            },
          },
          {
            type: 'button',
            key: 'stockIdentifier',
            className: 'float-end',
            templateOptions: {
              label: 'Stock Identifier:',
              text: '提交',
              type: 'primary'
            },
          },
        ]
      },
      {
        key: 'name',
        type: 'card',
        className: "d-inline-block col-lg-3 col-md-4 col-sm-6 px-2 mb-2",
        templateOptions: {
          title: "Card title4",
        },
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            className: 'col-sm-4 mb-2',
            wrappers: ['form'],
            templateOptions: {
              label: 'Name of Investment',
              required: true,
            },
          },
          {
            type: 'nz-input',
            key: 'investmentDate',
            className: 'col-sm-4',
            wrappers: ['form'],
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
            wrappers: ['form'],
            templateOptions: {
              label: 'Stock Identifier:',
            },
          },
          {
            type: 'button',
            key: 'stockIdentifier',
            className: 'float-end',
            templateOptions: {
              label: 'Stock Identifier:',
              text: '提交',
              type: 'primary'
            },
          },
        ]
      },
    ]`,
    info: {
      title: 'Card卡片',
      content: '通用卡片容器。'
    }
  }
]

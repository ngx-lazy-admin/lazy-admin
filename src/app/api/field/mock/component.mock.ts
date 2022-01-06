
export const components = [
  {
    id: 'button',
    fields: [
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
    ],
    info: {
      title: 'Button 按钮',
      content: '按钮用于开始一个即时操作。'
    }
  }
]

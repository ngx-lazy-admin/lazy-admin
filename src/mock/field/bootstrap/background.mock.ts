export const BackgroundMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '边框',
          description: `# Marked in the browser\n\nRendered by **marked**.`
        },
        fieldGroup: [
          {
            type: 'template',
            defaultValue: '.bg-primary',
            className: 'd-block p-3 f16 mb-2 bg-primary text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-secondary',
            className: 'd-block p-3 f16 mb-2 bg-secondary text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-success',
            className: 'd-block p-3 f16 mb-2 bg-success text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-danger',
            className: 'd-block p-3 f16 mb-2 bg-danger text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-warning',
            className: 'd-block p-3 f16 mb-2 bg-warning text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-info',
            className: 'd-block p-3 f16 mb-2 bg-info text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-light',
            className: 'd-block p-3 f16 mb-2 bg-light text-black'
          },
          {
            type: 'template',
            defaultValue: '.bg-dark',
            className: 'd-block p-3 f16 mb-2 bg-dark text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-body',
            className: 'd-block p-3 f16 mb-2 bg-body text-black'
          },
          {
            type: 'template',
            defaultValue: '.bg-white',
            className: 'd-block p-3 f16 mb-2 bg-white text-black'
          },
          {
            type: 'template',
            defaultValue: '.bg-transparent',
            className: 'd-block p-3 f16 mb-2 bg-transparent text-black'
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '渐变',
          subtitle: '无边框'
        },
        fieldGroup: [
          {
            type: 'template',
            defaultValue: '.bg-primary.bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-primary bg-gradient text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-secondary .bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-secondary bg-gradient text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-success .bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-success bg-gradient text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-danger .bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-danger bg-gradient text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-warning .bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-warning bg-gradient text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-info .bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-info bg-gradient text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-light .bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-light bg-gradient text-black'
          },
          {
            type: 'template',
            defaultValue: '.bg-dark .bg-gradient',
            className: 'd-block p-3 f16 mb-2 bg-dark bg-gradient text-white'
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '透明',
          subtitle: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            type: 'template',
            defaultValue: '.bg-primary',
            className: 'd-block p-3 f16 mb-2 bg-primary text-white'
          },
          {
            type: 'template',
            defaultValue: '.bg-primary bg-opacity-75',
            className: 'd-block p-3 f16 mb-2 bg-primary text-white bg-opacity-75'
          },
          {
            type: 'template',
            defaultValue: '.bg-primary bg-opacity-50 ',
            className: 'd-block p-3 f16 mb-2 bg-primary red text-white bg-opacity-50 width-25'
          },
          {
            type: 'template',
            defaultValue: '.bg-primary bg-opacity-25',
            className: 'd-block p-3 f16 mb-2 bg-primary text-white bg-opacity-25'
          },
          {
            type: 'template',
            defaultValue: '.bg-primary bg-opacity-15',
            className: 'd-block p-3 f16 mb-2 bg-primary text-white bg-opacity-15'
          },
          {
            type: 'template',
            defaultValue: '.bg-primary bg-opacity-0',
            className: 'd-block p-3 f16 mb-2 bg-primary text-white bg-opacity-0'
          }
        ]
      }
    ]
  }
];

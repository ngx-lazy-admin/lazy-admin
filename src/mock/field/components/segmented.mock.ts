export const SegmentedMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '基本',
          description: '最简单的用法'
        },
        fieldGroup: [
          {
            key: 'segmented-1-1-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '动态数据',
          description: '动态加载数据。'
        },
        fieldGroup: [
          {
            key: 'segmented-1-1-2',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: 'ngModel',
          description: '通过 ngModel 指定选中的 index'
        },
        fieldGroup: [
          {
            key: 'segmented-1-3-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            }
          },
          {
            key: 'segmented-1-3-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '三种大小',
          description: '我们为 Segmented 组件定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。'
        },
        fieldGroup: [
          {
            key: 'segmented-1-4-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
              size: 'small'
            }
          },
          {
            key: 'segmented-1-4-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
              size: 'default'
            }
          },
          {
            key: 'segmented-1-4-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
              size: 'large'
            }
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
          title: '不可用',
          description: 'Segmented 不可用。'
        },
        fieldGroup: [
          {
            key: 'segmented-2-1-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
              disabled: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '设置图标',
          description: '给 Segmented Item 设置 Icon。'
        },
        fieldGroup: [
          {
            key: 'segmented-2-2-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: [
                { label: 'List', value: 'List', icon: 'bars' },
                { label: 'Kanban', value: 'Kanban', icon: 'appstore' }
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '自定义渲染',
          description: '使用 nzLabelTemplate 自定义渲染每一个 Segmented Item。'
        },
        fieldGroup: [
          {
            key: 'segmented-2-3-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: [
                { label: 'user1', value: 'user1', useTemplate: true },
                { label: 'user2', value: 'user2', useTemplate: true },
                { label: 'user3', value: 'user3', useTemplate: true }
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: 'Block 分段选择器',
          description: 'nzBlock 属性使其适合父元素宽度。'
        },
        fieldGroup: [
          {
            key: 'segmented-2-4-1',
            type: 'segmented',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
              block: true
            }
          }
        ]
      }
    ]
  }
];

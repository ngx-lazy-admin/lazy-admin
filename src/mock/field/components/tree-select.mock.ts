const Node = [
  {
    title: 'parent 1',
    key: '100',
    children: [
      {
        title: 'parent 1-0',
        key: '1001',
        children: [
          { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
          { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
        ]
      },
      {
        title: 'parent 1-1',
        key: '1002',
        children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
      }
    ]
  }
];

export const TreeSelectMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '基本',
          description: '最简单的用法。'
        },
        fieldGroup: [
          {
            key: 'tree-select-1-1-1',
            type: 'tree-select',
            className: 'col-12 mb-3 d-inline-block',
            defaultValue: '1001',
            props: {
              nodes: Node,
              expandedKeys: ['100', '1001']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '异步数据加载',
          description: '点击展开节点，动态加载数据，直到执行 addChildren() 方法取消加载状态。'
        },
        fieldGroup: [
          {
            key: 'tree-select-1-2-1',
            type: 'tree-select',
            className: 'col-12 mb-3 d-inline-block',
            defaultValue: '1001',
            props: {
              nodes: Node,
              expandedKeys: ['100', '1001'],
              dropdownMatchSelectWidth: true,
              asyncData: true,
              expandChange: `(e, T) => {
                if (e.node && e.node.getChildren.length===0 && e.node.isExpanded) {
                  const date = new Date().getTime()
                  const data =  [
                    { title: 'Child Node', key: date + '-0' },
                    { title: 'Child Node', key: date + '-1' }
                  ]
                  e.node.addChildren(data);
                }
              }`
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {
      title: '基本',
      description: '最简单的用法，在浮层中可以选择或者输入日期。'
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'week',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'week'
            }
          },
          {
            key: 'month',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'month'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '切换不同选择器',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'year'
            }
          }
        ]
      }
    ]
  }
];

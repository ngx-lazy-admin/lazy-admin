
// @ts-nocheck

export const list = [
  {
    id: 'table',
    fields: [
      {
        type: 'search-card',
        className: "col-12  d-block",
        templateOptions: {
          bodyClass: 'row',
          bodyStyle: {
            paddingBottom: 0
          }
        },
        fieldGroup: [
          {
            key: 'title',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            templateOptions: {
              label: '规则名称',
              tooltipTitle: '目标的服务对象',
              layout : 'horizontal',
              placeholder: '给目标起个名字'
            }
          },
          {
            key: 'date',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            templateOptions: {
              label: '描述',
              layout : 'horizontal',
              placeholder: '请输入'
            }
          },
          {
            key: 'des',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            templateOptions: {
              label: '服务调用次数',
              layout : 'horizontal'
            }
          },
          {
            key: 'standard',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            templateOptions: {
              label: '状态',
              layout : 'horizontal',
              placeholder: '请选择'
            }
          },
          {
            key: 'customer',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            templateOptions: {
              label: '上次调度时间',
              layout : 'horizontal',
              placeholder: '请输入',
            }
          },
        ]
      },
      {
        type: 'card',
        className: "col-12 mt-3",
        templateOptions: {
          title: "查询表格",
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'data',
            className: "col-12 d-block",
            templateOptions: {
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
              toolbarOptions: [
                {
                  text: '查询表格',
                  type: 'text',
                  className: 'me-auto',
                  size: 'default',
                },
                {
                  text: '新建',
                  type: 'primary',
                  className: '',
                  size: 'default',
                  icon: 'plus',
                  className: 'mx-1'
                },
                {
                  type: 'default',
                  icon: 'redo',
                  type: 'text',
                  size: 'default',
                  className: 'mx-1'
                },
                {
                  type: 'default',
                  type: 'text',
                  icon: 'column-height',
                  size: 'default',
                  className: 'mx-1'
                },
                {
                  type: 'default',
                  type: 'text',
                  icon: 'setting',
                  size: 'default',
                  className: 'mx-1'

                },
              ]
            },
            defaultValue: [
              {
                id: '111',
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown',
              },
              {
                id: '111',
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown',
              },
            ],
            fieldArray: {
              fieldGroup: [
                {
                  key: 'title',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['form'],
                  templateOptions: {
                    label: '规则名称',
                    tooltipTitle: '目标的服务对象',
                    tooltipIcon: 'question-circle',
                    layout : 'horizontal',
                    placeholder: '给目标起个名字'
                  }
                },
                {
                  key: 'date',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['form'],
                  templateOptions: {
                    label: '描述',
                    layout : 'horizontal',
                    placeholder: '请输入'
                  }
                },
                {
                  key: 'des',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['form'],
                  templateOptions: {
                    label: '服务调用次数',
                    layout : 'horizontal'
                  }
                },
                {
                  key: 'standard',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['form'],
                  templateOptions: {
                    label: '状态',
                    layout : 'horizontal',
                    placeholder: '请选择'
                  }
                },
                {
                  key: 'customer',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['form'],
                  templateOptions: {
                    label: '上次调度时间',
                    layout : 'horizontal',
                    placeholder: '请输入',
                  }
                },
                {
                  type: 'button-group',
                  className: 'col-3',
                  wrappers: ['form'],
                  templateOptions: {
                    label: '上次调度时间',
                    layout : 'horizontal',
                    placeholder: '请输入',
                    options: [
                      {
                        text: '配置'
                      },
                      {
                        text: '订阅警告'
                      }
                    ]
                  }
                },
              ]
            }
          }
        ]
      },
    ],
    info: {
      title: '查询表格',
    }
  },
]

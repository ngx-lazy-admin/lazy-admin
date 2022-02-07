
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
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
              toolbarOptions: [
                {
                  text: '新建',
                  type: 'primary',
                  className: 'me-auto',
                  size: 'default',
                  icon: 'plus',
                },
                {
                  type: 'default',
                  icon: 'redo',
                  type: 'text',
                  size: 'default',
                  className: 'mx-1',
                  options: [{
                    label: '111',
                    value: '222'
                  }],
                },
                {
                  type: 'default',
                  type: 'text',
                  icon: 'column-height',
                  size: 'default',
                  className: 'mx-1',
                  options: [{
                    label: '222',
                    value: '222'
                  }],
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
                id: '1',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '2',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '3',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '4',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '5',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '6',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '7',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '8',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '9',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '10',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '11',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '12',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '13',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '14',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '15',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '16',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '17',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
              {
                id: '18',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown',
              },
            ],
            fieldArray: {
              fieldGroup: [
                {
                  key: 'name',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '规则名称',
                    tooltipTitle: '目标的服务对象',
                    tooltipIcon: 'question-circle',
                    layout : 'horizontal',
                    placeholder: '给目标起个名字'
                  }
                },
                {
                  key: 'des',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '描述',
                    layout : 'horizontal',
                    placeholder: '请输入'
                  }
                },
                {
                  key: 'timer',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '服务调用次数',
                    layout : 'horizontal'
                  }
                },
                {
                  key: 'status',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '状态',
                    layout : 'horizontal',
                    placeholder: '请选择'
                  }
                },
                {
                  key: 'date',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '上次调度时间',
                    layout : 'horizontal',
                    placeholder: '请输入',
                  }
                },
                {
                  type: 'button-group',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '操作',
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
  {
    id: 'basic',
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
    ],
    info: {
      title: '标准列表',
    }
  },
  {
    id: 'card',
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
        type: 'list',
        key: 'data',
        className: "row",
        templateOptions: {
          showPagination: true,
          pageSize: 20,
          bodyClass: 'row',
          bordered: false,
          bodyStyle: {
            paddingBottom: 0
          },
          toolbarOptions: [
            {
              text: '新建',
              type: 'primary',
              className: 'me-auto',
              size: 'default',
              icon: 'plus',
            },
            {
              type: 'default',
              icon: 'redo',
              type: 'text',
              size: 'default',
              className: 'mx-1',
              options: [{
                label: '111',
                value: '222'
              }],
            },
            {
              type: 'default',
              type: 'text',
              icon: 'column-height',
              size: 'default',
              className: 'mx-1',
              options: [{
                label: '222',
                value: '222'
              }],
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
            id: '1',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '2',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '3',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '4',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '5',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '6',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '7',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '8',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '9',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '10',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '11',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '12',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '13',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '14',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '15',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '16',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '17',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
          {
            id: '18',
            name: 'John Brown',
            status: 'John Brown',
            date: 'John Brown',
            timer: '00001',
            des: 'John Brown',
          },
        ],
        fieldArray: {
          className: 'col-4 px-3 d-block',
          fieldGroup: [
            {
              type: 'card',
              className: "col-12 mt-3",
              templateOptions: {
                title: "查询表格",
              },
              fieldGroup: [
                {
                  key: 'name',
                  type: 'input',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '规则名称',
                    tooltipTitle: '目标的服务对象',
                    tooltipIcon: 'question-circle',
                    layout : 'horizontal',
                    placeholder: '给目标起个名字'
                  }
                },
                {
                  key: 'des',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '描述',
                    layout : 'horizontal',
                    placeholder: '请输入'
                  }
                },
                {
                  key: 'timer',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '服务调用次数',
                    layout : 'horizontal'
                  }
                },
                {
                  key: 'status',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '状态',
                    layout : 'horizontal',
                    placeholder: '请选择'
                  }
                },
                {
                  key: 'date',
                  type: 'input',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '上次调度时间',
                    layout : 'horizontal',
                    placeholder: '请输入',
                  }
                },
                {
                  type: 'button-group',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '操作',
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
            },
          ]
        }
      }
    ],
    info: {
      title: '卡片列表',
      content: '段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。'
    }
  }
]

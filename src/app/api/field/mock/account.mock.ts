export const account = [
  {
    id: 'center',
    fields: [
      {
        key: 'search',
        type: 'card',
        className: "col-4 d-block",
        templateOptions: {
          bodyClass: 'row',
          bodyStyle: {
            paddingBottom: 0
          }
        },
        fieldGroup: [
          {
            key: 'username',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '用户名',
              layout : 'horizontal',
              placeholder: '请输入用户名'
            }
          },
          {
            key: 'phone',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '手机号',
              layout : 'horizontal',
              placeholder: '请输入手机号'
            }
          },
          {
            key: 'email',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '邮箱',
              layout : 'horizontal',
              placeholder: '请输入邮箱'
            }
          },
          {
            key: 'sex',
            type: 'select',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '性别',
              layout : 'horizontal',
              placeholder: '请选择',
              options: [
                {
                  label: '全部',
                  value: '0'
                },
                {
                  label: '男',
                  value: '1'
                },
                {
                  label: '女',
                  value: '2'
                }
              ]
            }
          },
          {
            key: 'account',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '登录账号',
              layout : 'horizontal',
              placeholder: '请输入登录账号',
            }
          },
          {
            key: 'user_id',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '用户ID',
              layout : 'horizontal',
              placeholder: '请输入用户ID',
            }
          },
          {
            key: 'status',
            type: 'select',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '状态',
              layout : 'horizontal',
              placeholder: '请输入用户ID',
              options: [
                {
                  label: '全部',
                  value: '0'
                },
                {
                  label: '正常',
                  value: '1'
                },
                {
                  label: '冻结',
                  value: '2'
                },
                {
                  label: '关闭',
                  value: '3'
                }
              ]
            }
          },
          {
            key: 'create_time',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '创建时间',
              layout : 'horizontal',
              placeholder: '请选择创建时间',
            }
          },
        ]
      },
      {
        type: 'card',
        className: "col-8 d-block",
        templateOptions: {
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'table',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              nzScroll: { x: '1150px', y: '240px' },
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
                  type: 'text',
                  icon: 'redo',
                  size: 'default',
                  className: 'mx-1',
                  options: [{
                    label: '111',
                    value: '222'
                  }],
                },
                {
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
                name: '🐛 [BUG]无法创建工程npm create umi',
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
                  type: 'text',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '用户名',
                    tooltipTitle: '目标的服务对象',
                    tooltipIcon: 'question-circle',
                    layout : 'horizontal',
                    placeholder: '给目标起个名字'
                  }
                },
                {
                  key: 'des',
                  type: 'text',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '登录账号',
                    layout : 'horizontal',
                    placeholder: '请输入'
                  }
                },
                {
                  key: 'timer',
                  type: 'text',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '手机号',

                  }
                },
                {
                  key: 'status',
                  type: 'text',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '邮箱',
                  }
                },
                {
                  key: 'date',
                  type: 'text',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '性别',
                  }
                },
                {
                  type: 'text',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '创建时间',
                  }
                },
                {
                  type: 'list-actions',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '操作',
                    layout : 'horizontal',
                    right: '0',
                    placeholder: '请输入',
                    actionOptions: [
                      {
                        text: '编辑'
                      },
                      {
                        text: '删除'
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
      title: '用户管理',
      content: '页面数据为 Mock 示例数据，非真实数据。'
    }
  },
  {
    id: 'settings',
    fields: [
      {
        key: 'username',
        type: 'card',
        className: 'd-block',
        fieldGroup: [
          {
            type: 'tabs',
            key: 'name',
            className: "d-block",
            templateOptions: {
              nzTabPosition: 'left',
            },
            fieldGroup: [
              {
                key: 'basic',
                type: 'card',
                className: 'd-block',
                templateOptions: {
                  title: '基本设置',
                  borderless: true
                },
                fieldGroup: [
                  {
                    key: 'email',
                    type: 'input',
                    className: 'd-block col-4',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '邮箱',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'nickname',
                    type: 'input',
                    className: 'd-block col-4',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '昵称',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'intro',
                    type: 'input',
                    className: 'd-block col-4',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '个人简介',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'country',
                    type: 'input',
                    className: 'd-block col-4',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '地区/国家',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address1',
                    type: 'input',
                    className: 'd-block col-4',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '所在省市',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address',
                    type: 'input',
                    className: 'd-block col-4',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '街道地址',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'phone',
                    type: 'input',
                    className: 'd-block col-4',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '联系电话',
                      layout: 'vertical'
                    }
                  },
                  {
                    type: 'button',
                    className: 'd-block col-4',
                    templateOptions: {
                      text: '确定',
                      layout: 'vertical',
                      type: 'primary'
                    }
                  },
                ]
              },
              {
                key: 'username',
                type: 'card',
                className: 'd-block',
                templateOptions: {
                  title: '安全设置',
                  borderless: true
                }
              },
              {
                key: 'username',
                type: 'card',
                className: 'd-block',
                templateOptions: {
                  title: '账号绑定',
                  borderless: true
                }
              },
              {
                key: 'username',
                type: 'card',
                className: 'd-block',
                templateOptions: {
                  title: '新消息通知',
                  borderless: true
                }
              },
            ]
          },
        ]
      },
    ],
  },
]

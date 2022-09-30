export const system = [
  {
    id: 'user',
    fields: [
      {
        key: 'search',
        type: 'search-card',
        className: "col-12  d-block",
        templateOptions: {
          matchRouter: true,
          bodyClass: 'row',
          bodyStyle: {
            paddingBottom: 0
          }
        },
        fieldGroup: [
          {
            key: 'username',
            type: 'input',
            className: 'col-12 col-md-6 col-xl-3',
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
            className: 'col-12 col-md-6 col-xl-3',
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
            className: 'col-12 col-md-6 col-xl-3',
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
            className: 'col-12 col-md-6 col-xl-3',
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
            className: 'col-12 col-md-6 col-xl-3',
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
            className: 'col-12 col-md-6 col-xl-3',
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
            className: 'col-12 col-md-6 col-xl-3',
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
            className: 'col-12 col-md-6 col-xl-3',
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
        className: "col-12 mt-3",
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
                  className: '',
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
                  className: '',
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
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '手机号',

                  }
                },
                {
                  key: 'status',
                  type: 'text',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '邮箱',
                  }
                },
                {
                  key: 'date',
                  type: 'text',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '性别',
                  }
                },
                {
                  type: 'text',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '创建时间',
                  }
                },
                {
                  type: 'list-actions',
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
                        text: '删除',
                        danger: true
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
    data: {},
    info: {
      title: '用户管理',
      content: '页面数据为 Mock 示例数据，非真实数据。'
    }
  },
  {
    id: 'menu',
    fields: [
      {
        type: 'card',
        className: "col-4",
        templateOptions: {
        },
        fieldGroup: [
          {
            key: 'search',
            type: 'search-tree',
            className: 'col-12',
            wrappers: ['inline'],
            templateOptions: {
              label: '说明',
            }
          },          
        ]
      },
      {
        type: 'card',
        className: "col-8",
        templateOptions: {
          title: '编辑菜单：带参路由缓存2'
        },
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            wrappers: ['form'],
            templateOptions: {
              label: '类型',
              fixedWidth: '120px'
            }
          },
          {
            key: 'title',
            type: 'input',
            wrappers: ['form'],
            templateOptions: {
              label: '标题',
              fixedWidth: '120px'

            }
          },
          {
            key: 'subtitle',
            type: 'input',
            wrappers: ['form'],
            templateOptions: {
              label: '副标题',
              fixedWidth: '120px'

            }
          },
          {
            key: 'path',
            type: 'input',
            wrappers: ['form'],
            templateOptions: {
              label: '路径',
              fixedWidth: '120px'

            }
          },
          {
            key: 'open_type',
            type: 'radio-group',
            wrappers: ['form'],
            templateOptions: {
              label: '打开方式',
              fixedWidth: '120px',

              options: [
                {
                  label: '当前窗口',
                  value: 'self'
                },
                {
                  label: '当前窗口',
                  value: 'blank'
                },
              ]
            }
          },
          {
            key: 'divider',
            type: 'switch',
            wrappers: ['form'],
            templateOptions: {
              label: '分割线',
              right: '0',
              fixedWidth: '120px',

              tooltipTitle: '目标的服务对象',
              tooltipIcon: 'question-circle',
              actionOptions: [
                {
                  text: '菜单权限'
                },
                {
                  text: '编辑'
                },
                {
                  text: '删除'
                }
              ]
            }
          },
          {
            key: 'icon',
            type: 'input',

            wrappers: ['form'],
            templateOptions: {
              label: '图标',
              fixedWidth: '120px'
            }
          },
          {
            key: 'menu_role',
            type: 'input',

            wrappers: ['form'],
            templateOptions: {
              label: '菜单权限',
              tooltipTitle: '详见文档: 权鉴',
              tooltipIcon: 'question-circle',
              fixedWidth: '120px',
              Placeholder: '权限, 逗号分隔'
            }
          },
          {
            type: 'button-group',

            wrappers: ['form'],
            templateOptions: {
              fixedWidth: '120px',
              noColon: true,
              options: [
                {
                  text: '保存修改',
                  size: 'default'
                },
                {
                  text: '重置',
                  size: 'default',
                  type: 'default'
                }
              ]
            }
          },
        ]
      },
    ],
    info: {
      title: '菜单权限管理',
      content: '页面数据为 Mock 示例数据，非真实数据。'
    }
  },
  {
    id: 'role',
    fields: [
      {
        key: 'search',
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
            key: 'role',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '角色名称',
              layout : 'horizontal',
              placeholder: '请输入角色名称'
            }
          },
          {
            key: 'explain',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '说明',
              layout : 'horizontal',
              placeholder: '请输入说明'
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
              placeholder: '请选择创建时间'
            }
          },
          {
            key: 'update_time',
            type: 'select',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '更新时间',
              layout : 'horizontal',
              placeholder: '请选择更新时间'
            }
          },
          {
            key: 'default',
            type: 'input',
            className: 'col-12 col-md-3',
            wrappers: ['form'],
            templateOptions: {
              label: '是否默认角色',
              layout : 'horizontal',
              placeholder: '请选择更新时间',
            }
          }
        ]
      },
      {
        type: 'card',
        className: "col-12 mt-3",
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
                  text: '添加角色',
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
                  icon: 'full',
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
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '角色名称',
                  }
                },
                {
                  key: 'des',
                  type: 'text',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '说明',
                  }
                },
                {
                  key: 'timer',
                  type: 'text',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '创建时间',
                  }
                },
                {
                  key: 'status',
                  type: 'text',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '更新时间',
                  }
                },
                {
                  key: 'date',
                  type: 'text',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '是否默认角色',
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '操作',
                    right: '0',
                    actionOptions: [
                      {
                        text: '菜单权限'
                      },
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
      title: '角色权限管理',
      content: '页面数据为 Mock 示例数据，非真实数据。'
    }
  },
  {
    id: 'form',
    fields: [
      {
        id: 'user',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名",
          required: true,
          placeholder: '姓名',
          readonly: true,
          nzShowArrow: false,
          status: 'wait',
          configOptions: [
            {
              label: 'Finished',
              description: 'This is a description.',
              subtitle: 'nzSubtitle'
            },
            {
              label: 'In Progress',
              description: 'This is a description.'
            },
            {
              label: 'Waiting',
              description: 'This is a description.'
            },
          ]
        }
      },
    ],
    info: {
      title: '表单管理',
      content: '表单设计和分析'
    }
  }
]

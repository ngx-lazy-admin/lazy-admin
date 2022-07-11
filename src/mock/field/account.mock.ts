export const account = [
  {
    id: 'center',
    fields: [
      {
        key: 'search',
        type: 'card',
        className: "col-md-4 col-12 mb-3 d-block",
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
            className: 'col-12',
            wrappers: ['form'],
            templateOptions: {
              label: '用户名',
              layout : 'vertical',
              placeholder: '请输入用户名'
            }
          },
          {
            key: 'phone',
            type: 'input',
            className: 'col-12',
            wrappers: ['form'],
            templateOptions: {
              label: '标签',
              layout : 'vertical',
              placeholder: '请输入手机号'
            }
          },
          {
            key: 'email',
            type: 'input',
            className: 'col-12',
            wrappers: ['form'],
            templateOptions: {
              label: '团队',
              layout : 'vertical',
              placeholder: '请输入邮箱'
            }
          },
        ]
      },
      {
        type: 'card',
        className: "col-md-8 col-12 mb-3 d-block",
        templateOptions: {
        },
        fieldGroup: [
          {
            type: 'tabs',
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
            },
            fieldGroup: [
              {
                key: 'basic',
                type: 'list',
                templateOptions: {
                  showPagination: true,
                  pageSize: 20,
                  bodyClass: 'row',
                  title: '文章',
                  bordered: false,
                  bodyStyle: {
                    paddingBottom: 0
                  },
                },
                defaultValue: [
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 10,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: '🐛 [BUG]无法创建工程npm create umi',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 20,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 30,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 40,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 50,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 60,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 70,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 80,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 90,
                      status: 'active'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    },
                    progress: {
                      percent: 100,
                      status: 'active'
                    }
                  }
                ],
                fieldArray: {
                  className: 'col-12 d-block border-bottom border-light p-3',
                  fieldGroup: [
                    {
                      type: 'card-meta',
                      key: 'meta',
                      className: 'col-4 d-block',
                      templateOptions: {
                        title: '描述',
                        size: 48,
                        shape: 'square',
                        description : '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套',
                      }
                    },
                    {
                      type: 'progress',
                      key: 'progress',
                      className: 'col-1 d-block',
                    },
                    {
                      type: 'progress',
                      key: 'progress',
                      className: 'col-1 d-block',
                    },
                    {
                      type: 'progress',
                      key: 'progress',
                      className: 'col-7  d-block',
                    },
                    {
                      type: 'list-actions',
                      className: 'col-1 px-3 text-end',
                      templateOptions: {
                        maxTagCount: 1,
                        actionOptions: [
                          {
                            text: '编辑'
                          }, {
                            text: '编辑'
                          }, {
                            text: '删除'
                          }
                        ],
                      }
                    }
                  ]
                }
              },
              {
                key: 'basic',
                type: 'card',
                className: 'd-block',
                templateOptions: {
                  title: '应用',
                  borderless: true
                },
                fieldGroup: []
              },
              {
                type: 'list',
                key: 'card',
                templateOptions: {
                  showPagination: true,
                  title: '项目',
                  pageSize: 20,
                  bodyClass: 'row',
                  bordered: false,
                  bodyStyle: {
                    paddingBottom: 0
                  },
                },
                defaultValue: [
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                ],
                fieldArray: {
                  className: 'col-3 d-block',
                  fieldGroup: [
                    {
                      type: 'card',
                      className: "col-12 mb-3",
                      templateOptions: {
                        nzBodyStyle: {
                          padding: 0,
                        },
                        actions: [{
                          icon: 'setting',
                        }, {
                          icon: 'edit',
                        }]
                      },
                      fieldGroup: [
                        {
                          type: 'card-meta',
                          key: 'meta',
                          className: 'm-3 p-2 d-block',
                          templateOptions: {
                            title: '描述',
                            size: 48,
                            description : '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套',
                          }
                        }
                      ]
                    },
                  ]
                }
              },        
            ]
          }
        ]
      },
    ]
  },
  {
    id: 'settings',
    fields: [
      {
        type: 'card',
        className: 'd-block',
        fieldGroup: [
          {
            type: 'tabs',
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
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    defaultValue: 'antdesign@alipay.com',
                    templateOptions: {
                      label: '邮箱',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'nickname',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    defaultValue: 'Serati Ma',
                    templateOptions: {
                      label: '昵称',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'intro',
                    type: 'textarea',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '个人简介',
                      layout: 'vertical',
                      placeholder: '个人简介'
                    }
                  },
                  {
                    key: 'country',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '地区/国家',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address1',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '所在省市',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '街道地址',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'phone',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '联系电话',
                      layout: 'vertical'
                    }
                  },
                  {
                    type: 'button',
                    className: 'd-block col-12 col-md-6',
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
                },
                fieldGroup: [
                  {
                    key: 'email',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    defaultValue: 'antdesign@alipay.com',
                    templateOptions: {
                      title: '账户密码',
                      description: '当前密码强度：强',
                      action: [{
                        text: '修改',
                      }]
                    }
                  },
                  {
                    key: 'nickname',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    defaultValue: 'Serati Ma',
                    templateOptions: {
                      label: '昵称',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'intro',
                    type: 'textarea',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '个人简介',
                      layout: 'vertical',
                      placeholder: '个人简介'
                    }
                  },
                  {
                    key: 'country',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '地区/国家',
                      layout: 'vertical'
                    }
                  },
                ]
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
                },
                fieldGroup: [
                  {
                    key: 'account-password',
                    type: 'switch',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    defaultValue: 'antdesign@alipay.com',
                    templateOptions: {
                      label: '账户密码',
                      de: '账户密码',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'nickname',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    defaultValue: 'Serati Ma',
                    templateOptions: {
                      label: '昵称',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'intro',
                    type: 'textarea',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '个人简介',
                      layout: 'vertical',
                      placeholder: '个人简介'
                    }
                  },
                  {
                    key: 'country',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '地区/国家',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address1',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '所在省市',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '街道地址',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'phone',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    templateOptions: {
                      label: '联系电话',
                      layout: 'vertical'
                    }
                  },
                  {
                    type: 'button',
                    className: 'd-block col-12 col-md-6',
                    templateOptions: {
                      text: '确定',
                      layout: 'vertical',
                      type: 'primary'
                    }
                  },
                ]
              },
            ]
          },
        ]
      },
    ],
  },
]

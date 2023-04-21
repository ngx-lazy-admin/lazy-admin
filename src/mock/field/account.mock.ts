export const account = [
  {
    id: 'center',
    fields: [
      {
        key: 'search',
        type: 'card',
        className: 'col-md-4 col-12 mb-3 d-block',
        props: {
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
            props: {
              label: '用户名',
              layout: 'vertical',
              placeholder: '请输入用户名'
            }
          },
          {
            key: 'phone',
            type: 'input',
            className: 'col-12',
            wrappers: ['form'],
            props: {
              label: '标签',
              layout: 'vertical',
              placeholder: '请输入手机号'
            }
          },
          {
            key: 'email',
            type: 'input',
            className: 'col-12',
            wrappers: ['form'],
            props: {
              label: '团队',
              layout: 'vertical',
              placeholder: '请输入邮箱'
            }
          }
        ]
      },
      {
        type: 'card',
        className: 'col-md-8 col-12 mb-3 d-block',
        props: {},
        fieldGroup: [
          {
            type: 'tabs',
            key: 'table',
            className: 'col-12 d-block',
            props: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              nzScroll: { x: '1150px', y: '240px' },
              bodyStyle: {
                paddingBottom: 0
              }
            },
            fieldGroup: [
              {
                key: 'basic',
                type: 'list',
                props: {
                  showPagination: true,
                  pageSize: 20,
                  bodyClass: 'row',
                  title: '文章',
                  bordered: false,
                  bodyStyle: {
                    paddingBottom: 0
                  }
                },
                defaultValue: [
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
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
                      props: {
                        title: '描述',
                        size: 48,
                        shape: 'square',
                        description:
                          '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套'
                      }
                    },
                    {
                      type: 'progress',
                      key: 'progress',
                      className: 'col-1 d-block'
                    },
                    {
                      type: 'progress',
                      key: 'progress',
                      className: 'col-1 d-block'
                    },
                    {
                      type: 'progress',
                      key: 'progress',
                      className: 'col-7  d-block'
                    },
                    {
                      type: 'list-actions',
                      className: 'col-1 px-3 text-end',
                      props: {
                        maxTagCount: 1,
                        actionOptions: [
                          {
                            text: '编辑'
                          },
                          {
                            text: '编辑'
                          },
                          {
                            text: '删除'
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                key: 'basic',
                type: 'card',
                className: 'd-block',
                props: {
                  title: '应用',
                  borderless: true
                },
                fieldGroup: []
              },
              {
                type: 'list',
                key: 'card',
                props: {
                  showPagination: true,
                  title: '项目',
                  pageSize: 20,
                  bodyClass: 'row',
                  bordered: false,
                  bodyStyle: {
                    paddingBottom: 0
                  }
                },
                defaultValue: [
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  },
                  {
                    meta: {
                      title: 'alipay',
                      description:
                        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    }
                  }
                ],
                fieldArray: {
                  className: 'col-3 d-block',
                  fieldGroup: [
                    {
                      type: 'card',
                      className: 'col-12 mb-3',
                      props: {
                        nzBodyStyle: {
                          padding: 0
                        },
                        actions: [
                          {
                            icon: 'setting'
                          },
                          {
                            icon: 'edit'
                          }
                        ]
                      },
                      fieldGroup: [
                        {
                          type: 'card-meta',
                          key: 'meta',
                          className: 'm-3 p-2 d-block',
                          props: {
                            title: '描述',
                            size: 48,
                            description:
                              '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套'
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
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
            className: 'd-block',
            props: {
              nzTabPosition: 'left'
            },
            fieldGroup: [
              {
                key: 'basic',
                type: 'card',
                className: 'd-block',
                props: {
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
                    props: {
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
                    props: {
                      label: '昵称',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'intro',
                    type: 'textarea',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    props: {
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
                    props: {
                      label: '地区/国家',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address1',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    props: {
                      label: '所在省市',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'address',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    props: {
                      label: '街道地址',
                      layout: 'vertical'
                    }
                  },
                  {
                    key: 'phone',
                    type: 'input',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['form'],
                    props: {
                      label: '联系电话',
                      layout: 'vertical'
                    }
                  },
                  {
                    type: 'button',
                    className: 'd-block col-12 col-md-6',
                    props: {
                      text: '确定',
                      layout: 'vertical',
                      type: 'primary'
                    }
                  }
                ]
              },
              {
                key: 'username',
                type: 'card',
                className: 'd-block',
                props: {
                  title: '安全设置',
                  borderless: true
                },
                fieldGroup: [
                  {
                    key: 'email',
                    type: 'button',
                    className: 'd-block col-12  col-md-6',
                    wrappers: ['list-item'],
                    defaultValue: 'antdesign@alipay.com',
                    props: {
                      title: '账户密码',
                      description: '当前密码强度：强',
                      text: '修改',
                      type: 'link'
                    }
                  },
                  {
                    key: 'nickname',
                    type: 'button',
                    className: 'd-block col-12  col-md-6',
                    wrappers: ['list-item'],
                    defaultValue: 'Serati Ma',
                    props: {
                      title: '密保手机',
                      description: '已绑定手机：138****8293',
                      text: '修改',
                      type: 'link'
                    }
                  },
                  {
                    key: 'secret-protection',
                    type: 'button',
                    className: 'd-block col-12 col-md-6',
                    wrappers: ['list-item'],
                    props: {
                      title: '密保问题',
                      description: '未设置密保问题，密保问题可有效保护账户安全',
                      text: '设置',
                      type: 'link'
                    }
                  },
                  {
                    key: 'secret-protection',
                    type: 'button',
                    className: 'd-block col-12  col-md-6',
                    wrappers: ['list-item'],
                    props: {
                      title: '备用邮箱',
                      description: '已绑定邮箱：ant***sign.com',
                      text: '修改',
                      type: 'link'
                    }
                  },
                  {
                    key: 'secret-protection',
                    type: 'button',
                    className: 'd-block col-12',
                    wrappers: ['list-item'],
                    props: {
                      title: 'MFA 设备',
                      description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
                      text: '绑定',
                      type: 'link'
                    }
                  }
                ]
              },
              {
                key: 'username',
                type: 'card',
                className: 'd-block',
                props: {
                  title: '账号绑定',
                  borderless: true
                },
                fieldGroup: [
                  {
                    key: 'email',
                    type: 'button',
                    className: 'd-block col-12',
                    wrappers: ['list-item'],
                    defaultValue: 'antdesign@alipay.com',
                    props: {
                      avatar: '',
                      title: '绑定淘宝',
                      description: '当前未绑定淘宝账号',
                      text: '绑定',
                      type: 'link'
                    }
                  },
                  {
                    key: 'nickname',
                    type: 'button',
                    className: 'd-block col-12',
                    wrappers: ['list-item'],
                    defaultValue: 'Serati Ma',
                    props: {
                      title: '绑定支付宝',
                      description: '当前未绑定支付宝账号',
                      text: '绑定',
                      type: 'link'
                    }
                  },
                  {
                    key: 'secret-protection',
                    type: 'button',
                    className: 'd-block col-12',
                    wrappers: ['list-item'],
                    props: {
                      title: '绑定钉钉',
                      description: '当前未绑定钉钉账号',
                      text: '绑定',
                      type: 'link'
                    }
                  }
                ]
              },
              {
                key: 'username',
                type: 'card',
                className: 'd-block',
                props: {
                  title: '新消息通知',
                  borderless: true
                },
                fieldGroup: [
                  {
                    key: 'account-message',
                    type: 'switch',
                    className: 'd-block col-12',
                    wrappers: ['list-item'],
                    defaultValue: 'antdesign@alipay.com',
                    props: {
                      avatar: '',
                      title: '账户密码',
                      description: '其他用户的消息将以站内信的形式通知',
                      text: '绑定',
                      type: 'link'
                    }
                  },
                  {
                    key: 'system-message',
                    type: 'switch',
                    className: 'd-block col-12',
                    wrappers: ['list-item'],
                    defaultValue: 'Serati Ma',
                    props: {
                      title: '系统消息',
                      description: '系统消息将以站内信的形式通知',
                      text: '绑定',
                      type: 'link'
                    }
                  },
                  {
                    key: 'todo',
                    type: 'switch',
                    className: 'd-block col-12',
                    wrappers: ['list-item'],
                    props: {
                      title: '待办任务',
                      description: '待办任务将以站内信的形式通知',
                      text: '绑定',
                      type: 'link'
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

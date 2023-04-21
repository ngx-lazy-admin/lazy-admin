// @ts-nocheck

export const list = [
  {
    id: 'table',
    fields: [
      {
        type: 'search-card',
        className: 'col-12  d-block',
        props: {
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
            props: {
              label: '规则名称',
              tooltipTitle: '目标的服务对象',
              layout: 'horizontal',
              placeholder: '给目标起个名字'
            }
          },
          {
            key: 'date',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '描述',
              layout: 'horizontal',
              placeholder: '请输入'
            }
          },
          {
            key: 'des',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '服务调用次数',
              layout: 'horizontal'
            }
          },
          {
            key: 'standard',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '状态',
              layout: 'horizontal',
              placeholder: '请选择'
            }
          },
          {
            key: 'customer',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '上次调度时间',
              layout: 'horizontal',
              placeholder: '请输入'
            }
          }
        ]
      },
      {
        type: 'card',
        className: 'col-12 mt-3',
        props: {
          title: '查询表格'
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'table',
            className: 'col-12 d-block',
            props: {
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
                  icon: 'plus'
                },
                {
                  type: 'default',
                  icon: 'redo',
                  type: 'text',
                  size: 'default',
                  className: 'mx-1',
                  options: [
                    {
                      label: '111',
                      value: '222'
                    }
                  ]
                },
                {
                  type: 'default',
                  type: 'text',
                  icon: 'column-height',
                  size: 'default',
                  className: 'mx-1',
                  options: [
                    {
                      label: '222',
                      value: '222'
                    }
                  ]
                },
                {
                  type: 'default',
                  type: 'text',
                  icon: 'setting',
                  size: 'default',
                  className: 'mx-1'
                }
              ]
            },
            defaultValue: [
              {
                id: '1',
                name: '🐛 [BUG]无法创建工程npm create umi',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '2',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '3',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '4',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '5',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '6',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '7',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '8',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '9',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '10',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '11',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '12',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '13',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '14',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '15',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '16',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '17',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              },
              {
                id: '18',
                name: 'John Brown',
                status: 'John Brown',
                date: 'John Brown',
                timer: '00001',
                des: 'John Brown'
              }
            ],
            fieldArray: {
              fieldGroup: [
                {
                  key: 'name',
                  type: 'input',
                  className: '',
                  wrappers: ['table'],
                  props: {
                    label: '规则名称',
                    tooltipTitle: '目标的服务对象',
                    tooltipIcon: 'question-circle',
                    layout: 'horizontal',
                    placeholder: '给目标起个名字'
                  }
                },
                {
                  key: 'des',
                  type: 'input',
                  className: '',
                  wrappers: ['table'],
                  props: {
                    label: '描述',
                    layout: 'horizontal',
                    placeholder: '请输入'
                  }
                },
                {
                  key: 'timer',
                  type: 'input',
                  className: '',
                  wrappers: ['table'],
                  props: {
                    label: '服务调用次数',
                    layout: 'horizontal'
                  }
                },
                {
                  key: 'status',
                  type: 'input',
                  className: '',
                  wrappers: ['table'],
                  props: {
                    label: '状态',
                    layout: 'horizontal',
                    placeholder: '请选择'
                  }
                },
                {
                  key: 'date',
                  type: 'input',
                  className: '',
                  wrappers: ['table'],
                  props: {
                    label: '上次调度时间',
                    layout: 'horizontal',
                    placeholder: '请输入'
                  }
                },
                {
                  type: 'button-group',
                  className: '',
                  wrappers: ['table'],
                  props: {
                    label: '操作',
                    layout: 'horizontal',
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
                }
              ]
            }
          }
        ]
      }
    ],
    info: {
      title: '查询表格'
    }
  },
  {
    id: 'basic',
    fields: [
      {
        type: 'search-card',
        className: 'col-12  d-block',
        props: {
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
            props: {
              label: '规则名称',
              tooltipTitle: '目标的服务对象',
              layout: 'horizontal',
              placeholder: '给目标起个名字'
            }
          },
          {
            key: 'date',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '描述',
              layout: 'horizontal',
              placeholder: '请输入'
            }
          },
          {
            key: 'des',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '服务调用次数',
              layout: 'horizontal'
            }
          },
          {
            key: 'standard',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '状态',
              layout: 'horizontal',
              placeholder: '请选择'
            }
          },
          {
            key: 'customer',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '上次调度时间',
              layout: 'horizontal',
              placeholder: '请输入'
            }
          }
        ]
      },
      {
        type: 'card',
        className: 'col-12 mt-3',
        props: {},
        fieldGroup: [
          {
            type: 'list',
            key: 'basic',
            props: {
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
                  icon: 'plus'
                },
                {
                  type: 'default',
                  icon: 'redo',
                  type: 'text',
                  size: 'default',
                  className: 'mx-1',
                  options: [
                    {
                      label: '111',
                      value: '222'
                    }
                  ]
                },
                {
                  type: 'default',
                  type: 'text',
                  icon: 'column-height',
                  size: 'default',
                  className: 'mx-1',
                  options: [
                    {
                      label: '222',
                      value: '222'
                    }
                  ]
                },
                {
                  type: 'default',
                  type: 'text',
                  icon: 'setting',
                  size: 'default',
                  className: 'mx-1'
                }
              ]
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
          }
        ]
      }
    ],
    info: {
      title: '标准列表'
    }
  },
  {
    id: 'card',
    fields: [
      {
        type: 'search-card',
        className: 'col-12 d-block mb-2',
        props: {
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
            props: {
              label: '规则名称',
              tooltipTitle: '目标的服务对象',
              layout: 'horizontal',
              placeholder: '给目标起个名字'
            }
          },
          {
            key: 'date',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '描述',
              layout: 'horizontal',
              placeholder: '请输入'
            }
          },
          {
            key: 'des',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '服务调用次数',
              layout: 'horizontal'
            }
          },
          {
            key: 'standard',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '状态',
              layout: 'horizontal',
              placeholder: '请选择'
            }
          },
          {
            key: 'customer',
            type: 'input',
            className: 'col-3',
            wrappers: ['form'],
            props: {
              label: '上次调度时间',
              layout: 'horizontal',
              placeholder: '请输入'
            }
          }
        ]
      },
      {
        key: 'card',
        type: 'list',
        props: {
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
              icon: 'plus'
            },
            {
              type: 'default',
              icon: 'redo',
              type: 'text',
              size: 'default',
              className: 'mx-1',
              options: [
                {
                  label: '111',
                  value: '222'
                }
              ]
            },
            {
              type: 'default',
              type: 'text',
              icon: 'column-height',
              size: 'default',
              className: 'mx-1',
              options: [
                {
                  label: '222',
                  value: '222'
                }
              ]
            },
            {
              type: 'default',
              type: 'text',
              icon: 'setting',
              size: 'default',
              className: 'mx-1'
            }
          ]
        },
        defaultValue: [
          {
            meta: {
              title: 'alipay1',
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
              className: 'col-12',
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
    ],
    info: {
      title: '卡片列表',
      content:
        '段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。'
    }
  }
];

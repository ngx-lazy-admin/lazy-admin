// @ts-nocheck

export const form = [
  {
    id: 'basic-form',
    fields: [
      {
        type: 'card',
        className: 'col-12  d-block',
        props: {
          bodyStyle: {
            maxWidth: '600px',
            margin: '0 auto'
          }
        },
        fieldGroup: [
          {
            key: 'title',
            type: 'input',
            className: 'col-12',
            wrappers: ['form'],
            props: {
              label: '标题',
              layout: 'vertical',
              placeholder: '给目标起个名字',
              required: true
            }
          },
          {
            key: 'date',
            type: 'input',
            className: 'col-12',
            wrappers: ['form'],
            props: {
              label: '起止时间',
              layout: 'vertical',
              required: true
            }
          },
          {
            key: 'des',
            type: 'textarea',
            className: 'col-12',
            wrappers: ['form'],
            props: {
              label: '目标描述',
              placeholder: '请输入你的阶段性工作目标',
              layout: 'vertical',
              required: true
            }
          },
          {
            key: 'standard',
            type: 'textarea',
            className: 'col-12',
            wrappers: ['form'],
            props: {
              label: '衡量标准',
              layout: 'vertical',
              placeholder: '请输入衡量标准'
            }
          },
          {
            key: 'customer',
            type: 'textarea',
            className: 'col-12  ',
            wrappers: ['form'],
            props: {
              label: '客户<span class="text-black text-opacity-50">（选填）</span>',
              tooltipTitle: '目标的服务对象',
              layout: 'vertical',
              placeholder: '请描述你服务的客户，内部客户直接 @姓名／工号'
            }
          },
          {
            key: 'invitee',
            type: 'textarea',
            className: 'col-12  ',
            wrappers: ['form'],
            props: {
              label: '邀评人<span class="text-black text-opacity-50">（选填）</span>',
              layout: 'vertical',
              placeholder: '请直接 @姓名／工号，最多可邀请 5 人',
              labelTip: '目标的服务对象'
            }
          },
          {
            key: 'weight',
            type: 'input-number',
            className: 'col-12 ',
            wrappers: ['form'],
            props: {
              label: '权重<span class="text-black text-opacity-50">（选填）</span>',
              layout: 'vertical'
            }
          },
          {
            key: 'target',
            type: 'radio-group',
            className: 'col-12',
            wrappers: ['form'],
            props: {
              label: '目标公开',
              layout: 'vertical',
              nzExtra: '客户、邀评人默认被分享',
              options: [
                {
                  label: '公开',
                  value: '1'
                },
                {
                  label: '部分公开',
                  value: '2'
                },
                {
                  label: '不公开',
                  value: '3'
                }
              ]
            }
          },
          {
            key: 'colleague',
            type: 'select',
            className: 'col-12',
            wrappers: ['form'],
            expressionProperties: {
              hide: 'model.target != "2"'
            },
            props: {
              layout: 'vertical',
              placeholder: '请选择',
              options: [
                {
                  label: '同事甲',
                  value: '1'
                },
                {
                  label: '同事乙',
                  value: '2'
                },
                {
                  label: '同事丙',
                  value: '3'
                }
              ]
            }
          },
          {
            type: 'button-group',
            className: 'col-12 ',
            props: {
              // layout : 'vertical',
              options: [
                {
                  text: '提交',
                  size: 'default',
                  type: 'primary',
                  click: `(field, _this) => {
                    Object.values(field.parent.formControl.controls).forEach(control => {
                      if (control.invalid) {
                        control.markAsDirty();
                        control.updateValueAndValidity({ onlySelf: true });
                      }
                    });
                    console.log(field.parent.formControl.invalid)
                  }`
                },
                {
                  text: '重置1',
                  size: 'default',
                  type: 'default',
                  click: `(field, _this) => {
                    // field.options.resetModel();
                    console.log(field)
                    console.log('6666666')
                    field.parent.formControl.reset();
                  }`
                }
              ]
            }
          }
        ]
      }
    ],
    info: {
      title: '基础表单',
      content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。'
    }
  },
  {
    id: 'step-form',
    fields: [
      {
        type: 'card',
        className: 'col-12',
        props: {
          bodyStyle: {
            maxWidth: '960px',
            margin: '0 auto'
          }
        },
        fieldGroup: [
          {
            key: 'steps',
            type: 'steps',
            className: 'col-12',
            defaultValue: '1',
            props: {
              options: [
                {
                  title: '填写转账信息',
                  value: '1'
                },
                {
                  title: '确认转账信息',
                  value: '2'
                },
                {
                  title: '完成',
                  value: '3'
                }
              ]
            }
          },
          {
            type: 'card',
            className: 'col-12',
            props: {
              borderless: true,
              bodyStyle: {
                maxWidth: '520px',
                margin: '0 auto'
              }
            },
            fieldGroup: [
              {
                key: 'account_name',
                type: 'select',
                className: 'col-7',
                wrappers: ['form'],
                props: {
                  label: '付款账户',
                  required: true,
                  layout: 'vertical',
                  placeholder: '请选择',
                  options: [
                    {
                      label: 'ant-design@alipay.com',
                      value: 'ant-design@alipay.com'
                    }
                  ]
                },
                validation: {
                  messages: {
                    required: '请选择付款账户'
                  }
                }
              },
              {
                key: 'account_type',
                type: 'select',
                className: 'col-4 d-inline-block',
                wrappers: ['form'],
                props: {
                  label: '收款账户',
                  required: true,
                  layout: 'vertical',
                  placeholder: '请选择',
                  options: [
                    {
                      label: '支付宝',
                      value: '微信'
                    }
                  ]
                },
                validation: {
                  messages: {
                    required: '请选择付款账户'
                  }
                }
              },
              {
                key: 'account_user',
                type: 'input',
                className: 'col-7 ms-2 d-inline-block align-bottom',
                wrappers: ['form'],
                props: {
                  label: '',
                  required: true,
                  layout: 'vertical',
                  placeholder: 'test@example.com'
                },
                validation: {
                  messages: {
                    required: '请输入收款人账户'
                  }
                }
              },
              {
                key: 'username',
                type: 'input',
                className: 'col-7',
                wrappers: ['form'],
                props: {
                  label: '收款人姓名',
                  required: true,
                  layout: 'vertical',
                  placeholder: '请输入收款人姓名'
                },
                validation: {
                  messages: {
                    required: '请输入收款人姓名'
                  }
                }
              },
              {
                key: 'account',
                type: 'input-number',
                className: 'col-7',
                wrappers: ['form'],
                props: {
                  label: '转账金额',
                  required: true,
                  layout: 'vertical'
                },
                validation: {
                  messages: {
                    required: '请输入转账金额'
                  }
                }
              },
              {
                type: 'button',
                className: 'col-7',
                wrappers: ['form'],
                props: {
                  text: '下一步',
                  type: 'primary',
                  type: 'submit'
                }
              }
            ]
          },
          {
            type: 'card',
            className: 'col-12',
            props: {
              borderless: true,
              bodyStyle: {
                maxWidth: '520px',
                margin: '0 auto'
              }
            },
            fieldGroup: [
              {
                type: 'alert',
                className: 'col-12 d-inline-block mb-3',
                props: {
                  message: '确认转账后，资金将直接打入对方账户，无法退回。',
                  showIcon: true
                }
              },
              {
                type: 'descriptions-group',
                className: 'col-12 d-inline-block mb-4 border-bottom pb-4',
                defaultValue: [
                  {
                    title: '付款账户',
                    value: 'ant-design@alipay.com'
                  },
                  {
                    title: '收款账户',
                    value: 'test@example.com'
                  },
                  {
                    title: '收款人姓名',
                    value: 'Alex'
                  },
                  {
                    title: '转账金额',
                    value: '500.00元'
                  }
                ],
                props: {
                  message: '确认转账后，资金将直接打入对方账户，无法退回。',
                  nzColumn: 1,
                  showIcon: true,
                  bordered: true
                }
              },
              {
                type: 'password',
                className: '',
                wrappers: ['form'],
                props: {
                  label: '支付密码',
                  type: 'password',
                  layout: 'vertical'
                },
                validation: {
                  messages: {
                    required: '需要支付密码才能进行支付'
                  }
                }
              },
              {
                type: 'button-group',
                className: 'col-7',
                props: {
                  type: 'primary',
                  options: [
                    {
                      text: '上一步',
                      size: 'default',
                      type: 'submit'
                    },
                    {
                      text: '下一步',
                      size: 'default'
                    }
                  ]
                }
              }
            ]
          },
          {
            type: 'card',
            className: 'col-12',
            props: {
              bodyStyle: {
                maxWidth: '520px',
                margin: '0 auto'
              }
            },
            fieldGroup: [{}]
          }
        ]
      }
    ],
    info: {
      title: '分步表单',
      content: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'
    }
  },
  {
    id: 'advanced-form',
    fields: [
      {
        type: 'card',
        key: 'cangku',
        className: 'col-12',

        props: {
          title: '仓库管理',
          bodyClassName: 'row'
        },
        fieldGroup: [
          {
            key: 'account_name',
            type: 'input',
            className: 'col-3 d-inline-block',
            wrappers: ['form'],
            props: {
              label: '仓库名',
              required: true,
              layout: 'vertical',
              placeholder: '请输入仓库名称'
            },
            validation: {
              messages: {
                required: '请输入仓库名称'
              }
            }
          },
          {
            key: 'account_type',
            type: 'input',
            className: 'col-3 offset-1 d-inline-block',
            wrappers: ['form'],
            props: {
              label: '仓库域名',
              required: true,
              layout: 'vertical',
              placeholder: '请输入'
            },
            validation: {
              messages: {
                required: '请输入仓库域名'
              }
            }
          },
          {
            key: 'account_user',
            type: 'select',
            className: 'col-4 offset-1 d-inline-block',
            wrappers: ['form'],
            props: {
              label: '仓库管理员',
              required: true,
              layout: 'vertical',
              placeholder: 'test@example.com',
              options: [
                {
                  value: 'zhou',
                  label: '周毛毛'
                },
                {
                  value: 'xiao',
                  label: '付小小'
                }
              ]
            },
            validation: {
              messages: {
                required: '请输入收款人账户'
              }
            }
          },
          {
            key: 'username',
            type: 'select',
            className: 'col-3  d-inline-block',
            wrappers: ['form'],
            props: {
              label: '审批人',
              required: true,
              layout: 'vertical',
              placeholder: '请选择管理员',
              options: [
                {
                  value: 'zhou',
                  label: '周毛毛'
                },
                {
                  value: 'xiao',
                  label: '付小小'
                }
              ]
            },
            validation: {
              messages: {
                required: '请输入收款人姓名'
              }
            }
          },
          {
            key: 'account',
            type: 'date-picker',
            className: 'col-3 offset-1 d-inline-block',
            wrappers: ['form'],
            props: {
              label: '生效日期',
              required: true,
              layout: 'vertical'
            },
            validation: {
              messages: {
                required: '请输入转账金额'
              }
            }
          },
          {
            type: 'select',
            className: 'col-4  offset-1  d-inline-block',
            wrappers: ['form'],
            props: {
              label: '仓库类型',
              layout: 'vertical',
              options: [
                {
                  value: 'zhou',
                  label: '周毛毛'
                },
                {
                  value: 'xiao',
                  label: '付小小'
                }
              ]
            }
          }
        ]
      },
      {
        type: 'card',
        key: 'task',
        className: 'col-12 mt-3',

        props: {
          title: '任务管理',
          bodyClassName: 'row'
        },
        fieldGroup: [
          {
            key: 'account_name',
            type: 'input',
            className: 'col-3 d-inline-block',
            wrappers: ['form'],
            props: {
              label: '任务名',
              required: true,
              layout: 'vertical',
              placeholder: '请输入'
            },
            validation: {
              messages: {
                required: '请输入仓库名称'
              }
            }
          },
          {
            key: 'account_type',
            type: 'input',
            className: 'col-3 offset-1 d-inline-block',
            wrappers: ['form'],
            props: {
              label: '任务描述',
              required: true,
              layout: 'vertical',
              placeholder: '请输入'
            },
            validation: {
              messages: {
                required: '请输入仓库域名'
              }
            }
          },
          {
            key: 'account_user',
            type: 'select',
            className: 'col-4 offset-1 d-inline-block',
            wrappers: ['form'],
            props: {
              label: '执行人',
              required: true,
              layout: 'vertical',
              placeholder: 'test@example.com',
              options: [
                {
                  value: 'zhou',
                  label: '周毛毛'
                },
                {
                  value: 'xiao',
                  label: '付小小'
                }
              ]
            },
            validation: {
              messages: {
                required: '请输入收款人账户'
              }
            }
          },
          {
            key: 'username',
            type: 'select',
            className: 'col-3  d-inline-block',
            wrappers: ['form'],
            props: {
              label: '责任人',
              required: true,
              layout: 'vertical',
              placeholder: '请选择管理员',
              options: [
                {
                  value: 'zhou',
                  label: '周毛毛'
                },
                {
                  value: 'xiao',
                  label: '付小小'
                }
              ]
            },
            validation: {
              messages: {
                required: '请输入收款人姓名'
              }
            }
          },
          {
            key: 'account',
            type: 'input-number',
            className: 'col-3 offset-1  d-inline-block',
            wrappers: ['form'],
            props: {
              label: '生效日期',
              required: true,
              layout: 'vertical'
            },
            validation: {
              messages: {
                required: '请输入转账金额'
              }
            }
          },
          {
            type: 'select',
            className: 'col-4  offset-1  d-inline-block',
            wrappers: ['form'],
            props: {
              label: '任务类型',
              layout: 'vertical',
              options: [
                {
                  value: 'public',
                  label: '公开'
                },
                {
                  value: 'primary',
                  label: '私密'
                }
              ]
            }
          }
        ]
      },
      {
        type: 'card',
        key: 'people-man',
        className: 'col-12 mt-3 mb-5',
        props: {
          title: '成员管理',
          bodyClassName: 'row'
        },
        fieldGroup: [
          {
            key: 'people',
            type: 'table',
            defaultValue: [
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              },
              {
                name: 'John Brown',
                number: '	00001',
                department: 'John Brown'
              }
            ],
            fieldArray: {
              fieldGroup: [
                {
                  key: 'name',
                  type: 'input',
                  wrappers: ['table'],
                  props: {
                    label: '成员姓名',
                    required: true,
                    layout: 'vertical',
                    placeholder: '请输入'
                  },
                  validation: {
                    messages: {
                      required: '请输入仓库域名'
                    }
                  }
                },
                {
                  key: 'number',
                  type: 'input',
                  wrappers: ['table'],
                  props: {
                    label: '工号',
                    placeholder: 'test@example.com',
                    options: [
                      {
                        value: 'zhou',
                        label: '周毛毛'
                      },
                      {
                        value: 'xiao',
                        label: '付小小'
                      }
                    ]
                  },
                  validation: {
                    messages: {
                      required: '请输入收款人账户'
                    }
                  }
                },
                {
                  key: 'department',
                  type: 'input',
                  wrappers: ['table'],
                  props: {
                    label: '所属部门',
                    placeholder: 'test@example.com',
                    options: [
                      {
                        value: 'zhou',
                        label: '周毛毛'
                      },
                      {
                        value: 'xiao',
                        label: '付小小'
                      }
                    ]
                  },
                  validation: {
                    messages: {
                      required: '请输入收款人账户'
                    }
                  }
                },
                {
                  type: 'button-group',
                  wrappers: ['table'],
                  props: {
                    label: '操作',
                    placeholder: '请选择管理员',
                    options: [
                      {
                        value: '编辑',
                        text: '编辑',
                        type: 'link'
                      },
                      {
                        value: '删除',
                        text: '删除',
                        type: 'link'
                      },
                      {
                        value: '取消',
                        text: '取消',
                        type: 'link'
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      {
        type: 'group',
        key: 'operation',
        className: 'd-flex d-inline-block py-4',
        props: {
          bodyClass: 'position-fixed bottom-0 bg-white w-100 border-top d-flex align-items-center justify-content-end right-0 left-0',
          bodyStyle: {
            height: '50px',
            zIndex: 2,
            right: 0,
            paddingLeft: 'var(--sider-width)',
            transition: 'all 0.3s'
          }
        },
        fieldGroup: [
          {
            type: 'checkbox',
            key: 'checkAll',
            className: 'd-inline-block mx-3 me-auto',
            props: {
              text: '全选'
            }
          },
          {
            type: 'button',
            className: 'd-inline-block mx-2',
            props: {
              text: '重置',
              click: `(field) => {
                alert('重置')
                field.parent.parent.formControl.reset();
              }`
            }
          },
          {
            type: 'button',
            className: 'd-inline-block mx-2',
            props: {
              text: '提交',
              type: 'primary',
              click: `() => {
                alert('提交数据')
              }`
            }
          }
        ]
      }
    ],
    info: {
      title: '高级表单',
      content: '高级表单常见于一次性输入和提交大批量数据的场景。'
    }
  }
];

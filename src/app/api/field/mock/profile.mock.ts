
import { FormlyFieldConfig } from "@ngx-formly/core";

export interface configOptions {
  id: string,
  fields: FormlyFieldConfig[],
  info: any,
  data?: any
}

export const profile: configOptions[] = [
  {
    id: 'basic',
    fields: [
      {
        type: 'card',
        className: "col-12",
        fieldGroup: [
          {
            type: 'descriptions',
            key: 'basic',
            className: "col-12 d-inline-block pb-4 mb-4 border-bottom border-light",
            templateOptions: {
              title: '退款申请',
            },
            fieldGroup: [
              {
                key: 'thing_code',
                type: 'text',
                templateOptions: {
                  title: '取货单号',
                },
              },
              {
                key: 'status',
                type: 'text',
                templateOptions: {
                  title: '状态',
                },
              },
              {
                key: 'sale_code',
                type: 'text',
                templateOptions: {
                  title: '销售单号',
                },
              },
              {
                key: 'sub_order',
                type: 'text',
                templateOptions: {
                  title: '子订单',
                },
              }
            ]
          },
          {
            type: 'descriptions',
            key: 'user_info',
            className: "col-12 d-inline-block pb-4 mb-4 border-bottom border-light",
            templateOptions: {
              label: "",
              title: '用户信息',
            },
            fieldGroup: [
              {
                key: 'user',
                type: 'text',
                templateOptions: {
                  title: '用户姓名',
                },
              },
              {
                key: 'phone',
                type: 'text',
                templateOptions: {
                  title: '联系电话',
                },
              },
              {
                key: 'express',
                type: 'text',
                templateOptions: {
                  title: '常用快递',
                },
              },
              {
                key: 'address',
                type: 'text',
                templateOptions: {
                  title: '取货地址',
                },
              },
              {
                key: 'remark',
                type: 'text',
                templateOptions: {
                  title: '备注',
                },
              }
            ]
          },
    
          {
            key: 'goods',
            type: 'table',
            className: "col-12 d-inline-block mb-4",
            templateOptions: {
              title: '退货商品',
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'goods_number',
                  type: 'text',
                  templateOptions: {
                    label: '商品编号',
                  },
                },
                {
                  key: 'goods_name',
                  type: 'text',
                  templateOptions: {
                    label: '商品名称',
                  },
                },
                {
                  key: 'goods_code',
                  type: 'text',
                  templateOptions: {
                    label: '商品条码',
                  },
                },
                {
                  key: 'price',
                  type: 'text',
                  templateOptions: {
                    label: '单价',
                  },
                },
                {
                  key: 'number',
                  type: 'text',
                  templateOptions: {
                    label: '数量（件）',
                  },
                },
                {
                  key: 'total_price',
                  type: 'text',
                  templateOptions: {
                    label: '金额',
                  },
                }
              ]
            }
          },
          {
            type: 'table',
            key: 'progress',
            className: "col-12 d-inline-block mb-4",
            templateOptions: {
              label: "",
              title: '退货进度',
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'time',
                  type: 'text',
                  templateOptions: {
                    label: '时间',
                  },
                },
                {
                  key: 'progress',
                  type: 'text',
                  templateOptions: {
                    label: '当前进度',
                  },
                },
                {
                  key: 'status',
                  type: 'badge',
                  templateOptions: {
                    label: '状态',
                    color: '#f50',
                    status: 'success'
                  },
                },
                {
                  key: 'operation_id',
                  type: 'text',
                  templateOptions: {
                    label: '操作员ID',
                  },
                },
                {
                  key: 'take_up_time',
                  type: 'text',
                  templateOptions: {
                    label: '耗时',
                  },
                }
              ]
            }
          },
        ]
      },
    ],
    info: {
      title: '基础详情页',
      content: '详情页用于展示详情'
    },
    data: {
      basic: {
        thing_code: '1000000000',
        status: '已取货',
        sale_code: '1234123421',
        sub_order: '1000000000'
      },
      user_info: {
        user: '付小小',
        phone: '18100000000',
        express: '菜鸟仓储',
        address: '浙江省杭州市西湖区万塘路18号',
        remark: '无'
      },
      goods: [
        {
          goods_number: '1234561',
          goods_name: '矿泉水 550ml',
          goods_code: '12421432143214321',
          price: '2.00',
          number: '1',
          total_price: '2.00'
        },
        {
          goods_number: '1234561',
          goods_name: '	凉茶 300ml',
          goods_code: '12421432143214321',
          price: '2.00',
          number: '1',
          total_price: '2.00'
        },
        {
          goods_number: '1234561',
          goods_name: '好吃的薯片',
          goods_code: '12421432143214321',
          price: '2.00',
          number: '1',
          total_price: '2.00'
        },
        {
          goods_number: '1234561',
          goods_name: '	特别好吃的蛋卷',
          goods_code: '12421432143214321',
          price: '2.00',
          number: '1',
          total_price: '2.00'
        }
      ],
      progress: [
        {
          time: '2017-10-01 14:10',
          progress: '联系客户',
          status: '进行中',
          operation_id: '取货员 ID1234',
          take_up_time: '5mins'
        },
        {
          time: '2017-10-01 14:10',
          progress: '	取货员出发',
          status: '进行中2',
          operation_id: '取货员 ID12343',
          take_up_time: '5mins'
        },
        {
          time: '2017-10-01 14:10',
          progress: '取货员接单',
          status: '进行中2',
          operation_id: '取货员 ID12343',
          take_up_time: '5mins'
        },
        {
          time: '2017-10-01 14:10',
          progress: '申请审批通过',
          status: '进行中2',
          operation_id: '取货员 ID12343',
          take_up_time: '5mins'
        },
        {
          time: '2017-10-01 14:10',
          progress: '发起退货申请',
          status: '进行中2',
          operation_id: '取货员 ID12343',
          take_up_time: '5mins'
        },
      ]
    }
  },
  {
    id: 'advanced',
    fields: [
      {
        type: 'card',
        key: 'name',
        className: "col-12",
        templateOptions: {
          title: "流程进度",
        },
        fieldGroup: [
          {
            type: 'steps',
            templateOptions: {
              progressDot: true,
              options: [
                {
                  title: '创建项目',
                  subtitle: '曲丽丽',
                  description: '2016-12-12 12:32',
                },
                {
                  title: '部门初审',
                  subtitle: '周毛毛',
                  description: '催一下',
                },
                {
                  title: '财务复核',
                },
                {
                  title: '完成',
                }
              ]
            }
          },

        ]
      },
      {
        type: 'card',
        key: 'name',
        className: "col-12 mb-3 mt-3",
        templateOptions: {
          title: "用户信息",
        },
        fieldGroup: [
          {
            type: 'descriptions',
            key: 'userInfo',
            className: "d-block  mb-4",
            fieldGroup: [
              {
                key: 'thing_code',
                type: 'text',
                templateOptions: {
                  title: '用户姓名',
                },
              },
              {
                key: 'status',
                type: 'text',
                templateOptions: {
                  title: '联系电话',
                },
              },
              {
                key: 'sale_code',
                type: 'text',
                templateOptions: {
                  title: '常用快递',
                },
              },
              {
                key: 'suborder',
                type: 'text',
                templateOptions: {
                  title: '取货地址',
                },
              },
              {
                key: 'suborder',
                type: 'text',
                templateOptions: {
                  title: '备注',
                },
              }
            ]
          },
          {
            type: 'descriptions',
            key: 'userInfo',
            className: "d-block mb-4",
            templateOptions: {
              title: '信息组',
            },
            fieldGroup: [
              {
                key: 'thing_code',
                type: 'text',
                templateOptions: {
                  title: '用户姓名',
                },
              },
              {
                key: 'status',
                type: 'text',
                templateOptions: {
                  title: '联系电话',
                },
              },
              {
                key: 'sale_code',
                type: 'text',
                templateOptions: {
                  title: '常用快递',
                },
              },
              {
                key: 'suborder',
                type: 'text',
                templateOptions: {
                  title: '取货地址',
                },
              },
              {
                key: 'suborder',
                type: 'text',
                templateOptions: {
                  title: '备注',
                },
              }
            ]
          },
          {
            type: 'card',
            templateOptions: {
              title: '多层级信息组',
              type: 'inner'
            },
            fieldGroup: [
                {
                  key: 'thing_code',
                  type: 'descriptions',
                  className: "d-block pb-4 mb-4 border-bottom border-light",
                  templateOptions: {
                    title: '组名称',
                  },
                  fieldGroup: [
                    {
                      key: 'thing_code',
                      type: 'text',
                      templateOptions: {
                        title: '负责人',
                      },
                    },
                    {
                      key: 'status',
                      type: 'text',
                      templateOptions: {
                        title: '角色码',
                      },
                    },
                    {
                      key: 'sale_code',
                      type: 'text',
                      templateOptions: {
                        title: '所属部门',
                      },
                    },
                    {
                      key: 'suborder',
                      type: 'text',
                      templateOptions: {
                        title: '过期时间',
                      },
                    },
                    {
                      key: 'suborder',
                      type: 'text',
                      templateOptions: {
                        title: '描述',
                      },
                    }
                  ]
                },
                {
                  key: 'status',
                  type: 'descriptions',
                  className: "d-block pb-4 mb-4 border-bottom border-light",
                  templateOptions: {
                    title: '组名称',
                  },
                  fieldGroup: [
                    {
                      key: 'thing_code',
                      type: 'text',
                      templateOptions: {
                        title: '负责人',
                      },
                    },
                    {
                      key: 'status',
                      type: 'text',
                      templateOptions: {
                        title: '角色码',
                      },
                    },
                    {
                      key: 'sale_code',
                      type: 'text',
                      templateOptions: {
                        title: '所属部门',
                      },
                    },
                    {
                      key: 'suborder',
                      type: 'text',
                      templateOptions: {
                        title: '过期时间',
                      },
                    },
                    {
                      key: 'suborder',
                      type: 'text',
                      templateOptions: {
                        title: '描述',
                      },
                    }
                  ]
                },
                {
                  key: 'sale_code',
                  type: 'descriptions',
                  className: "d-block mb-4",
                  templateOptions: {
                    title: '组名称',
                  },
                  fieldGroup: [
                    {
                      key: 'thing_code',
                      type: 'text',
                      templateOptions: {
                        title: '负责人',
                      },
                    },
                    {
                      key: 'status',
                      type: 'text',
                      templateOptions: {
                        title: '角色码',
                      },
                    },
                    {
                      key: 'sale_code',
                      type: 'text',
                      templateOptions: {
                        title: '所属部门',
                      },
                    },
                    {
                      key: 'suborder',
                      type: 'text',
                      templateOptions: {
                        title: '过期时间',
                      },
                    },
                    {
                      key: 'suborder',
                      type: 'text',
                      templateOptions: {
                        title: '描述',
                      },
                    }
                  ]
                }
            ]
    
          }
        ]
      },
      {
        type: 'card',
        key: 'name',
        className: "col-12 mb-3",
        templateOptions: {
          title: "用户近半年来电记录",
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'table',
            className: "d-block",
            fieldArray: {
              fieldGroup: [
                {
                  key: 'thing_code',
                  type: 'text',
                  templateOptions: {
                    label: '商品编号',
                  },
                },
                {
                  key: 'status',
                  type: 'text',
                  templateOptions: {
                    label: '商品名称',
                  },
                },
                {
                  key: 'sale_code',
                  type: 'text',
                  templateOptions: {
                    label: '商品条码',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '单价',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '数量（件）',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '金额',
                  },
                }
              ]
            }
          },
        ],
        
      },
      
      {
        type: 'card-tabs',
        key: 'name',
        className: "col-12 mb-3",
        fieldGroup: [
          {
            type: 'table',
            key: 'table',
            className: "d-block",
            templateOptions: {
              title: '操作日志一'
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'thing_code',
                  type: 'text',
                  templateOptions: {
                    label: '商品编号',
                  },
                },
                {
                  key: 'status',
                  type: 'text',
                  templateOptions: {
                    label: '商品名称',
                  },
                },
                {
                  key: 'sale_code',
                  type: 'text',
                  templateOptions: {
                    label: '商品条码',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '单价',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '数量（件）',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '金额',
                  },
                }
              ]
            }
          },
          {
            type: 'table',
            key: 'table',
            className: "d-block",
            templateOptions: {
              title: '操作日志二'
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'thing_code',
                  type: 'text',
                  templateOptions: {
                    label: '商品编号',
                  },
                },
                {
                  key: 'status',
                  type: 'text',
                  templateOptions: {
                    label: '商品名称',
                  },
                },
                {
                  key: 'sale_code',
                  type: 'text',
                  templateOptions: {
                    label: '商品条码',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '单价',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '数量（件）',
                  },
                },
                {
                  key: 'suborder',
                  type: 'text',
                  templateOptions: {
                    label: '金额',
                  },
                }
              ]
            }
          },
        ]
      },
    ],
    info: {
      title: '监控页',
      content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景2。'
    }
  }
]


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
            className: "col-12 d-inline-block pb-5 mb-4 border-bottom border-light",
            templateOptions: {
              label: "",
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
                key: 'suborder',
                type: 'text',
                templateOptions: {
                  title: '子订单',
                },
              }
            ]
          },
          {
            type: 'descriptions',
            key: 'userInfo',
            className: "col-12 d-inline-block pb-5 mb-4 border-bottom border-light",
            templateOptions: {
              label: "",
              title: '用户信息',
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
            type: 'table',
            key: 'table',
            className: "col-12 d-inline-block pb-5 mb-4 border-bottom border-light",
            templateOptions: {
              label: "",
              title: '退货商品',
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
            key: 'progress',
            className: "col-12 d-inline-block pb-5 mb-4 border-bottom border-light",
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
                  type: 'text',
                  templateOptions: {
                    label: '状态',
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
      },
      progress: [
        {
          time: '2017-10-01 14:10',
          progress: '联系客户',
          status: '进行中',
          operation_id: '取货员 ID1234',
          take_up_time: '5mins'
        }
      ]
    }
  },
  {
    id: 'advanced',
    fields: [
      {
        id: 'dashboard',
        type: 'card',
        key: 'name',
        className: "col-12 mb-3",
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
        id: 'dashboard',
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
            className: "col-12 d-inline-block pb-5 mb-4 border-bottom border-light",
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
            className: "col-12 d-inline-block pb-5 mb-4 border-bottom border-light",
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
            },
            fieldGroup: [
                {
                  key: 'thing_code',
                  type: 'descriptions',
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
                  className: "pb-5 mb-3 border-bottom border-light",
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
        id: 'dashboard',
        type: 'card',
        key: 'name',
        className: "col-12 mb-3",
        templateOptions: {
          title: "用户近半年来电记录",
        }
      },
      {
        type: 'card-tabs',
        key: 'name',
        className: "col-12 mb-3",
        templateOptions: {
          title: "用户近半年来电记录",
        }
      },
    ],
    info: {
      title: '监控页',
      content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景2。'
    }
  }
]

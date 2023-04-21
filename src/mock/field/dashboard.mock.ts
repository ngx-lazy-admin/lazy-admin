const data = [
  {
    Date: '2010-01',
    scales: 1998
  },
  {
    Date: '2010-02',
    scales: 1850
  },
  {
    Date: '2010-03',
    scales: 1720
  },
  {
    Date: '2010-04',
    scales: 1818
  },
  {
    Date: '2010-05',
    scales: 1920
  },
  {
    Date: '2010-06',
    scales: 1802
  },
  {
    Date: '2010-07',
    scales: 1945
  },
  {
    Date: '2010-08',
    scales: 1856
  },
  {
    Date: '2010-09',
    scales: 2107
  },
  {
    Date: '2010-10',
    scales: 2140
  },
  {
    Date: '2010-11',
    scales: 2311
  },
  {
    Date: '2010-12',
    scales: 1972
  },
  {
    Date: '2011-01',
    scales: 1760
  },
  {
    Date: '2011-02',
    scales: 1824
  },
  {
    Date: '2011-03',
    scales: 1801
  },
  {
    Date: '2011-04',
    scales: 2001
  },
  {
    Date: '2011-05',
    scales: 1640
  },
  {
    Date: '2011-06',
    scales: 1502
  },
  {
    Date: '2011-07',
    scales: 1621
  },
  {
    Date: '2011-08',
    scales: 1480
  },
  {
    Date: '2011-09',
    scales: 1549
  },
  {
    Date: '2011-10',
    scales: 1390
  },
  {
    Date: '2011-11',
    scales: 1325
  },
  {
    Date: '2011-12',
    scales: 1250
  },
  {
    Date: '2012-01',
    scales: 1394
  },
  {
    Date: '2012-02',
    scales: 1406
  },
  {
    Date: '2012-03',
    scales: 1578
  },
  {
    Date: '2012-04',
    scales: 1465
  },
  {
    Date: '2012-05',
    scales: 1689
  },
  {
    Date: '2012-06',
    scales: 1755
  },
  {
    Date: '2012-07',
    scales: 1495
  },
  {
    Date: '2012-08',
    scales: 1508
  },
  {
    Date: '2012-09',
    scales: 1433
  },
  {
    Date: '2012-10',
    scales: 1344
  },
  {
    Date: '2012-11',
    scales: 1201
  },
  {
    Date: '2012-12',
    scales: 1065
  },
  {
    Date: '2013-01',
    scales: 1255
  },
  {
    Date: '2013-02',
    scales: 1429
  },
  {
    Date: '2013-03',
    scales: 1398
  },
  {
    Date: '2013-04',
    scales: 1678
  },
  {
    Date: '2013-05',
    scales: 1524
  },
  {
    Date: '2013-06',
    scales: 1688
  },
  {
    Date: '2013-07',
    scales: 1500
  },
  {
    Date: '2013-08',
    scales: 1670
  },
  {
    Date: '2013-09',
    scales: 1734
  },
  {
    Date: '2013-10',
    scales: 1699
  },
  {
    Date: '2013-11',
    scales: 1508
  },
  {
    Date: '2013-12',
    scales: 1680
  },
  {
    Date: '2014-01',
    scales: 1750
  },
  {
    Date: '2014-02',
    scales: 1602
  },
  {
    Date: '2014-03',
    scales: 1834
  },
  {
    Date: '2014-04',
    scales: 1722
  },
  {
    Date: '2014-05',
    scales: 1430
  },
  {
    Date: '2014-06',
    scales: 1280
  },
  {
    Date: '2014-07',
    scales: 1367
  },
  {
    Date: '2014-08',
    scales: 1155
  },
  {
    Date: '2014-09',
    scales: 1289
  },
  {
    Date: '2014-10',
    scales: 1104
  },
  {
    Date: '2014-11',
    scales: 1246
  },
  {
    Date: '2014-12',
    scales: 1098
  },
  {
    Date: '2015-01',
    scales: 1189
  },
  {
    Date: '2015-02',
    scales: 1276
  },
  {
    Date: '2015-03',
    scales: 1033
  },
  {
    Date: '2015-04',
    scales: 956
  },
  {
    Date: '2015-05',
    scales: 845
  },
  {
    Date: '2015-06',
    scales: 1089
  },
  {
    Date: '2015-07',
    scales: 944
  },
  {
    Date: '2015-08',
    scales: 1043
  },
  {
    Date: '2015-09',
    scales: 893
  },
  {
    Date: '2015-10',
    scales: 840
  },
  {
    Date: '2015-11',
    scales: 934
  },
  {
    Date: '2015-12',
    scales: 810
  },
  {
    Date: '2016-01',
    scales: 782
  },
  {
    Date: '2016-02',
    scales: 1089
  },
  {
    Date: '2016-03',
    scales: 745
  },
  {
    Date: '2016-04',
    scales: 680
  },
  {
    Date: '2016-05',
    scales: 802
  },
  {
    Date: '2016-06',
    scales: 697
  },
  {
    Date: '2016-07',
    scales: 583
  },
  {
    Date: '2016-08',
    scales: 456
  },
  {
    Date: '2016-09',
    scales: 524
  },
  {
    Date: '2016-10',
    scales: 398
  },
  {
    Date: '2016-11',
    scales: 278
  },
  {
    Date: '2016-12',
    scales: 195
  },
  {
    Date: '2017-01',
    scales: 145
  },
  {
    Date: '2017-02',
    scales: 207
  }
];

export const dashboard = [
  {
    id: 'analysis',
    fields: [
      {
        type: 'group',
        className: 'col-12',
        props: {
          bodyClass: 'row'
        },
        fieldGroup: [
          {
            type: 'card',
            key: 'name1',
            className: 'col-xl-3 col-md-6 col-12 mb-3 d-inline-block',
            props: {
              label: '总销售额1',
              tooltip: '指标说明1'
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                props: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                }
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                props: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px'
                  }
                }
              }
            ]
          },
          {
            type: 'card',
            key: 'name2',
            className: 'col-xl-3 col-md-6 col-12 mb-3  d-inline-block',
            props: {
              label: '访问量',
              tooltip: '指标说明'
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                props: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                }
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                props: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px'
                  }
                }
              }
            ]
          },
          {
            key: 'name3',
            type: 'card',
            className: 'col-xl-3 col-md-6 col-12 mb-3  d-inline-block',
            props: {
              label: '支付笔数',
              tooltip: '指标说明'
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                props: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                }
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                props: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px'
                  }
                }
              }
            ]
          },
          {
            type: 'card',
            key: 'name4',
            className: 'col-xl-3 col-md-6 col-12 mb-3  d-inline-block',
            props: {
              label: '运营效果',
              tooltip: '指标说明'
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                props: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                }
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                props: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  }
                }
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                props: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        type: 'group',
        className: 'col-12',
        props: {
          bodyClass: 'row'
        },
        fieldGroup: [
          {
            type: 'card-tabs',
            className: 'col-lg-8 col-12 mb-3',
            fieldGroup: [
              {
                key: 'data1',
                type: 'g2-plot',
                props: {
                  title: '销售量',
                  config: {
                    padding: 'auto',
                    xField: 'Date',
                    yField: 'scales',
                    xAxis: {
                      type: 'timeCat',
                      tickCount: 6
                    }
                  }
                }
              },
              {
                key: 'data2',
                type: 'g2-plot',
                props: {
                  title: '访问量',
                  config: {
                    padding: 'auto',
                    xField: 'Date',
                    yField: 'scales',
                    xAxis: {
                      type: 'timeCat',
                      tickCount: 6
                    }
                  }
                }
              }
            ]
          },
          {
            type: 'card',
            className: 'col-lg-4 col-12 mb-3',
            props: {
              nzBodyStyle: {
                padding: 0
              }
            },
            fieldGroup: [
              {
                type: 'table',
                key: 'list',
                fieldArray: {
                  fieldGroup: [
                    {
                      key: 'index',
                      type: 'template',
                      props: {
                        label: '排名'
                      }
                    },
                    {
                      key: 'key',
                      type: 'template',
                      props: {
                        label: '搜索关键字'
                      }
                    },
                    {
                      key: 'views',
                      type: 'template',
                      props: {
                        label: '搜索关键字'
                      }
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ],
    data: {
      data1: data,
      data2: data,
      list: [
        {
          index: 1,
          key: '搜索关键字',
          views: '257'
        },
        {
          index: 2,
          key: '搜索关键字',
          views: '711'
        },
        {
          index: 3,
          key: '搜索关键字',
          views: '766'
        },
        {
          index: 4,
          key: '搜索关键字',
          views: '597'
        },
        {
          index: 5,
          key: '搜索关键字',
          views: '133'
        }
      ]
    },
    info: {
      title: '分析页',
      content: '分析页用于统计系统数据, 分析系统动态'
    }
  },
  {
    id: 'monitor',
    fields: [
      {
        type: 'group',
        className: 'col-12',
        fieldGroup: [
          {
            type: 'card',
            key: 'name1',
            className: 'col-md-9 col-sm-6 d-inline-block',
            props: {
              title: '活动实时交易情况'
            },
            fieldGroup: []
          },
          {
            type: 'group',
            className: 'col-md-3 d-inline-block',
            fieldGroup: [
              {
                type: 'card',
                key: 'name2',
                className: 'col-md-12 mb-3 d-inline-block',
                props: {
                  title: '活动情况预测',
                  tooltip: '指标说明'
                },
                fieldGroup: []
              },
              {
                type: 'card',
                key: 'name2',
                className: 'col-md-12 d-inline-block',
                props: {
                  title: '券核效率',
                  tooltip: '指标说明'
                },
                fieldGroup: []
              }
            ]
          }
        ]
      },
      {
        type: 'group',
        className: 'col-12 mt-3',
        fieldGroup: [
          {
            type: 'card',
            className: 'col-6 mb-3',
            fieldGroup: [],
            props: {
              title: '各品类占比'
            }
          },
          {
            type: 'card',
            className: 'col-3 mb-3',
            props: {
              title: '热门搜索',
              nzBodyStyle: {
                padding: 0
              }
            },
            fieldGroup: []
          },
          {
            type: 'card',
            className: 'col-3 mb-3',
            props: {
              title: '资源剩余',

              nzBodyStyle: {
                padding: 0
              }
            },
            fieldGroup: []
          }
        ]
      }
    ],
    info: {
      title: '监控页',
      content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景2。'
    }
  },
  {
    id: 'workplace',
    fields: [
      {
        type: 'group',
        className: 'col-9',
        fieldGroup: [
          {
            type: 'card',
            key: 'name1',
            className: 'col-md-12 mb-3',
            props: {
              title: '进行中的项目'
            },
            fieldGroup: []
          },
          {
            type: 'card',
            key: 'name1',
            className: 'col-md-12 mb-3',
            props: {
              title: '动态'
            },
            fieldGroup: []
          }
        ]
      },
      {
        type: 'group',
        className: 'col-3',
        fieldGroup: [
          {
            type: 'card',
            className: 'col-12 mb-3',
            fieldGroup: [],
            props: {
              title: '快速开始 / 便捷导航'
            }
          },
          {
            type: 'card',
            className: 'col-12 mb-3',
            props: {
              title: 'XX 指数'
            },
            fieldGroup: []
          },
          {
            type: 'card',
            className: 'col-12 mb-3',
            props: {
              title: '团队'
            },
            fieldGroup: []
          }
        ]
      }
    ],
    info: {
      title: '工作台',
      content: '工作台用于'
    }
  }
];

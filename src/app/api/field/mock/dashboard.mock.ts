const data = [
	{
		"Date": "2010-01",
		"scales": 1998
	},
	{
		"Date": "2010-02",
		"scales": 1850
	},
	{
		"Date": "2010-03",
		"scales": 1720
	},
	{
		"Date": "2010-04",
		"scales": 1818
	}
]



export const dashboard = [
  {
    id: 'analysis',
    fields: [
      {

        type: 'group',
        className: 'col-12',
        fieldGroup: [
          {
            type: 'card',
            key: 'name1',
            className: "col-md-3 col-sm-6 d-inline-block",
            templateOptions: {
              label: "总销售额1",
              tooltip: '指标说明1',
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                templateOptions: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                },
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                templateOptions: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                  },
                },
              },
            ]
          },
          {
            type: 'card',
            key: 'name2',
            className: "col-md-3 col-sm-6  d-inline-block",
            templateOptions: {
              label: "访问量",
              tooltip: '指标说明',
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                templateOptions: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                },
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                templateOptions: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                  },
                },
              },
            ]
          },
          {
            key: 'name3',
            type: 'card',
            className: "col-md-3 col-sm-6 d-inline-block",
            templateOptions: {
              label: "支付笔数",
              tooltip: '指标说明',
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                templateOptions: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                },
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                templateOptions: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                  },
                },
              },
            ]
          },
          {
            type: 'card',
            key: 'name4',
            className: "col-md-3 col-sm-6 d-inline-block",
            templateOptions: {
              label: "运营效果",
              tooltip: '指标说明',
            },
            fieldGroup: [
              {
                key: '',
                type: 'statistic',
                defaultValue: '1949101',
                className: 'col-12 d-block',
                templateOptions: {
                  title: '总销售额 ',
                  valuePipe: 'number',
                  pipeArgs: '1.0-2'
                },
              },
              {
                key: '',
                type: 'statistic',
                defaultValue: '12% ',
                className: 'col-4 d-inline-block',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-4 d-inline-block',
                defaultValue: '12%',
                templateOptions: {
                  nzPrefix: '周同比',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                    color: '#00000073'
                  },
                },
              },
              {
                key: '',
                type: 'statistic',
                className: 'col-12 mt-2 pt-2 border-top  d-inline-block',
                defaultValue: '12423',
                templateOptions: {
                  nzPrefix: '日销售额',
                  nzSuffixIcon: 'caret-down',
                  nzValueStyle: {
                    fontSize: '14px',
                  },
                },
              },
            ]
          },
        ]
      },
      {
        type: 'group',
        className: 'col-8 mt-3',
        fieldGroup: [ 
          {
            type: 'card-tabs',
            className: "col-12 mb-3",
            fieldGroup: [
              {
                key: 'data1',
                type: 'g2-plot',
                // defaultValue: data,
                templateOptions: {
                  title: '销售量',
                  config: {
                    padding: 'auto',
                    xField: 'Date',
                    yField: 'scales',
                    xAxis: {
                      type: 'timeCat',
                      tickCount: 6,
                    },
                  }
                }
              },
              {
                key: 'data2',
                type: 'g2-plot',
                // defaultValue: data,
                templateOptions: {
                  title: '访问量',
                  config: {
                    padding: 'auto',
                    xField: 'Date',
                    yField: 'scales',
                    xAxis: {
                      type: 'timeCat',
                      tickCount: 6,
                    },
                  }
                }
              },
            ]
          },
          
        ]
      }

    ],
    data: {
      // data1: data,
      // data2: data,
    },
    info: {
      title: '分析页',
      content: '分析页用于统计系统数据, 分析系统动态'
    }
  },
  {
    id: 'monitor',
    fields: [
      
    ],
    info: {
      title: '监控页',
      content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景2。'
    }
  },
  {
    id: 'workplace',
    fields: [

    ],
    info: {
      title: '工作台',
      content: '工作台用于'
    }
  }
]

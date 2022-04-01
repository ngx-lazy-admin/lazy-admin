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
	},
	{
		"Date": "2010-05",
		"scales": 1920
	},
	{
		"Date": "2010-06",
		"scales": 1802
	},
	{
		"Date": "2010-07",
		"scales": 1945
	},
	{
		"Date": "2010-08",
		"scales": 1856
	},
	{
		"Date": "2010-09",
		"scales": 2107
	},
	{
		"Date": "2010-10",
		"scales": 2140
	},
	{
		"Date": "2010-11",
		"scales": 2311
	},
	{
		"Date": "2010-12",
		"scales": 1972
	},
	{
		"Date": "2011-01",
		"scales": 1760
	},
	{
		"Date": "2011-02",
		"scales": 1824
	},
	{
		"Date": "2011-03",
		"scales": 1801
	},
	{
		"Date": "2011-04",
		"scales": 2001
	},
	{
		"Date": "2011-05",
		"scales": 1640
	},
	{
		"Date": "2011-06",
		"scales": 1502
	},
	{
		"Date": "2011-07",
		"scales": 1621
	},
	{
		"Date": "2011-08",
		"scales": 1480
	},
	{
		"Date": "2011-09",
		"scales": 1549
	},
	{
		"Date": "2011-10",
		"scales": 1390
	},
	{
		"Date": "2011-11",
		"scales": 1325
	},
	{
		"Date": "2011-12",
		"scales": 1250
	},
	{
		"Date": "2012-01",
		"scales": 1394
	},
	{
		"Date": "2012-02",
		"scales": 1406
	},
	{
		"Date": "2012-03",
		"scales": 1578
	},
	{
		"Date": "2012-04",
		"scales": 1465
	},
	{
		"Date": "2012-05",
		"scales": 1689
	},
	{
		"Date": "2012-06",
		"scales": 1755
	},
	{
		"Date": "2012-07",
		"scales": 1495
	},
	{
		"Date": "2012-08",
		"scales": 1508
	},
	{
		"Date": "2012-09",
		"scales": 1433
	},
	{
		"Date": "2012-10",
		"scales": 1344
	},
	{
		"Date": "2012-11",
		"scales": 1201
	},
	{
		"Date": "2012-12",
		"scales": 1065
	},
	{
		"Date": "2013-01",
		"scales": 1255
	},
	{
		"Date": "2013-02",
		"scales": 1429
	},
	{
		"Date": "2013-03",
		"scales": 1398
	},
	{
		"Date": "2013-04",
		"scales": 1678
	},
	{
		"Date": "2013-05",
		"scales": 1524
	},
	{
		"Date": "2013-06",
		"scales": 1688
	},
	{
		"Date": "2013-07",
		"scales": 1500
	},
	{
		"Date": "2013-08",
		"scales": 1670
	},
	{
		"Date": "2013-09",
		"scales": 1734
	},
	{
		"Date": "2013-10",
		"scales": 1699
	},
	{
		"Date": "2013-11",
		"scales": 1508
	},
	{
		"Date": "2013-12",
		"scales": 1680
	},
	{
		"Date": "2014-01",
		"scales": 1750
	},
	{
		"Date": "2014-02",
		"scales": 1602
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
            key: 'name',
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
            key: 'name',
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
            key: 'name',
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
            key: 'name',
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
            key: 'name',
            className: "col-12 mb-3",
            fieldGroup: [
              {
                key: 'date',
                type: 'g2-plot',
                defaultValue: data,
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
                key: 'date',
                type: 'g2-plot',
                defaultValue: data,
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

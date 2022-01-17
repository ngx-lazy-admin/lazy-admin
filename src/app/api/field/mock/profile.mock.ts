
export const profile = [
  {
    id: 'basic',
    fields: [
      {
        type: 'descriptions',
        key: 'name',
        className: "col-12 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "",
          title: '退款详情',
          tooltip: '指标说明',
        }
      },
      {
        type: 'card-small',
        key: 'name',
        className: "col-12 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "总销售额",
          tooltip: '指标说明',
        }
      },
      {
        type: 'card-small',
        key: 'name',
        className: "col-12 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "总销售额",
          tooltip: '指标说明',
        }
      },
      {
        type: 'card-small',
        key: 'name',
        className: "col-md-3 col-sm-6 d-inline-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "总销售额",
          tooltip: '指标说明',
        }
      },
    ],
    info: {
      title: '基础详情页',
      content: '详情页用于展示详情'
    }
  },
  {
    id: 'monitor',
    fields: [
      {
        id: 'dashboard',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名1",
          required: true,
          placeholder: '姓名2',
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
      title: '监控页',
      content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景2。'
    }
  },
  {
    id: 'workplace',
    fields: [
      {
        id: 'dashboard',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名1",
          required: true,
          placeholder: '姓名2',
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
      title: '工作台',
      content: '工作台用于'
    }
  }
]

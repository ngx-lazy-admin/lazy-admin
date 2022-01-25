
export const form = [
  {
    id: 'basic-form',
    fields: [
      {
        type: 'card',
        key: 'name',
        className: "col-12  d-block",
        templateOptions: {
          bodyStyle: {
            maxWidth: '600px',
            margin: '0 auto'
          },
        },
        fieldGroup: [
          {
            key: '',
            type: 'input',
            defaultValue: '1949101',
            className: 'col-12 d-block',
            wrappers: ['form'],
            templateOptions: {
              label: '标题',
              layout : 'vertical',
              placeholder: '给目标起个名字'
            },
          },
          {
            key: '',
            type: 'input',
            className: 'col-12 d-inline-block',
            wrappers: ['form'],
            templateOptions: {
              label: '起止时间',
              layout : 'vertical',

            },
          },
          {
            key: '',
            type: 'textarea',
            className: 'col-12 d-inline-block',
            wrappers: ['form'],
            templateOptions: {
              label: '目标描述',
              placeholder: '请输入你的阶段性工作目标',
              layout : 'vertical',


            },
          },
          {
            key: '',
            type: 'textarea',
            className: 'col-12   d-inline-block',
            defaultValue: '12423',
            wrappers: ['form'],
            templateOptions: {
              label: '衡量标准',
              layout : 'vertical',

              placeholder: '请输入衡量标准'
            },
          },
          {
            key: '',
            type: 'textarea',
            className: 'col-12  d-inline-block',
            defaultValue: '12423',
            wrappers: ['form'],
            templateOptions: {
              label: '客户',
              layout : 'vertical',

              labelTip: '目标的服务对象'
            },
          },
          {
            key: '',
            type: 'textarea',
            className: 'col-12  d-inline-block',
            defaultValue: '12423',
            wrappers: ['form'],
            templateOptions: {
              label: '邀评人',
              layout : 'vertical',
              labelTip: '目标的服务对象'
            },
          },
          {
            key: '',
            type: 'input-number',
            className: 'col-12 d-inline-block',
            defaultValue: '0',
            wrappers: ['form'],
            templateOptions: {
              label: '权重',
              layout : 'vertical',
            },
          },
          {
            key: '',
            type: 'radio',
            className: 'col-12 d-inline-block',
            defaultValue: '0',
            wrappers: ['form'],
            templateOptions: {
              label: '目标公开',
              layout : 'vertical',
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
                },
              ]
            },
          },
          {
            key: '',
            type: 'select',
            className: 'col-12 d-inline-block',
            defaultValue: '0',
            wrappers: ['form'],
            templateOptions: {
              label: '权重',
              layout : 'vertical',
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
                },
              ]
            },
          },
        ]
      },
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
        id: 'dashboard',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrapperss: ['inline'],
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
      title: '分步表单',
      content: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'
    }
  },
  {
    id: 'advanced-form',
    fields: [
      {
        id: 'dashboard',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrapperss: ['inline'],
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
      title: '高级表单',
      content: '高级表单常见于一次性输入和提交大批量数据的场景。'
    }
  }
]

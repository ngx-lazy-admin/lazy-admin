
// @ts-nocheck

export const form = [
  {
    id: 'basic-form',
    fields: `[
      {
        type: 'card',
        className: "col-12  d-block",
        templateOptions: {
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
            templateOptions: {
              label: '标题',
              layout : 'vertical',
              placeholder: '给目标起个名字'
            }
          },
          {
            key: 'date',
            type: 'input',
            className: 'col-12',
            wrappers: ['form'],
            templateOptions: {
              label: '起止时间',
              layout : 'vertical'
            }
          },
          {
            key: 'des',
            type: 'textarea',
            className: 'col-12',
            wrappers: ['form'],
            templateOptions: {
              label: '目标描述',
              placeholder: '请输入你的阶段性工作目标',
              layout : 'vertical'
            }
          },
          {
            key: 'standard',
            type: 'textarea',
            className: 'col-12',
            wrappers: ['form'],
            templateOptions: {
              label: '衡量标准',
              layout : 'vertical',
              placeholder: '请输入衡量标准'
            }
          },
          {
            key: 'customer',
            type: 'textarea',
            className: 'col-12  d-inline-block',
            wrappers: ['form'],
            templateOptions: {
              label: '客户<span class="text-black text-opacity-50">（选填）</span>',
              tooltipTitle: '目标的服务对象',
              layout : 'vertical',
              placeholder: '请描述你服务的客户，内部客户直接 @姓名／工号',
            }
          },
          {
            key: 'invitee',
            type: 'textarea',
            className: 'col-12  d-inline-block',
            wrappers: ['form'],
            templateOptions: {
              label: '邀评人<span class="text-black text-opacity-50">（选填）</span>',
              layout : 'vertical',
              placeholder: '请直接 @姓名／工号，最多可邀请 5 人',
              labelTip: '目标的服务对象'
            }
          },
          {
            key: 'weight',
            type: 'input-number',
            className: 'col-12 d-inline-block',
            wrappers: ['form'],
            templateOptions: {
              label: '权重<span class="text-black text-opacity-50">（选填）</span>',
              layout : 'vertical'
            }
          },
          {
            key: 'target',
            type: 'radio-group',
            className: 'col-12 d-inline-block',
            wrappers: ['form'],
            templateOptions: {
              label: '目标公开',
              layout : 'vertical',
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
            key: 'weight',
            type: 'select',
            className: 'col-12 d-inline-block',
            wrappers: ['form'],
            templateOptions: {
              label: '权重',
              layout : 'vertical',
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
            className: 'col-12 d-inline-block',
            templateOptions: {
              layout : 'vertical',
              groupOptions: [
                {
                  label: '提交',
                  value: '1',
                  size: 'default',
                  click: (field, _this) => {
                    console.log(field.form.root.value);
                  }
                },
                {
                  label: '重置',
                  value: '2',
                  size: 'default',
                  type: 'default',
                  click: (field, _this) => {
                    field.options.resetModel();
                  }
                }
              ]
            }
          }
        ]
      }
    ]`,
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

import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const StatisticMockFields = [
  {
    type: 'group',
    className: "d-block mb-3 col-6",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的展示。',
          bodyClass: 'row'
        },
        fieldGroup: [
          {
            key: 'select1',
            type: 'statistic',
            className: "d-inline-block  col-3",
            defaultValue: 112893,
            templateOptions: {
              title: "Active Users",
              valuePipe: 'number',
            }
          },
          {
            key: 'select1',
            type: 'statistic',
            className: "d-inline-block  col-3",
            defaultValue: 112893,
            templateOptions: {
              title: "Account Balance (CNY)",
              valuePipe: 'number',
              valuePipeArgs: '1.0-2'
            }
          },
        ]
      }
    ]
  },
  {
    type: 'group',
    className: "d-block mb-3 col-6",
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '带搜索框',
          description: '展开后可对选项进行搜索。',
        },
        fieldGroup: [
          {
            key: 'select21',
            type: 'statistic',
            className: "d-inline-block  col-3",
            defaultValue: 1128,
            templateOptions: {
              title: "Feedback",
              valuePipe: 'number',
              prefix: '<i class="bi bi-hand-thumbs-up"></i>'
            }
          },
          {
            key: 'select111',
            type: 'statistic',
            className: "d-inline-block  col-3",
            defaultValue: 91,
            templateOptions: {
              title: "Unmerged",
              valuePipe: 'number',
              valuePipeArgs: '1.0-2',
              suffix: '/ 100',

            }
          },
        ]
      }
    ]
  },
]
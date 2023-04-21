import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

export const StatisticMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '基本用法',
          description: '简单的展示。',
          bodyClass: 'row'
        },
        fieldGroup: [
          {
            key: 'statistic-2-1-1',
            type: 'statistic',
            className: 'd-inline-block  col-6',
            defaultValue: 112893,
            props: {
              title: 'Active Users',
              valuePipe: 'number'
            }
          },
          {
            key: 'statistic-2-1-2',
            type: 'statistic',
            className: 'd-inline-block  col-6',
            defaultValue: 112893,
            props: {
              title: 'Account Balance (CNY)',
              valuePipe: 'number',
              valuePipeArgs: '1.0-2'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '在卡片中使用',
          description: '在卡片中展示统计数值。',
          bodyClass: 'row'
        },
        fieldGroup: [
          {
            key: 'statistic-2-2-1',
            type: 'statistic',
            className: 'd-inline-block col-6',
            defaultValue: 11.28,
            props: {
              title: 'Active',
              valuePipe: 'number',
              valuePipeArgs: '1.0-2',
              suffix: '%',
              prefixRef: {
                type: 'icon',
                componentParams: {
                  type: 'arrow-up'
                }
              },
              valueStyle: { color: '#3F8600' }
            }
          },
          {
            key: 'statistic-2-2-3',
            type: 'statistic',
            className: 'd-inline-block col-6',
            defaultValue: 9.3,
            props: {
              title: 'Idle',
              valuePipe: 'number',
              valuePipeArgs: '1.0-2',
              suffix: '%',
              prefixRef: {
                type: 'icon',
                componentParams: {
                  type: 'arrow-down'
                }
              },
              valueStyle: { color: '#CF1322' }
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '带搜索框',
          description: '展开后可对选项进行搜索。'
        },
        fieldGroup: [
          {
            key: 'statistic-2-1-1',
            type: 'statistic',
            className: 'd-inline-block  col-6',
            defaultValue: 1128,
            props: {
              title: 'Feedback',
              valuePipe: 'number',
              prefixRef: {
                type: 'icon',
                componentParams: {
                  type: 'like',
                  click: `(field, $event) => {
                    field.formControl.setValue(field.formControl.value + 1)
                  }`
                }
              }
            }
          },
          {
            key: 'statistic-2-1-2',
            type: 'statistic',
            className: 'd-inline-block  col-6',
            defaultValue: 91,
            props: {
              title: 'Unmerged',
              valuePipe: 'number',
              valuePipeArgs: '1.0-2',
              suffix: '/ 100',
              prefixRef: {
                type: 'icon',
                componentParams: {
                  type: 'like',
                  click: `(field, $event) => {
                    field.formControl.setValue(field.formControl.value + 1)
                  }`
                }
              }
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '倒计时',
          description: '倒计时组件。'
        },
        fieldGroup: [
          {
            key: 'countdown-2-2-1',
            type: 'countdown',
            className: 'd-inline-block  col-6',
            defaultValue: deadline,
            props: {
              title: 'Countdown'
            }
          },
          {
            key: 'countdown-2-2-2',
            type: 'countdown',
            className: 'd-inline-block  col-6',
            defaultValue: deadline,
            props: {
              title: 'Million Seconds',
              format: 'HH:mm:ss:SSS'
            }
          },
          {
            key: 'countdown-2-2-3',
            type: 'countdown',
            className: 'd-inline-block  col-6',
            defaultValue: deadline,
            props: {
              title: 'Day Level',
              format: 'D 天 H 时 m 分 s 秒'
            }
          }
        ]
      }
    ]
  }
];

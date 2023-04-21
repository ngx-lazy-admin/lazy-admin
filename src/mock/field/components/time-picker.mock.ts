import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const TimePickerMockFields = [
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
          description: '点击 nz-time-picker，然后可以在浮层中选择或者输入某一时间。'
        },
        fieldGroup: [
          {
            key: 'time1',
            type: 'time-picker',
            className: 'd-inline-block mx-2',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '三种大小',
          description: '联动 checkbox。'
        },
        fieldGroup: [
          {
            key: 'time2',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              size: 'large'
            }
          },
          {
            key: 'timer2',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {}
          },
          {
            key: 'timer3',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              size: 'small'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '选择时分',
          description:
            'nz-time-picker 浮层中的列会随着 nzFormat 变化，当略去 nzFormat 中的某部分时，浮层中对应的列也会消失。'
        },
        fieldGroup: [
          {
            key: 'time3',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              format: 'HH:mm'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '附加内容',
          description: '在 nz-time-picker 选择框底部显示自定义的内容。'
        },
        fieldGroup: [
          {
            key: 'time4',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              format: 'HH:mm'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '12小时制',
          description: '12小时制的时间选择器，默认format为 h:mm:ss a'
        },
        fieldGroup: [
          {
            key: 'time4',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              use12Hours: true
            }
          },
          {
            key: 'time4',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              format: 'h:mm a',
              use12Hours: true
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {
      title: '基本',
      description: '最简单的用法，在浮层中可以选择或者输入日期。'
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '禁用',
          description: '禁用时间选择。'
        },
        fieldGroup: [
          {
            key: 'time6',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              disabled: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '步长选项',
          description: '可以使用 nzHourStepnzMinuteStepnzSecondStep 按步长展示可选的时分秒。'
        },
        fieldGroup: [
          {
            key: 'time7',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              format: 'HH:mm',
              minuteStep: 15,
              secondStep: 10
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '禁用部分',
          description: '禁用部分时间选择。'
        },
        fieldGroup: [
          {
            key: 'time8',
            type: 'time-picker',
            className: 'd-inline-block m-2',
            props: {
              disabledHours: `(hour) => [1, 2, 3] `,
              disabledMinutes: `(hour) => {
                                if (hour === 4) {
                                return [20, 21, 22, 23, 24, 25];
                              } else {
                                return [];
                              }}
                            `,
              disabledSeconds: `(hour, minute) => {
                                  if (hour === 5 && minute === 1) {
                                    return [20, 21, 22, 23, 24, 25];
                                  } else {
                                    return [];
                                  }
                                }
                              `
            }
          }
        ]
      }
    ]
  }
];

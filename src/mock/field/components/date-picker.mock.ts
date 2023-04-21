export const DatePickerMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '基本',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'week',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'week'
            }
          },
          {
            key: 'month',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'month'
            }
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'year'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '切换不同选择器',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'select1',
            type: 'select',
            className: 'col-2 me-3 d-inline-block',
            defaultValue: 'date',
            props: {
              options: [
                {
                  label: 'Date',
                  value: 'date'
                },
                {
                  label: 'Week',
                  value: 'week'
                },
                {
                  label: 'Month',
                  value: 'month'
                },
                {
                  label: 'Year',
                  value: 'year'
                }
              ],
              change: `(_field, _this) =>
                _field.options.formState.selectMode = _field.formControl.value
              `
            }
          },
          {
            key: 'date3',
            type: 'date-picker',
            className: 'col-3 mb-3 d-inline-block',
            props: {
              mode: 'year'
            },
            expressionProperties: {
              'templateOptions.mode': 'formState.selectMode'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '三种大小',
          description: '三种大小的输入框，若不设置，则为 default。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'week',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'week'
            }
          },
          {
            key: 'month',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'month'
            }
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'year'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '禁用',
          description: '选择框的不可用状态。'
        },
        fieldGroup: [
          {
            key: 'date4',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {
              mode: 'date',
              disabled: true
            }
          },
          {
            key: 'week4',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'week',
              disabled: true
            }
          },
          {
            key: 'month4',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'month',
              disabled: true
            }
          },
          {
            key: 'year4',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'year',
              disabled: true
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
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'week',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'week'
            }
          },
          {
            key: 'month',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'month'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '切换不同选择器',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            props: {}
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            props: {
              mode: 'year'
            }
          }
        ]
      }
    ]
  }
];

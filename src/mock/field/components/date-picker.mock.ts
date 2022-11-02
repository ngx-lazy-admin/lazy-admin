export const DatePickerMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '基本',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {}
          },
          {
            key: 'week',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'week'
            }
          },
          {
            key: 'month',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'month'
            }
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'year'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '切换不同选择器',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'select1',
            type: 'select',
            className: 'col-2 me-3 d-inline-block',
            defaultValue: 'date',
            templateOptions: {
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
            templateOptions: {
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
        templateOptions: {
          title: '三种大小',
          description: '三种大小的输入框，若不设置，则为 default。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {}
          },
          {
            key: 'week',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'week'
            }
          },
          {
            key: 'month',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'month'
            }
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'year'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '禁用',
          description: '选择框的不可用状态。'
        },
        fieldGroup: [
          {
            key: 'date4',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {
              mode: 'date',
              disabled: true
            }
          },
          {
            key: 'week4',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'week',
              disabled: true
            }
          },
          {
            key: 'month4',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'month',
              disabled: true
            }
          },
          {
            key: 'year4',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
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
    templateOptions: {
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
            templateOptions: {}
          },
          {
            key: 'week',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'week'
            }
          },
          {
            key: 'month',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'month'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '切换不同选择器',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '日期格式',
          description: '最简单的用法，在浮层中可以选择或者输入日期。'
        },
        fieldGroup: [
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {}
          },
          {
            key: 'date',
            type: 'date-picker',
            className: 'col-12 mb-3 d-inline-block',
            templateOptions: {}
          },
          {
            key: 'year',
            type: 'date-picker',
            className: 'col-12  mb-3 d-inline-block',
            templateOptions: {
              mode: 'year'
            }
          }
        ]
      }
    ]
  }
];

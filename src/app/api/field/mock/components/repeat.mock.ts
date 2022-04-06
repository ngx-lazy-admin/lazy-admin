import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const RepeatMockFields = [
  {
    type: 'group',
    className: "d-block mb-3 col-12",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '数字输入框',
        },
        fieldGroup: [
          {
            type: 'repeat',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
              toolbarOptions: [
                {
                  text: '新建',
                  type: 'primary',
                  className: 'me-auto',
                  size: 'default',
                  icon: 'plus',
                },
                {
                  type: 'default',
                  icon: 'redo',
                  size: 'default',
                  className: 'mx-1',
                  options: [{
                    label: '111',
                    value: '222'
                  }],
                },
                {
                  type: 'default',
                  icon: 'column-height',
                  size: 'default',
                  className: 'mx-1',
                  options: [{
                    label: '222',
                    value: '222'
                  }],
                },
                {
                  type: 'default',
                  icon: 'setting',
                  size: 'default',
                  className: 'mx-1'
                },
              ]
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'name',
                  type: 'template',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '规则名称',
                    tooltipTitle: '目标的服务对象',
                    tooltipIcon: 'question-circle',
                    layout : 'horizontal',
                    placeholder: '给目标起个名字'
                  }
                },
                {
                  key: 'des',
                  type: 'template',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '描述',
                    layout : 'horizontal',
                    placeholder: '请输入'
                  }
                },
                {
                  key: 'timer',
                  type: 'template',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '服务调用次数',
                    layout : 'horizontal'
                  }
                },
                {
                  key: 'status',
                  type: 'template',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '状态',
                    layout : 'horizontal',
                    placeholder: '请选择'
                  }
                },
                {
                  key: 'date',
                  type: 'template',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '上次调度时间',
                    layout : 'horizontal',
                    placeholder: '请输入',
                  }
                },
                {
                  type: 'template',
                  className: 'col-3',
                  wrappers: ['table'],
                  templateOptions: {
                    label: '操作',
                    layout : 'horizontal',
                    placeholder: '请输入',
                    options: [
                      {
                        text: '配置'
                      },
                      {
                        text: '订阅警告'
                      }
                    ]
                  }
                },
                
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '受控的 Checkbox',
          subtitle: '联动 checkbox。',
        },
        fieldGroup: [
          {
            key: 'input1-3',
            type: 'input',
            className: "d-block mb-2",
            templateOptions: {
              label: "标签",
              placeholder: 'Basic usage',
              disabled: true
            }
          },
          {
            key: 'input1-4',
            type: 'input',
            className: "d-block mb-2",
            templateOptions: {
              label: "large size",
              placeholder: 'large size',
              size: 'large',
              disabled: true
            }
          },
          {
            key: 'checked2',
            type: 'checkbox',
            className: "d-inline-block w-100",
            templateOptions: {
              text: "checked-disabled",
              disabled: 'formState.checked2.disabled'
            },
            expressionProperties: {
              'templateOptions.disabled': 'formState?.checked2?.disabled'
            }
          },
          {
            type: 'button',
            className: "d-inline-block mt-2 ",
            templateOptions: {
              text: "Disabled",
              size: 'small',
              type: 'primary',
              clicks: (_field: FormlyFieldConfig, _this: any) => {
                _field.formControl?.patchValue(!_field.formControl.value)
              },
              click: `(_field, _this) => _field.options.formState.checked2 = {
                  ..._field.options.formState.checked2,
                  disabled: !_field.options.formState?.checked2?.disabled
                }
              `
            }
          },
          {
            type: 'button',
            className: "d-inline-block mx-2 ",
            templateOptions: {
              text: "Checked",
              size: 'small',
              type: 'primary',
              click: `(_field, _this) => _field.form?.get('checked2')?.patchValue(!_field.form?.get('checked2')?.value)`
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '日期格式',
          subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "nzDisabled",
              
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '日期格式',
          subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "nzDisabled",
              
            }
          }
        ]
      },
    ]
  },
]
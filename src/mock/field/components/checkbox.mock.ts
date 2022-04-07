import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const CheckboxMockFields = [
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
          description: '简单的 checkbox',
        },
        fieldGroup: [
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '受控的 Checkbox',
          description: '联动 checkbox。',
        },
        fieldGroup: [
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
          title: '全选',
          description: '在实现全选效果时，你可能会用到 nzIndeterminate 属性。',
        },
        fieldGroup: [
          {
            key: 'checkedAll',
            type: 'checkbox',
            className: "d-block mx-2",
            templateOptions: {
              text: "Check All",
              change: `(_field, _this) => {
                console.log('99')
                _field.form?.get('checkedAll2')?.patchValue(
                  _field.formControl.value ? ['apple', 'Pear', 'Orange'] : []
                )
              }`
            }
          },
          {
            key: 'checkedAll2',
            type: 'checkbox-wrapper',
            className: "d-inline-block mx-2",
            templateOptions: {
              options: [
                {
                  label: 'Apple',
                  value: 'apple'
                },
                {
                  label: 'Pear',
                  value: 'Pear'
                },
                {
                  label: 'Orange',
                  value: 'Orange'
                }
              ]
              
            }
          },
        ]
      },
    ]
  },
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
          title: '不可用',
          description: 'checkbox 不可用。',
        },
        fieldGroup: [
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            defaultValue: false,
            templateOptions: {
              text: "Checkbox",
              disabled: true
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            defaultValue: true,
            templateOptions: {
              text: "Checkbox",
              disabled: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: 'Checkbox 组',
          description: '方便的从数组生成 Checkbox 组。',
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
          title: '布局',
          description: 'nz-checkbox-wrapper 内嵌 nz-checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。',
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
      }
    ]
  }
]
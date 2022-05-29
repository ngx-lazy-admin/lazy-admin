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
            key: 'checkbox-1-1-1',
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
            key: 'checkbox-1-2-1',
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
              click: `(F, T) => F.form?.get('checkbox-1-2-1')?.patchValue(!F.form?.get('checkbox-1-2-1')?.value)`
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
            key: 'checkbox-1-3-1',
            type: 'checkbox',
            className: "d-block mx-2",
            templateOptions: {
              text: "Check All",
              // change: `(F, T) => F.form?.get('checkbox-1-3-2')?.patchValue(F.formControl.value ? ['apple', 'Pear', 'Orange'] : [])`
            }
          },
          {
            key: 'checkbox-1-3-2',
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
              ],
              change: `(F, T) => {
                console.log(F.formControl.value)
                F.form?.get('checkbox-1-3-1')?.patchValue(F.formControl.value.length ? true : false)
              } `
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
            key: 'checkbox-2-1-1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            defaultValue: false,
            templateOptions: {
              text: "Checkbox",
              disabled: true
            }
          },
          {
            key: 'checkbox-2-1-2',
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
            key: 'checkbox-2-2-1',
            type: 'checkbox-group',
            className: "d-block mx-2",
            defaultValue: [
              { label: 'Apple', value: 'Apple', checked: true },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' }
            ]
          },
          {
            key: 'checkbox-2-2-2',
            type: 'checkbox-group',
            className: "d-block mx-2",
            defaultValue: [
              { label: 'Apple', value: 'Apple', disabled: true, checked: true },
              { label: 'Pear', value: 'Pear', disabled: true, },
              { label: 'Orange', value: 'Orange' }
            ]
          },
          {
            key: 'checkbox-2-2-3',
            type: 'checkbox-group',
            className: "d-block mx-2",
            defaultValue: [
              { label: 'Apple', value: 'Apple',  },
              { label: 'Pear', value: 'Pear', checked: true },
              { label: 'Orange', value: 'Orange' }
            ]
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
            key: 'checkbox-2-3-1',
            type: 'checkbox',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
            }
          },
          {
            key: 'checkbox-2-3-2',
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
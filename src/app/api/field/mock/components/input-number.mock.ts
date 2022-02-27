import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const InputNumberMockFields = [
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
          description: '数字输入框。',
        },
        fieldGroup: [
          {
            key: 'input-number',
            type: 'input-number',
            className: "d-inline-block mx-2",
            defaultValue: 3,
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
          subtitle: '联动 checkbox。',
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
      }
    ]
  },
  {
    type: 'group',
    className: "d-block mb-3 col-6",
    templateOptions: {
      title: '基本',
      subtitle: '最简单的用法，在浮层中可以选择或者输入日期。',
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '三种大小',
          description: '三种大小的数字输入框，当 nzSize 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。',
        },
        fieldGroup: [
          {
            key: 'input-number',
            type: 'input-number',
            className: "d-inline-block mx-2",
            defaultValue: 3,
            templateOptions: {
              size: 'large',
            }
          },
          {
            key: 'input-number',
            type: 'input-number',
            className: "d-inline-block mx-2",
            defaultValue: 3,
            templateOptions: {
              size: 'default',
            }
          },
          {
            key: 'input-number',
            type: 'input-number',
            className: "d-inline-block mx-2",
            defaultValue: 3,
            templateOptions: {
              size: 'small',
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '小数',
          description: '和原生的数字输入框一样，value 的精度由 nzStep 的小数位数决定。',
        },
        fieldGroup: [
          {
            key: 'input-number1',
            type: 'input-number',
            className: "d-inline-block mx-2",
            defaultValue: 3,
            templateOptions: {
              placeHolder: 'Digital',
              min: 1,
              max: 10,
              step: .1
            }
          },
        ]
      }
    ]
  },
]
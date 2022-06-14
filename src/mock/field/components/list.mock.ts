import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ListMockFields = [
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
          title: '简单列表',
          description: `列表拥有大、中、小三种尺寸。

          通过设置 size 为 largesmall 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
          
          可通过设置 nzHeader 和 nzFooter，来自定义列表头部和尾部。`,
        },
        fieldGroup: [
          {
            key: 'list-1-1-1',
            type: 'list',
            className: "d-block",
            templateOptions: {
              text: "Checkbox",
            },
            fieldArray: {
              className: 'd-block m-3',
              fieldGroup: [
                {
                  key: 'name',
                  type: 'text',
                  className: "",
                  templateOptions: {
                  }
                },
                {
                  key: 'address',
                  type: 'text',
                  className: "",
                  templateOptions: {
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
  }
]
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

const list: any[] = []

for (let i = 0; i < 20; i++) {
  list.push({
    key: i.toString(),
    title: `content${i + 1}`,
    disabled: i % 3 < 1
  });
}

[2, 3].forEach(idx => (list[idx].direction = 'right'));

export const TransferMockFields = [
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
          description: '最基本的用法，展示了 nzDataSource 每行的渲染函数 nzRender 以及回调函数 nzChange、nzSelectChange 的用法。',
        },
        fieldGroup: [
          {
            key: 'transfer-1-1-1',
            type: 'transfer',
            className: "d-inline-block mx-2",
            defaultValue: list,
            templateOptions: {
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '受控的 transfer',
          description: '联动 transfer。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'transfer',
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
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'transfer',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "transfer",
            }
          },
          {
            key: 'checked1',
            type: 'transfer',
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
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'transfer',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "transfer",
            }
          },
          {
            key: 'checked1',
            type: 'transfer',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "nzDisabled",
              
            }
          }
        ]
      },
    ]
  },
  {
    type: 'group',
    className: "d-block mb-3 col-6",
    templateOptions: {
      title: '基本',
      description: '最简单的用法，在浮层中可以选择或者输入日期。',
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        fieldGroup: [
          {
            key: 'checked2',
            type: 'transfer',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "transfer",
            }
          },
          {
            key: 'checked1',
            type: 'transfer',
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
          title: '切换不同选择器',
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'transfer',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "transfer",
            }
          },
          {
            key: 'checked1',
            type: 'transfer',
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
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'transfer',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "transfer",
            }
          },
          {
            key: 'checked1',
            type: 'transfer',
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
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'transfer',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "transfer",
            }
          },
          {
            key: 'checked1',
            type: 'transfer',
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
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const CommentMockFields = [
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
          description: '简单的 checkbox'
        },
        fieldGroup: [
          {
            key: 'checked1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '受控的 Checkbox',
          description: '联动 checkbox。'
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'checkbox',
            className: 'd-inline-block w-100',
            props: {
              text: 'checked-disabled',
              disabled: 'formState.checked2.disabled'
            },
            expressionProperties: {
              'templateOptions.disabled': 'formState?.checked2?.disabled'
            }
          },
          {
            type: 'button',
            className: 'd-inline-block mt-2 ',
            props: {
              text: 'Disabled',
              size: 'small',
              type: 'primary',
              clicks: (_field: FormlyFieldConfig, _this: any) => {
                _field.formControl?.patchValue(!_field.formControl.value);
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
            className: 'd-inline-block mx-2 ',
            props: {
              text: 'Checked',
              size: 'small',
              type: 'primary',
              click: `(_field, _this) => _field.form?.get('checked2')?.patchValue(!_field.form?.get('checked2')?.value)`
            }
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
            key: 'checked2',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox'
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'nzDisabled'
            }
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
            key: 'checked2',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox'
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'nzDisabled'
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
            key: 'checked2',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox'
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'nzDisabled'
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
            key: 'checked2',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox'
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'nzDisabled'
            }
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
            key: 'checked2',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox'
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'nzDisabled'
            }
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
            key: 'checked2',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox'
            }
          },
          {
            key: 'checked1',
            type: 'checkbox',
            className: 'd-inline-block mx-2',
            props: {
              text: 'nzDisabled'
            }
          }
        ]
      }
    ]
  }
];

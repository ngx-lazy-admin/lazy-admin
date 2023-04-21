import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const InputNumberMockFields = [
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
          description: '数字输入框。'
        },
        fieldGroup: [
          {
            key: 'input-number',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '不可用',
          description: '点击按钮切换可用状态。'
        },
        fieldGroup: [
          {
            key: 'checked2',
            type: 'number',
            className: 'd-inline-block',
            props: {
              text: 'Toggle Disabled',
              disabled: 'formState.checked2.disabled'
            },
            expressionProperties: {
              'templateOptions.disabled': 'formState?.checked2?.disabled'
            }
          },
          {
            type: 'button',
            className: 'd-inline-block mx-2 ',
            props: {
              text: 'Toggle Disabled',
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
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '格式化展示',
          description: '通过 nzFormatter 格式化数字，以展示具有具体含义的数据，往往需要配合 nzParser 一起使用。'
        },
        fieldGroup: [
          {
            key: 'demoValue',
            type: 'number',
            className: 'd-inline-block mx-2',
            props: {
              min: 1,
              max: 100,
              step: 1,
              formatter: "value => '$' + value",
              parser: "value => value.replace(' %', '')"
            }
          },
          {
            key: 'demoValue',
            type: 'number',
            className: 'd-inline-block mx-2',
            props: {
              min: 1,
              max: 100,
              step: 1,
              formatter: "(value) => value + '%'",
              parser: "value => value.replace('$ ', '')"
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
          title: '三种大小',
          description:
            '三种大小的数字输入框，当 nzSize 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。'
        },
        fieldGroup: [
          {
            key: 'input-number',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
            props: {
              size: 'large'
            }
          },
          {
            key: 'input-number',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
            props: {
              size: 'default'
            }
          },
          {
            key: 'input-number',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
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
          title: '小数',
          description: '和原生的数字输入框一样，value 的精度由 nzStep 的小数位数决定。'
        },
        fieldGroup: [
          {
            key: 'input-number1',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
            props: {
              placeHolder: 'Digital',
              min: 1,
              max: 10,
              step: 0.1
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '精度',
          description: '指定 value 的精度'
        },
        fieldGroup: [
          {
            key: 'toFixedValue',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
            props: {
              precision: 2,
              placeHolder: 'toFixed'
            }
          },
          {
            key: 'cutValue',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
            props: {
              precision: 2,
              placeHolder: 'cut off'
            }
          },
          {
            key: 'customFnValue',
            type: 'input-number',
            className: 'd-inline-block mx-2',
            defaultValue: 3,
            props: {
              precision: 2,
              placeHolder: 'cut off'
            }
          }
        ]
      }
    ]
  }
];

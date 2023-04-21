import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const SelectMockFields = [
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
          description: '简单的 select',
          bodyClass: 'row'
        },
        fieldGroup: [
          {
            key: 'select1',
            type: 'select',
            className: 'd-inline-block  col-3',
            defaultValue: 'lucy',
            props: {
              text: 'Checkbox',
              options: [
                {
                  label: 'Jack',
                  value: 'jack'
                },
                {
                  label: 'Lucy',
                  value: 'lucy'
                },
                {
                  label: 'Disabled',
                  value: 'disabled',
                  disabled: true
                }
              ]
            }
          },
          {
            key: 'select2',
            type: 'select',
            className: 'd-inline-block col-3',
            defaultValue: 'lucy',
            props: {
              text: 'Checkbox',
              disabled: true,
              options: [
                {
                  label: 'Jack',
                  value: 'jack'
                },
                {
                  label: 'Lucy',
                  value: 'lucy'
                },
                {
                  label: 'Disabled',
                  value: 'disabled',
                  disabled: true
                }
              ]
            }
          },
          {
            key: 'select3',
            type: 'select',
            className: 'd-inline-block col-3',
            defaultValue: 'lucy',
            props: {
              text: 'Checkbox',
              loading: true,
              options: [
                {
                  label: 'Jack',
                  value: 'jack'
                },
                {
                  label: 'Lucy',
                  value: 'lucy'
                },
                {
                  label: 'Disabled',
                  value: 'disabled',
                  disabled: true
                }
              ]
            }
          },
          {
            key: 'select4',
            type: 'select',
            className: 'd-inline-block col-3',
            defaultValue: 'lucy',
            props: {
              text: 'Checkbox',
              allowClear: true,
              placeholder: 'Choose',
              options: [
                {
                  label: 'Jack',
                  value: 'jack'
                },
                {
                  label: 'Lucy',
                  value: 'lucy'
                },
                {
                  label: 'Disabled',
                  value: 'disabled',
                  disabled: true
                }
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '多选',
          description: '多选，从已有条目中选择，例子中通过 nzMaxTagCount 限制最多显示3个选项。'
        },
        fieldGroup: [
          {
            key: 'selectedMultiple',
            type: 'select',
            className: 'd-inline-block  col-3',
            props: {
              maxTagCount: 3,
              mode: 'multiple',
              plaseholder: 'Please select',
              options: [
                {
                  label: 'Jack',
                  value: 'jack'
                },
                {
                  label: 'Lucy',
                  value: 'lucy'
                },
                {
                  label: 'a10',
                  value: 'a10'
                },
                {
                  label: 'a11',
                  value: 'a11'
                },
                {
                  label: 'a12',
                  value: 'a12'
                }
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '带搜索框',
          description: '展开后可对选项进行搜索。'
        },
        fieldGroup: [
          {
            key: 'select10',
            type: 'select',
            className: 'd-inline-block col-3',
            defaultValue: 'lucy',
            props: {
              showSearch: true,
              allowClear: true,
              placeHolder: 'Select a person',
              options: [
                {
                  label: 'Jack',
                  value: 'jack'
                },
                {
                  label: 'Lucy',
                  value: 'lucy'
                },
                {
                  label: 'Disabled',
                  value: 'disabled',
                  disabled: true
                }
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '联动',
          description: '省市联动是典型的例子。推荐使用 Cascader 组件。'
        },
        fieldGroup: [
          {
            key: 'selectedProvince',
            type: 'select',
            className: 'd-inline-block mx-2  col-3',
            props: {
              text: 'Checkbox',
              value: 'value',
              options: ['Zhejiang', 'Jiangsu']
            }
          },
          {
            key: 'selectedCity',
            type: 'select',
            className: 'd-inline-block mx-2  col-3',
            props: {
              text: 'nzDisabled',
              value: 'value',
              options: ['Zhejiang', 'Jiangsu']
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '带搜索框',
          description: '展开后可对选项进行搜索。'
        },
        fieldGroup: [
          {
            key: 'selectedProvince',
            type: 'select',
            className: 'd-inline-block mx-2  col-3',
            props: {
              text: 'Checkbox',
              value: 'value',
              options: ['Zhejiang', 'Jiangsu']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '三种大小',
          description:
            '三种大小的选择框，当 nzSize 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。'
        },
        fieldGroup: [
          {
            key: 'selectedProvince',
            type: 'select',
            className: 'd-inline-block mx-2  col-3',
            props: {
              text: 'Checkbox',
              value: 'value',
              options: ['Zhejiang', 'Jiangsu']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '分组',
          description: '用 nz-option-group 进行选项分组。'
        },
        fieldGroup: [
          {
            key: 'selectedProvince',
            type: 'select',
            className: 'd-inline-block mx-2  col-3',
            props: {
              text: 'Checkbox',
              value: 'value',
              options: ['Zhejiang', 'Jiangsu']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '搜索框',
          description: '搜索和远程数据结合。'
        },
        fieldGroup: [
          {
            key: 'selectedProvince',
            type: 'select',
            className: 'd-inline-block mx-2 col-3',
            props: {
              text: 'Checkbox',
              value: 'value',
              options: ['Zhejiang', 'Jiangsu']
            }
          }
        ]
      }
    ]
  }
];

import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const SelectMockFields = [
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
          description: '简单的 select',
          bodyClass: 'row'
        },
        fieldGroup: [
          {
            key: 'select1',
            type: 'select',
            className: "d-inline-block  col-3",
            defaultValue: 'lucy',
            templateOptions: {
              text: "Checkbox",
              options: [{
                label: 'Jack',
                value: 'jack'
              }, {
                label: 'Lucy',
                value: 'lucy'
              }, {
                label: 'Disabled',
                value: 'disabled',
                disabled: true
              }]
            }
          },
          {
            key: 'select2',
            type: 'select',
            className: "d-inline-block col-3",
            defaultValue: 'lucy',
            templateOptions: {
              text: "Checkbox",
              disabled: true,
              options: [{
                label: 'Jack',
                value: 'jack'
              }, {
                label: 'Lucy',
                value: 'lucy'
              }, {
                label: 'Disabled',
                value: 'disabled',
                disabled: true
              }]
            }
          },
          {
            key: 'select3',
            type: 'select',
            className: "d-inline-block col-3",
            defaultValue: 'lucy',
            templateOptions: {
              text: "Checkbox",
              loading: true,
              options: [{
                label: 'Jack',
                value: 'jack'
              }, {
                label: 'Lucy',
                value: 'lucy'
              }, {
                label: 'Disabled',
                value: 'disabled',
                disabled: true
              }]
            }
          },
          {
            key: 'select4',
            type: 'select',
            className: "d-inline-block col-3",
            defaultValue: 'lucy',
            templateOptions: {
              text: "Checkbox",
              allowClear: true,
              placeholder: 'Choose',
              options: [{
                label: 'Jack',
                value: 'jack'
              }, {
                label: 'Lucy',
                value: 'lucy'
              }, {
                label: 'Disabled',
                value: 'disabled',
                disabled: true
              }]
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '多选',
          description: '多选，从已有条目中选择，例子中通过 nzMaxTagCount 限制最多显示3个选项。',
        },
        fieldGroup: [
          {
            key: 'select1',
            type: 'select',
            className: "d-inline-block  col-3",
            // defaultValue: ['lucy'],
            templateOptions: {
              maxTagCount: 3,
              mode: 'multiple',
              plaseholder: 'Please select',
              options: [{
                label: 'Jack',
                value: 'jack'
              }, {
                label: 'Lucy',
                value: 'lucy'
              },
              {
                label: 'a10',
                value: 'a10'
              }, {
                label: 'a11',
                value: 'a11',
              },
              {
                label: 'a12',
                value: 'a12',
              },]
            }
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '带搜索框',
          description: '展开后可对选项进行搜索。',
        },
        fieldGroup: [
          {
            key: 'select10',
            type: 'select',
            className: "d-inline-block col-3",
            defaultValue: 'lucy',
            templateOptions: {
              showSearch: true,
              allowClear: true,
              placeHolder: "Select a person",
              options: [{
                label: 'Jack',
                value: 'jack'
              }, {
                label: 'Lucy',
                value: 'lucy'
              }, {
                label: 'Disabled',
                value: 'disabled',
                disabled: true
              }]
            }
          },
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
          title: '切换不同选择器',
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
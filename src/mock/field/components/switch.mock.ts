import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const SwitchMockFields = [
  {
    type: 'group',
    className: "d-block col-6",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '最简单的用法。',
        },
        fieldGroup: [
          {
            type: 'switch',
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
          title: '文字和图标',
          description: '带有文字和图标。',
        },
        fieldGroup: [
          {
            type: 'switch',
            className: "d-inline-block mx-2",
            templateOptions: {
              checkedChildren: '开',
              unCheckedChildren: '关'
            }
          },
          {
            type: 'switch',
            className: "d-inline-block mx-2",
            templateOptions: {
              checkedChildren: '1',
              unCheckedChildren: '0'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '加载中',
          description: '标识开关操作仍在执行中。',
        },
        fieldGroup: [
          {
            key: 'switchLoading',
            type: 'switch',
            className: "d-inline-block mx-2",
            defaultValue: false,
            templateOptions: {
              text: "Checkbox",
              loading: true
            }
          },
          {
            key: 'switchLoading2',
            type: 'switch',
            className: "d-inline-block mx-2",
            defaultValue: true,
            templateOptions: {
              text: "Checkbox",
              loading: true
              
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: "d-block col-6",
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '不可用',
          description: 'Switch 失效状态。',
        },
        fieldGroup: [
          {
            type: 'switch',
            className: "d-inline-block mx-2",
            templateOptions: {
              disabled: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '两种大小',
          description: 'nzSize="small" 表示小号开关。',
        },
        fieldGroup: [
          {
            type: 'switch',
            className: "d-inline-block mx-2",
            templateOptions: {
              size: 'small'
            }
          },
          {
            type: 'switch',
            className: "d-inline-block mx-2",
            templateOptions: {
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '完整控制',
          description: 'Switch 的状态完全由用户接管，不再自动根据点击事件改变数据。',
        },
        fieldGroup: [
          {
            type: 'switch',
            className: "d-inline-block mx-2",
            templateOptions: {
              size: 'small',
              control: true,
              change: `(_field, _this) => {
                _field.templateOptions.loading = true;
                _this.cd.detectChanges();

                setTimeout(() => {
                  _field.templateOptions.loading = false;
                  _field.formControl?.patchValue(!_field.formControl?.value)
                  _this.cd.detectChanges();
                }, 1000)
              } `
            }
          },
        ]
      },
    ]
  },
  {
    key: 'api',
    type: 'simple-table',
    className: 'col-12',
    defaultValue: [
      {
        key: '[ngModel]',
        describe: '指定当前是否选中，可双向绑定',
        type: 'boolean',
        default: 'false',
        config: ''
      },
      {
        key: '[nzCheckedChildren]',
        describe: '选中时的内容',
        type: 'string | TemplateRef<void>',
        default: 'false',
        config: ''
      },
      {
        key: '[nzUnCheckedChildren]',
        describe: '非选中时的内容',
        type: '	string | TemplateRef<void>',
        default: '-',
        config: ''
      },
      {
        key: '[nzDisabled]',
        describe: '	disable 状态',
        type: 'boolean',
        default: '-',
        config: ''
      },
      {
        key: '[nzSize]',
        describe: '开关大小，可选值：defaultsmall',
        type: '',
        default: 'default',
        config: '✅'
      },
      {
        key: '[nzLoading]',
        describe: '	加载中的开关',
        type: 'boolean',
        default: 'false	',
        config: ''
      },
      {
        key: '[nzControl]',
        describe: '	是否完全由用户控制状态',
        type: 'boolean',
        default: 'false	',
        config: ''
      },
      {
        key: '(ngModelChange)',
        describe: '	当前是否选中的回调',
        type: 'EventEmitter<boolean>',
        default: 'false	',
        config: ''
      }
    ],
    templateOptions: {
      columns: [
        {
          label: '参数',
          value: 'key'
        },
        {
          label: '说明',
          value: 'describe',
        },
        {
          label: '类型',
          value: 'type'
        },
        {
          label: '默认值',
          value: 'default',
        },
        {
          label: '全局配置',
          value: 'config'
        }
      ]
    }
  }
]
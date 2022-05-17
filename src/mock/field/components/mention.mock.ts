import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const MentionMockFields = [
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
          description: '基本使用',
        },
        fieldGroup: [
          {
            key: 'mention-1-1-1',
            type: 'mention',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '异步加载',
          description: '匹配内容列表为异步返回时。',
        },
        fieldGroup: [
          {
            key: 'mention-1-2-1',
            type: 'mention',
            className: "d-inline-block w-100",
            templateOptions: {
              suggestions: [],
              onSearchChange: `(field, _this) => {
                field.templateOptions.loading = true;
                field.templateOptions.suggestions = [];
                _this.cd.detectChanges();
                setTimeout(() => {
                  field.templateOptions.suggestions = ['afc163', 'beiCui', 'yiMingHe', 'RaoHai', '中文', 'にほんご'];
                  field.templateOptions.loading = false;
                  _this.cd.detectChanges();
                }, 500); 
              }`
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '自定义触发字符',
          description: '通过 nzPrefix 属性自定义触发字符。默认为 @, 可以定义为数组。',
        },
        fieldGroup: [
          {
            key: 'mention-1-3-1',
            type: 'mention',
            className: "d-inline-block mx-2",
            templateOptions: {
              text: "Checkbox",
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
              prefix: ['#', '@'],
              onSearchChange: `(field, _this, {value, prefix}) => {
                const users = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
                const tags = ['1.0', '2.0', '3.0'];
                console.log(prefix)
                field.templateOptions.suggestions = prefix === '@' ? users : tags;
                _this.cd.detectChanges();
              }`
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
      description: '最简单的用法，在浮层中可以选择或者输入日期。',
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
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
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
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
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
          description: '最简单的用法，在浮层中可以选择或者输入日期。',
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
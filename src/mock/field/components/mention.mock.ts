import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const MentionMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    templateOptions: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '基本用法',
          description: '基本使用'
        },
        fieldGroup: [
          {
            key: 'mention-1-1-1',
            type: 'mention',
            className: 'd-inline-block mx-2',
            templateOptions: {
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '异步加载',
          description: '匹配内容列表为异步返回时。'
        },
        fieldGroup: [
          {
            key: 'mention-1-2-1',
            type: 'mention',
            className: 'd-inline-block w-100',
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
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '自定义触发字符',
          description: '通过 nzPrefix 属性自定义触发字符。默认为 @, 可以定义为数组。'
        },
        fieldGroup: [
          {
            key: 'mention-1-3-1',
            type: 'mention',
            className: 'd-inline-block mx-2',
            templateOptions: {
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
              prefix: ['#', '@'],
              onSearchChange: `(field, _this, {value, prefix}) => {
                const users = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
                const tags = ['1.0', '2.0', '3.0'];
                field.templateOptions.suggestions = prefix === '@' ? users : tags;
                _this.cd.detectChanges();
              }`
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
        templateOptions: {
          title: '向上展开',
          description: '向上展开建议。'
        },
        fieldGroup: [
          {
            key: 'mention-2-1-1',
            type: 'mention',
            className: 'd-inline-block mx-2',
            templateOptions: {
              placement: 'top',
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '自定义建议',
          description: '注意, nzSuggestions 不为 string[] 时，需要提供 nzValueWith。'
        },
        fieldGroup: [
          {
            key: 'mention-2-2-1',
            type: 'mention',
            className: 'd-inline-block mx-2',
            templateOptions: {
              placement: 'top',
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '无效或只读',
          description: '通过 disabled 属性设置是否生效。通过 readOnly 属性设置是否只读。'
        },
        fieldGroup: [
          {
            key: 'mention-2-3-1',
            type: 'mention',
            className: 'd-inline-block mx-2',
            templateOptions: {
              placement: 'top',
              disabled: true,
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
            }
          },
          {
            key: 'mention-2-3-2',
            type: 'mention',
            className: 'd-inline-block mx-2',
            templateOptions: {
              placement: 'top',
              readOnly: true,
              suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
            }
          }
        ]
      }
    ]
  }
];

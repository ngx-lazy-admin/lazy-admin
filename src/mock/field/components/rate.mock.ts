import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const RateMockFields = [
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
          description: '最简单的用法。'
        },
        fieldGroup: [
          {
            key: 'rate',
            type: 'rate',
            className: 'd-inline-block mx-2',

            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '文案展现',
          description: '给评分组件加上文案展示。'
        },
        fieldGroup: [
          {
            key: 'rate2',
            type: 'rate',
            className: 'd-inline-block w-100',
            defaultValue: 3,
            props: {
              tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful']
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '清楚',
          description: '支持允许或者禁用清除。'
        },
        fieldGroup: [
          {
            key: 'rate3',
            type: 'rate',
            className: 'd-inline-block w-100',
            defaultValue: 3,
            wrappers: ['form'],
            props: {
              layout: 'inline',
              label: 'allowClear: true',
              tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
              allowClear: true,
              allowHalf: true
            }
          },
          {
            key: 'rate3',
            type: 'rate',
            className: 'd-inline-block w-100',
            defaultValue: 3,
            wrappers: ['form'],
            props: {
              label: 'allowClear: false',
              layout: 'inline',
              tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
              allowClear: false,
              allowHalf: true
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
          title: '基本',
          description: '支持选中半星。'
        },
        fieldGroup: [
          {
            key: 'rate-2-1-1',
            type: 'rate',
            className: 'd-inline-block mx-2',
            props: {
              allowHalf: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '只读',
          description: '只读，无法进行鼠标交互。'
        },
        fieldGroup: [
          {
            key: 'rate-2-2-1',
            type: 'rate',
            className: 'd-inline-block mx-2',
            props: {
              disabled: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '其他字符',
          description: '可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。'
        },
        fieldGroup: [
          {
            key: 'rate-2-3-1',
            type: 'rate',
            className: 'd-inline-block mx-2',
            props: {
              text: 'Checkbox',
              character: '好'
            }
          }
        ]
      }
    ]
  }
];

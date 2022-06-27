import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const TypographyMockFields = [
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
          description: '基本标签的用法，可以通过添加 nzMode="closeable" 变为可关闭标签。可关闭标签具有 nzOnClose 事件。',
        },
        fieldGroup: [
          {
            key: 'typography-1-1-1',
            type: 'typography',
            className: "d-block mb-2",
            defaultValue: 
`# Introduction
In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
After massive project practice and summaries, Ant Design, a design language for backgroundapplications, is refined by Ant UED Team, which aims to uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources ofdesign and front-end development .

# Guidelines and Resources
We supply a series of design principles, practical patterns and high quality design resources ( Sketch and Axure ), to help people create their product prototypes beautifully and efficiently.

- [Principles](/docs/spec/proximity)
- [Patterns](/docs/pattern/navigation)
- [Resource Download](/docs/resource/download)

Press \`Esc\` to exist...
`,
            templateOptions: {
              text: 'Tag 1',
              label: 'Categories',
              suffix: '收起',
              ellipsis: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: 'Switch开关',
          description: '简单的 tag-check ',
        },
        fieldGroup: [
          {
            key: 'tag-1-2-1',
            type: 'typography',
            className: "d-block mb-2",
            defaultValue: 3,
            templateOptions: {
              text: 'Tag 1'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '多选',
          description: '简单的 tag-check-group',
        },
        fieldGroup: [
          {
            key: 'tag-1-3-1',
            type: 'typography',
            className: "d-block mb-2",
            defaultValue: [
              { label: 'Apple', value: 'Apple', checked: true },
              { label: 'Pear', value: 'Pear', checked: false },
              { label: 'Orange', value: 'Orange', checked: false }
            ],
            templateOptions: {
              text: 'Tag 1',
              label: 'Categories'
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: "d-block mb-3 col-6",
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '多彩标签',
          description: '我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。',
        },
        fieldGroup: [
          {
            key: 'tag-2-3-1',
            type: 'typography',
            className: "d-block mb-2",
            defaultValue: [
              { label: 'magenta', mode: 'default', color: 'magenta' },
              { label: 'red', mode: 'default', color: 'red' },
              { label: 'volcano', mode: 'default', color: 'volcano' },
              { label: 'orange', mode: 'default', color: 'orange' },
              { label: 'gold', mode: 'default', color: 'gold' },
              { label: 'lime', mode: 'default', color: 'lime' },
              { label: 'cyan', mode: 'default', color: 'cyan' },
              { label: 'blue', mode: 'default', color: 'blue' },
              { label: 'geekblue', mode: 'default', color: 'geekblue' },
              { label: 'purple', mode: 'default', color: 'purple' },

              { label: '#f50', mode: 'default', color: '#f50' },
              { label: '#2db7f5', mode: 'default', color: '#2db7f5' },
              { label: '#87d068', mode: 'default', color: '#87d068' },
              { label: '#108ee9', mode: 'default', color: '#108ee9' },

            ],
            templateOptions: {
              text: 'Tag 1',
              label: 'Categories'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '可选择',
          description: '简单的 tag-check-group',
        },
        fieldGroup: [
          {
            key: 'tag-2-3-2',
            type: 'tag-check-group',
            className: "d-block mb-2",
            wrappers: ['form'],
            defaultValue: [
              { label: 'Tag 1', value: 'Tag 1', checked: true },
              { label: 'Tag 2', value: 'Tag 2', checked: false },
              { label: 'Tag 3', value: 'Tag 3', checked: false }
            ],
            templateOptions: {
              text: 'Tag 1',
              layout: 'inline',
              label: 'Categories'
            }
          }
        ]
      },
    ]
  },
]
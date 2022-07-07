import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const CardMockFields = [
  {
    type: 'group',
    className: "d-block mb-3 col-12",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '典型卡片',
          description: '包含标题、内容、操作区域。',
        },
        fieldGroup: [
          {
            type: 'card',
            className: "d-block mb-3",
            templateOptions: {
              title: 'Card title',
              extraActions: [
                {
                  text: 'More',
                  click: `() => {
                    console.log('111')
                  }`
                }
              ]
            },
            fieldGroup: [
              {
                key: 'template1',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
              {
                key: 'template2',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
              {
                key: 'template3',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
            ]
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '无边框',
          description: '在灰色背景上使用无边框的卡片。',
          
        },
        fieldGroup: [
          {
            type: 'card',
            className: "d-block mb-3",
            templateOptions: {
              title: 'Card title',
              borderless: true,
              extraActions: [
                {
                  text: 'More',
                  click: `() => {
                    console.log('111')
                  }`
                }
              ]
            },
            fieldGroup: [
              {
                key: 'template1',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
              {
                key: 'template2',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
              {
                key: 'template3',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
            ]
          },
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '简洁卡片',
          description: '只包含内容区域。',
          borderless: true
        },
        fieldGroup: [
          {
            type: 'card',
            className: "d-block mb-3",
            templateOptions: {
            },
            fieldGroup: [
              {
                key: 'template1',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
              {
                key: 'template2',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
              {
                key: 'template3',
                type: 'template',
                className: "d-block mb-2",
                defaultValue: 'Card content',
              },
            ]
          },
        ]
      }
    ]
  }
]
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const TagMockFields = [
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
          description: '基本标签的用法，可以通过添加 nzMode="closeable" 变为可关闭标签。可关闭标签具有 nzOnClose 事件。'
        },
        fieldGroup: [
          {
            key: 'tag-1-1-1',
            type: 'tag-check-group',
            className: 'd-block mb-2',
            defaultValue: [
              { label: 'Tag1', value: 'Tag1', checked: true },
              { label: 'Link', value: 'Link', checked: false },
              { label: 'Tag 2', value: 'Tag 2', mode: 'closeable' }
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
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: 'Switch开关',
          description: '简单的 tag-check '
        },
        fieldGroup: [
          {
            key: 'tag-1-2-1',
            type: 'tag',
            className: 'd-block mb-2',
            defaultValue: 3,
            templateOptions: {
              text: 'Tag 1'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '多选',
          description: '简单的 tag-check-group'
        },
        fieldGroup: [
          {
            key: 'tag-1-3-1',
            type: 'tag-check-group',
            className: 'd-block mb-2',
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
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '动态添加和删除',
          description: '用数组生成一组标签，可以动态添加和删除。'
        },
        fieldGroup: [
          // {
          //   key: 'tag-group',
          //   type: 'tag-check-group',
          //   className: "d-block mb-2",
          //   templateOptions: {
          //     label: "标签",
          //     placeholder: 'Basic usage',
          //     disabled: true,
          //     options: [
          //       {
          //         text: 'unremovable',
          //         onlyread: true
          //       },
          //       {
          //         text: 'Tag 3',
          //       }
          //     ]
          //   }
          // }
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
          title: '多彩标签',
          description:
            '我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。'
        },
        fieldGroup: [
          {
            key: 'tag-2-3-1',
            type: 'tag-check-group',
            className: 'd-block mb-2',
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
              { label: '#108ee9', mode: 'default', color: '#108ee9' }
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
        className: 'd-block mb-3 col-12',
        templateOptions: {
          title: '可选择',
          description: '简单的 tag-check-group'
        },
        fieldGroup: [
          {
            key: 'tag-2-3-2',
            type: 'tag-check-group',
            className: 'd-block mb-2',
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
      }
    ]
  }
];

import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const PaginationMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-12',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '基本用法',
          description: '基础分页。'
        },
        fieldGroup: [
          {
            key: 'pagination',
            type: 'pagination',
            className: 'd-inline-block mx-2',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '禁用',
          description: '禁用分页'
        },
        fieldGroup: [
          {
            key: 'pagination0',
            type: 'pagination',
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
          title: '更多',
          description: '更多分页'
        },
        fieldGroup: [
          {
            key: 'pagination1',
            type: 'pagination',
            className: 'd-inline-block mx-2',
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '改变',
          description: '改变每页显示条目数。'
        },
        fieldGroup: [
          {
            key: 'pagination2',
            type: 'pagination',
            className: 'd-inline-block mx-2',
            props: {
              showSizeChanger: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '跳转',
          description: '快速跳转到某一页。'
        },
        fieldGroup: [
          {
            key: 'pagination3',
            type: 'pagination',
            className: 'd-inline-block mx-2',
            props: {
              showQuickJumper: true
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '迷你',
          description: '迷你版本。'
        },
        fieldGroup: [
          {
            key: 'pagination4',
            type: 'pagination',
            className: 'd-inline-block mx-2',
            props: {
              showQuickJumper: true,
              showSizeChanger: true,
              size: 'small'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '简洁',
          description: '简单的翻页。'
        },
        fieldGroup: [
          {
            key: 'pagination5',
            type: 'pagination',
            className: 'd-inline-block mx-2',
            props: {
              simple: true
            }
          }
        ]
      }
    ]
  }
];

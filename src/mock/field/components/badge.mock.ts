import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const BadgeMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '基本',
          description: '简单的徽章展示，当 nzCount 为 0 时，默认不显示，但是可以使用 nzShowZero 修改为显示。'
        },
        fieldGroup: [
          {
            type: 'badge',
            className: 'd-inline-block mb-2',
            props: {
              text: 'Primary Button'
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '状态点',
          description: '用于表示状态的小圆点。'
        },
        fieldGroup: [
          {
            type: 'badge',
            className: 'd-inline-block mb-2',
            props: {
              status: 'success'
            }
          },
          {
            type: 'badge',
            className: 'd-inline-block mb-2',
            props: {
              status: 'error'
            }
          },
          {
            type: 'badge',
            className: 'd-inline-block mb-2',
            props: {
              status: 'default'
            }
          },
          {
            type: 'badge',
            className: 'd-inline-block mb-2',
            props: {
              status: 'processing'
            }
          },
          {
            type: 'badge',
            className: 'd-inline-block mb-2',
            props: {
              status: 'warning'
            }
          },
          {
            type: 'badge',
            className: 'd-block mb-2',
            props: {
              status: 'success',
              text: 'success'
            }
          },
          {
            type: 'badge',
            className: 'd-block mb-2',
            props: {
              status: 'error',
              text: 'error'
            }
          },
          {
            type: 'badge',
            className: 'd-block mb-2',
            props: {
              status: 'default',
              text: 'default'
            }
          },
          {
            type: 'badge',
            className: 'd-block mb-2',
            props: {
              status: 'processing',
              text: 'processing'
            }
          },
          {
            type: 'badge',
            className: 'd-block mb-2',
            props: {
              status: 'warning',
              text: 'warning'
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
          title: '独立使用',
          description: `不包裹任何元素，增加 nzStandalone标签后，即是独立使用，可自定样式展现。在右上角的 badge 则限定为红色。`
        },
        fieldGroup: [
          {
            type: 'badge',
            className: 'd-inline-block m-2',
            props: {
              standalone: true,
              count: 25
            }
          },
          {
            type: 'badge',
            className: 'd-inline-block m-2',
            props: {
              standalone: true,
              count: 4,
              style: { backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }
            }
          },
          {
            type: 'badge',
            className: 'd-inline-block m-2',
            props: {
              standalone: true,
              count: 109,
              style: { backgroundColor: '#52c41a' }
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '多彩徽标',
          description:
            '我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。'
        },
        fieldGroup: [
          {
            type: 'badge',
            className: 'd-inline-block mb-2',
            props: {
              color: '#f50',
              text: '#f50'
            }
          }
        ]
      }
    ]
  }
];

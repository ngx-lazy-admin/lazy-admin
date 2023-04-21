import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const SliderMockFields = [
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
          description: '基本滑动条。当 nzRange 为 true 时，渲染为双滑块。当 nzDisabled 为 true 时，滑块处于不可用状态。'
        },
        fieldGroup: [
          {
            key: 'slider-1-1-1',
            type: 'slider',
            className: 'd-block mb-2',
            defaultValue: 3
          },
          {
            key: 'slider-1-1-2',
            type: 'slider-range',
            className: 'd-block mb-2',
            defaultValue: [10, 50],
            props: {}
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '带 icon 的滑块',
          description: '滑块左右可以设置图标来表达业务含义。'
        },
        fieldGroup: [
          {
            key: 'slider-1-2-1',
            type: 'slider',
            className: 'd-block mb-2',
            props: {
              min: 0,
              max: 20
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '垂直',
          description: '垂直方向的 Slider。'
        },
        fieldGroup: [
          {
            key: 'slider-1-3-1',
            type: 'slider',
            className: 'd-block mb-2',
            props: {
              vertical: true,
              min: 0,
              max: 20,
              style: {
                float: 'left',
                height: '300px',
                marginLeft: '70px'
              }
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: '反向',
          description: '设置 nzReverse 可以将滑动条置反。'
        },
        fieldGroup: [
          {
            key: 'slider-1-4-1',
            type: 'slider',
            className: 'd-block mb-2',
            props: {
              reverse: true
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
          title: '带输入框的滑块',
          description: '和 数字输入框 组件保持同步。'
        },
        fieldGroup: [
          {
            key: 'slider-2-1-1',
            type: 'slider',
            className: 'd-inline-block mb-2 col-9 align-top',
            defaultValue: 3
          },
          {
            key: 'slider-2-1-1',
            type: 'input-number',
            className: 'd-inline-block mb-2 col-3',
            props: {}
          }
        ]
      }
    ]
  }
];

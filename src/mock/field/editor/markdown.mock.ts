export const MarkdownMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-12',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: 'markdown 编辑器',
          description: ''
        },
        fieldGroup: [
          {
            type: 'markdown',
            className: 'd-inline-block mx-2',
            props: {
              config: ''
            }
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    className: 'd-block mb-3 col-12',
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        fieldGroup: [
          {
            type: 'markdown',
            className: 'd-inline-block mx-2',
            props: {}
          }
        ],
        props: {
          title: 'markdown 编辑器'
        }
      }
    ]
  }
];

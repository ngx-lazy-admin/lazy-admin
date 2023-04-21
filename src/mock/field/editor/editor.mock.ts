export const EditorMockFields = [
  {
    type: 'group',
    className: 'd-block mb-3 col-6',
    props: {},
    fieldGroup: [
      {
        type: 'code-card',
        className: 'd-block mb-3 col-12',
        props: {
          title: 'quill 富文本编辑器',
          description: ''
        },

        fieldGroup: [
          {
            key: 'editor',
            type: 'quill',
            defaultValue: '111',
            className: 'd-inline-block mx-2',
            props: {}
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
        fieldGroup: [
          {
            type: 'quill',
            className: 'd-inline-block mx-2',
            props: {}
          }
        ],
        props: {
          title: '富文本编辑器'
        }
      }
    ]
  }
];

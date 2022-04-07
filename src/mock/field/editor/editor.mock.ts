export const EditorMockFields = [
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
            title: 'quill 富文本编辑器',
            description: '',
          },
          fieldGroup: [
            {
							key: 'editor',
              type: 'quill',
              className: "d-inline-block mx-2",
              templateOptions: {}
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
          fieldGroup: [
            {
                type: 'quill',
                className: "d-inline-block mx-2",
                templateOptions: {
                }
            }
          ],
          templateOptions: {
            title: '富文本编辑器',
          },
        },
      ]
    },
  ]
export const MarkdownMockFields = [
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
            title: 'markdown 编辑器',
            description: '',
          },
          fieldGroup: [
            {
              type: 'markdown',
              className: "d-inline-block mx-2",
              templateOptions: {}
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      className: "d-block mb-3 col-12",
      fieldGroup: [
        {
          type: 'code-card',
          className: "d-block mb-3 col-12",
          fieldGroup: [
            {
							type: 'markdown',
							className: "d-inline-block mx-2",
							templateOptions: {}
            }
          ],
          templateOptions: {
            title: 'markdown 编辑器',
          },
        },
      ]
    },
  ]
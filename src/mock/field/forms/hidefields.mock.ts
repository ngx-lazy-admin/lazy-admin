export const HideFieldsMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '基本',
      description: `
        There are two ways to initialize the form with default values.
          1. Default the model (preferred)
          2. Use the defaultValue option on the field
        Both methods are demonstrated below.
      `,
    },
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Name',
          placeholder: 'Type in here to display the hidden field',
        },
      },
      {
        key: 'iLikeTwix',
        type: 'checkbox',
        wrappers: ['form'],
        templateOptions: {
          label: 'I like twix',
        },
        hideExpression: '!model.name',
      },
    ]
  }
]
export const DefaultValueMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '基本',
      description: ` There are two ways to initialize the form with default values.
  1. Default the model (preferred)
  2. Use the defaultValue option on the field
Both methods are demonstrated below.`,
    },
    fieldGroup: [
      {
        key: 'firstName',
        type: 'input',
        wrappers: ['form'],
        defaultValue: 'This is a default value',
        templateOptions: {
          label: 'First Name (initialized via default value)',
        },
      },
      {
        key: 'lastName',
        type: 'input',
        wrappers: ['form'],
        defaultValue: 'This is a default value',
        templateOptions: {
          label: 'Last Name (initialized via the model)',
        },
      },
      {
        key: 'candy',
        type: 'select',
        wrappers: ['form'],
        defaultValue: 'milky_way',
        templateOptions: {
          label: 'Favorite Candy (initialized via default value',
          options: [
            { label: 'Snickers', value: 'snickers' },
            { label: 'Baby Ruth', value: 'baby_ruth' },
            { label: 'Milky Way', value: 'milky_way' },
          ],
        },
      },
      {
        key: 'agree',
        type: 'checkbox',
        wrappers: ['form'],
        templateOptions: {
          text: 'Agree? (not initialized at all)',
          noColon: true
        },
      },
    ]
  }
]
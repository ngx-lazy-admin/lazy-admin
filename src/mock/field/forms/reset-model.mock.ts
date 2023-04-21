export const ResetModelMockFields = [
  {
    type: 'code-card',
    className: 'd-block mb-3 col-12',
    props: {
      title: '基本',
      description: ` There are two ways to initialize the form with default values.
    1. Default the model (preferred)
    2. Use the defaultValue option on the field
  Both methods are demonstrated below.`
    },
    fieldGroup: [
      {
        key: 'text',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Some awesome text',
          placeholder: 'Some sweet text',
          required: true,
        }
      },
      {
        key: 'candy',
        type: 'select',
        wrappers: ['form'],
        props: {
          label: 'Multiple Options',
          options: [
            { label: 'Snickers', value: 'snickers' },
            { label: 'Baby Ruth', value: 'baby_ruth' },
            { label: 'Milky Way', value: 'milky_way' },
          ],
        },
      },
      {
        type: 'button-group',
        wrappers: ['form'],
        props: {
          type: 'primary',
          noColon: true,
          options: [
            {
              text: 'Submit',
              size: 'default',
              type: 'primary'
            },
            {
              text: 'Reset',
              size: 'default',
              type: 'default'
            },
            {
              text: 'Update Initial Value',
              size: 'default',
              type: 'default'
            }
          ]
        }
      }
    ]
  }
];

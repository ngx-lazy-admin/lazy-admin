export const ModalOptionsMockFields = [
  {
    type: 'code-card',
    className: 'd-block mb-3 col-12',
    templateOptions: {
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
        templateOptions: {
          label: 'Debounce',
          layout: 'vertical'
        }
      },
      {
        key: 'updateOnBlur',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: '`updateOn` on Blur',
          required: true,
          layout: 'vertical'
        }
      },
      {
        key: 'updateOnSubmit',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: '`updateOn` on Submit *',
          required: true,
          layout: 'vertical'
        }
      },
      {
        type: 'button-group',
        wrappers: ['form'],
        templateOptions: {
          type: 'primary',
          noColon: true,
          layout: 'vertical',
          options: [
            {
              text: 'Submit',
              size: 'default',
              type: 'primary',
              click: `() => {
                  alert('66666666')
                }`
            }
          ]
        }
      }
    ]
  }
];

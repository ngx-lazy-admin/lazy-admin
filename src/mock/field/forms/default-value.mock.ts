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
        props: {
          label: 'First Name (initialized via default value)',
        },
      },
      {
        key: 'lastName',
        type: 'input',
        wrappers: ['form'],
        defaultValue: 'This is a default value',
        props: {
          label: 'Last Name (initialized via the model)',
        },
      },
      {
        key: 'candy',
        type: 'select',
        wrappers: ['form'],
        defaultValue: 'milky_way',
        props: {
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
          noColon: true,
          required: true
        },
      },
      {
        type: 'button-group',
        wrappers: ['form'],
        templateOptions: {
          type: 'primary',
          noColon: true,
          options: [
            {
              text: 'Submit',
              size: 'default',
              type: 'primary',
              click: `(field, _this) => {
                console.log(field, _this)
                if (field.form.valid) {
                  alert('提交成功')
                } else {
                  alert('请完成校验')
                }
              }`
            }
          ]
        }
      },
    ]
  }
]
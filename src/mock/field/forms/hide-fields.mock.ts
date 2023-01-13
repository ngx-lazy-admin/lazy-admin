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
        props: {
          label: 'Name',
          placeholder: 'Type in here to display the hidden field',
        },
      },
      {
        key: 'iLikeTwix',
        type: 'checkbox',
        wrappers: ['form'],
        props: {
          label: 'I like twix',
        },
        hideExpression: '!model.name',
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
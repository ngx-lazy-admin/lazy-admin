export const BuiltInValidationsFieldsMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '内建验证器',
      description: `

      `,
    },
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Name (required)',
          required: true,
        },
      },
      {
        key: 'age',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Age (min= 18, max= 40)',
          type: 'number',
          min: 18,
          max: 40,
          required: true,
        },
      },
      {
        key: 'password',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Password (minLength = 6)',
          type: 'password',
          required: true,
          minLength: 6,
        },
      },
      {
        key: 'comment',
        type: 'textarea',
        wrappers: ['form'],
        props: {
          label: 'Comment (maxLength = 100)',
          required: true,
          maxLength: 100,
          rows: 5,
        },
      },
      {
        key: 'ip',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'IP Address (pattern = /(d{1,3}.){3}d{1,3}/)',
          pattern: '(\\d{1,3}\\.){3}\\d{1,3}',
          required: true,
        },
        validation: {
          messages: {
            pattern: `'{field.formControl.value}' is not a valid IP Address`,
          },
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
                field.options.formState.awesomeIsForced = true
                Object.values(field.parent.formControl.controls).map(control => {
                  control.markAsDirty();
                  control.updateValueAndValidity({ onlySelf: true });
                });
                // if (field.form.valid) {
                //   alert('提交成功')
                // } else {
                //   alert('请完成校验')
                // }
              }`
            }
          ]
        }
      },
    ]
  }
]
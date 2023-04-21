export const AsyncValidationFieldsMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    props: {
      title: '异步验证器',
      description: `

      `,
    },
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: '异步验证器',
          required: true,
          asyncValidation: `1111`
        },
        validators: {
          validation: ['async'],
        },
        validation: {
          messages: {
            async: `'{field.formControl.value}' is not a valid IP Address(这是一个异步验证器)`,
          }
        }
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
              type: 'submit',
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

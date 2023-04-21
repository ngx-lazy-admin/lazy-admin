export const CustomValidationFieldsMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    props: {
      title: '自定义验证器',
      description: `

      `,
    },
    fieldGroup: [
      {
        key: 'ip',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'IP Address(使用内置的ip校验规则)',
          required: true,
        },
        validators: {
          validation: ['ip'],
        },
      },
      {
        key: 'ip2',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'IP Address(重写校验错误信息)',
          description: 'custom validation message through `validators` property',
          required: true,
        },
        validators: {
          validation: ['ip'],
        },
        validation: {
          messages: {
            ip: `'{field.formControl.value}' is not a valid IP Address(校验信息重写过)`,
          }
        }
      },
      {
        key: 'ip3',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'IP Address (pattern = /(d{1,3}.){3}d{1,3}/) (使用正则重写 ip 校验规则)',
          patterns: '(\\d{1,3}\\.){3}\\d{1,3}',
          required: true,
        },
        validation: {
          messages: {
            patterns: `'{field.formControl.value}' is not a valid IP Address(正则匹配和校验规则都重写了)`,
          },
        },
      },
      {
        key: 'email',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'email Address (使用内置的email方法)',
          required: true,
        },
        validators: {
          validation: ['email'],
        },
      },
      {
        key: 'MaxLength',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'MaxLength (maxLength = 10)',
          required: true,
          maxLength: 10
        },
      },
      {
        key: 'MinLength',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'MinLength (MinLength = 6)',
          required: true,
          minLength: 6
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
              type: 'primary',
              click: `(field, _this) => {
                field.options.formState.awesomeIsForced = true
                Object.values(field.parent.formControl.controls).map(control => {
                  control.markAsDirty();
                  control.updateValueAndValidity({ onlySelf: true });
                });
              }`
            }
          ]
        }
      },
    ]
  }
]

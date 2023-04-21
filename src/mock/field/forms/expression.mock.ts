import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ExpressionMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    props: {
      title: 'expression',
      description: 'Expression Properties allows you to dynamically change many properties of a field.',
    },
    fieldGroup: [
      {
        key: 'text',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Text',
          required: true,
          placeholder: 'Type here to see the other field become enabled...',
        },
      },
      {
        key: 'text2',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Hey!!',
          required: true,
          placeholder: 'This one is disabled if there is no text in the other input',
        },
        expressions: {
          'props.disabled': '!model.text',
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

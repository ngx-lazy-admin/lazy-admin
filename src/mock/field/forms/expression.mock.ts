import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ExpressionMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: 'expression',
      description: 'Expression Properties allows you to dynamically change many properties of a field.',
    },
    fieldGroup: [
      {
        key: 'text',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Text',
          placeholder: 'Type here to see the other field become enabled...',
        },
      },
      {
        key: 'text2',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Hey!',
          placeholder: 'This one is disabled if there is no text in the other input',
        },
        expressionProperties: {
          'templateOptions.disabled': '!model.text',
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
              type: 'primary'
            }
          ]
        }
      },
    ]
  }
]
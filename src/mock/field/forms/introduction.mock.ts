import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const IntroductionMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: 'Introduction Example',
      description: '简单的徽章展示，当 nzCount 为 0 时，默认不显示，但是可以使用 nzShowZero 修改为显示。',
    },
    fieldGroup: [
      {
        key: 'text',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Text',
          placeholder: 'Formly is terrific!',
          required: true,
        },
      },
      {
        key: 'nested.story',
        type: 'textarea',
        wrappers: ['form'],
        templateOptions: {
          label: 'Some sweet story',
          placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
          description: '',
        },
        expressionProperties: {
          focus: 'formState.awesomeIsForced',
          // 'templateOptions.description': (model, formState) => {
          //   if (formState.awesomeIsForced) {
          //     return 'And look! This field magically got focus!';
          //   }
          // },
        },
      },
      {
        key: 'awesome',
        type: 'checkbox',
        wrappers: ['form'],
        templateOptions: { 
          label: '',
          noColon: true,
          text: 'Is formly totally awesome? (uncheck this and see what happens)'
        },
        expressionProperties: {
          'templateOptions.disabled': 'formState.awesomeIsForced',
          // 'templateOptions.label': (model, formState) => {
          //   if (formState.awesomeIsForced) {
          //     return 'Too bad, formly is really awesome...';
          //   } else {
          //     return 'Is formly totally awesome? (uncheck this and see what happens)';
          //   }
          // },
        },
      },
      {
        key: 'whyNot',
        type: 'textarea',
        wrappers: ['form'],
        expressionProperties: {
          // 'templateOptions.placeholder': (model, formState) => {
          //   if (formState.awesomeIsForced) {
          //     return 'Too bad... It really is awesome! Wasn\'t that cool?';
          //   } else {
          //     return 'Type in here... I dare you';
          //   }
          // },
          'templateOptions.disabled': 'formState.awesomeIsForced',
        },
        hideExpression: 'model.awesome',
        templateOptions: {
          label: 'Why Not?',
          placeholder: 'Type in here... I dare you',
        },
      },
      {
        key: 'custom',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Custom inlined',
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
            },
            {
              text: 'Reset',
              size: 'default',
              type: 'default'
            },
          ]
        }
      },
      
    ]
  }
]
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const IntroductionMockFields = [
  {
    type: 'code-card',
    className: 'd-block mb-3 col-12',
    templateOptions: {
      title: 'Introduction Example',
      description: '简单的徽章展示，当 nzCount 为 0 时，默认不显示，但是可以使用 nzShowZero 修改为显示。'
    },
    fieldGroup: [
      {
        key: 'text',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Text',
          placeholder: 'Formly is terrific!'
        },
        validators: {
          validation: ['required']
        }
      },
      {
        key: 'nestedStory',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Some sweet story',
          placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
          description: '',
          required: true
        },
        expressionProperties: {
          focus: 'formState.awesomeIsForced',
          'templateOptions.description': `
            console.log('formState')
            console.log(field)
            console.log(model)
          `
        }
      },
      {
        key: 'awesome',
        type: 'checkbox',
        wrappers: ['form'],
        templateOptions: {
          label: '',
          noColon: true,
          required: true,
          text: 'Is formly totally awesome? (uncheck this and see what happens)'
        },
        expressionProperties: {
          'templateOptions.disabled': 'formState.awesomeIsForced',
          'templateOptions.label': `formState.awesomeIsForced ? '1' : '2'`
        }
      },
      {
        key: 'whyNot',
        type: 'textarea',
        wrappers: ['form'],
        expressionProperties: {
          'templateOptions.placeholder': `formState`,
          'templateOptions.disabled': 'formState.awesomeIsForced'
        },
        hideExpression: 'model.awesome',
        templateOptions: {
          label: 'Why Not?',
          placeholder: 'Type in here... I dare you',
          required: true
        }
      },
      {
        key: 'custom',
        type: 'input',
        wrappers: ['form'],
        templateOptions: {
          label: 'Custom inlined'
        }
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
                field.options.formState.awesomeIsForced = true
                Object.values(field.parent.formControl.controls).map(control => {
                  control.markAsDirty();
                  control.updateValueAndValidity({ onlySelf: true });
                });
              }`
            },
            {
              text: 'Reset',
              size: 'default',
              type: 'default',
              click: `(field, _this) => {
                field.options.formState.awesomeIsForced = false;
                field.parent.formControl.reset();
              }`
            }
          ]
        }
      }
    ]
  }
];

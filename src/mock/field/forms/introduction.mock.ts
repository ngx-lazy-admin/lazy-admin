import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const IntroductionMockFields = [
  {
    type: 'code-card',
    className: 'd-block mb-3 col-12',
    props: {
      title: 'Introduction Example',
      description: '简单的徽章展示，当 nzCount 为 0 时，默认不显示，但是可以使用 nzShowZero 修改为显示。'
    },
    fieldGroup: [
      {
        key: 'text',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Text',
          placeholder: 'Formly is terrific!'
        },
        validators: {
          validation: ['required']
        }
      },
      {
        key: 'nestedStory',
        type: 'textarea',
        wrappers: ['form'],
        props: {
          label: 'Some sweet story',
          placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
          description: '',
          required: true
        },
        expressions: {
          focus: 'formState.awesomeIsForced',
          'props.description': `({ options: { formState } }) => {
            console.log('expressions', options)
            if (formState.awesomeIsForced) {
              return 'And look! This field magically got focus!';
            }
            return '';
          }`,
        }
      },  
      {
        key: 'awesome',
        type: 'checkbox',
        wrappers: ['form'],
        props: {
          label: '',
          noColon: true,
          required: true,
          text: 'Is formly totally awesome? (uncheck this and see what happens)'
        },
        expressions: {
          'props.disabled': 'formState.awesomeIsForced',
          'props.label': `
            formState.awesomeIsForced ? 
              'Too bad, formly is really awesome...' 
              : 'Is formly totally awesome? (uncheck this and see what happens)'
            `,
        }
      },
      {
        key: 'whyNot',
        type: 'textarea',
        wrappers: ['form'],
        expressions: {
          'props.disabled': 'formState.awesomeIsForced',
          'hide': 'model.awesome',
          'props.placeholder': `({ options: { formState } }) => {
              if (formState.awesomeIsForced) {
                return 'Too bad... It really is awesome! Wasn't that cool?';
              } else {
                return 'Type in here... I dare you';
              }
            }
          `,
        },
        props: {
          label: 'Why Not?',
          placeholder: 'Type in here... I dare you',
          required: true
        }
      },
      {
        key: 'custom',
        type: 'input',
        wrappers: ['form'],
        props: {
          label: 'Custom inlined'
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

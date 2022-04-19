import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function minValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.templateOptions?.min}`;
}

export function maxValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.templateOptions?.max}`;
}

export function minlengthValidationMessage(err: any, field: FormlyFieldConfig) {
  return `Should have atleast ${field.templateOptions?.minLength} characters`;
}

export function maxlengthValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.templateOptions?.maxLength} characters`;
}

export function IpValidator(control: FormControl): ValidationErrors {
  return {
    ip: !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
  };
}

export function IpValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid IP Address`;
}
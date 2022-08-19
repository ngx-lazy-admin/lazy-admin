import { AbstractControl, ValidationErrors } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

// ip 检验
const IpValidator = (control: AbstractControl): ValidationErrors => {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? {} : { ip: true };
}

const IpValidatorMessage = (err: any, field: FormlyFieldConfig): string => {
  return `"${field.formControl?.value}" is not a valid IP Address`;
}

// 必填
export function requireValidator(control: AbstractControl): ValidationErrors {
  return control.value ? { } : { require: true };
}

export function requireValidatorMessage(control: AbstractControl): string {
  return 'This field is required';
}



export function minValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.templateOptions?.min}`;
}

export function maxValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.templateOptions?.max}`;
}

export const validators = [
  { name: 'ip', validation: IpValidator },
  { name: 'required', validation: requireValidator },
]

export const validationMessages = [
  { name: 'ip', message: IpValidatorMessage },
  { name: 'required', message: requireValidatorMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage },
]

// isEmail
const isEmail = () => {
  return false
}

// isBoolean

// isIp

// isBtcAddress

// isCreditCard

// isCurrency

// isDataURL

// isDate


// isDecimal

// isEAN

// isEmpty

// isEthAddress

// isEosAddress

// isHash

// isJSON

// isLowercase

// isMACAddress

// isMD5

// isMObilePhone

// isPassword

// isURL
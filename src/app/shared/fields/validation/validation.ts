import { AbstractControl, AsyncValidatorFn, ValidationErrors, Validators } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Observable, of } from "rxjs";
import { catchError, delay, map } from "rxjs/operators";

// 必填
const requireValidator = (control: AbstractControl): ValidationErrors  =>{
  return control.value ? { } : { require: true };
}

// ip
const IpValidator = (control: AbstractControl): ValidationErrors => {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? {} : { ip: true };
}

const MaxLengthValidator = (control: AbstractControl): ValidationErrors => {
  return !control.value || control.value.length > 7 ? {} : { MaxLength: true };
}

// email
const EmailValidator = (control: AbstractControl): ValidationErrors => {
  return !control.value || /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(control.value) ? {} : { email: true };
}

const IpAsyncValidator = (control: AbstractControl): ValidationErrors => {
  return !control.value || /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(control.value) ? {} : { email: true };
}

// const IpAsyncValidator = (control: AbstractControl):  Observable<ValidationErrors | null> {
//   return this.heroesService.isAlterEgoTaken(control.value).pipe(
//     map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
//     catchError(() => of(null))
//   );
// }

const AsyncValidatorFn = (control: AbstractControl):  Observable<ValidationErrors | null> => {
  return of(control).pipe(delay(10)).pipe(
    map(control => {
      console.log('control', control)
      const re = !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
      return re ? {} : { async: true }
    }),
    catchError(() => of(null))
  )
}

const AsyncValidator = (control: AbstractControl):  ValidationErrors | null => {
  // if (!control.hasAsyncValidator(AsyncValidatorFn)) {
  //   control?.addAsyncValidators(AsyncValidatorFn)
  // }
  control?.setAsyncValidators(AsyncValidatorFn)
  return {
    async: true
  }
}

const requireMsg = (control: AbstractControl): string => {
  return 'This field is required';
}

const IpValidatorMsg = (err: any, field: FormlyFieldConfig): string => {
  return `"${field.formControl?.value}" is not a valid IP Address`;
}

const EmailMsg = (err: any, field: FormlyFieldConfig): string => {
  return `"${field.formControl?.value}" is not a valid Email Address`;
}

function minMsg(err: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.props?.min}`;
}

function maxMsg(err: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.max}`;
}

function minLengthMsg(err: any, field: FormlyFieldConfig) {
  return `This value minLength should be more than ${field.props?.minLength}`;
}



// 验证器
export const validators = [
  { name: 'ip', validation: IpValidator },
  { name: 'required', validation: requireValidator },
  { name: 'email', validation: EmailValidator},
  { name: 'IpAsyncValidator', validation: IpAsyncValidator },
  { name: 'async', validation: AsyncValidator}
]

export const AsyncValidators = [
  { name: 'IpAsyncValidator', IpAsyncValidator }
]

// 验证错误信息

export const validationMessages = [
  { name: 'ip', message: IpValidatorMsg },
  { name: 'required', message: requireMsg },
  { name: 'min', message: minMsg },
  { name: 'max', message: maxMsg },
  // { name: 'minLength', message: minLengthMsg},
  { name: 'email', message: EmailMsg}
]

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
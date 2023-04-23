import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FieldWrapper, FormlyConfig } from '@ngx-formly/core';
import { NzFormTooltipIcon, NzFormLayoutType } from 'ng-zorro-antd/form';
import { isObservable, Observable, of } from 'rxjs';
import { catchError, delay, startWith, switchMap, tap, map } from 'rxjs/operators';
import { isObject } from 'src/app/utils';

@Component({
  selector: 'app-form-field-wrapper',
  host: {
    '[class.ant-form-horizontal]': 'nzLayout === "horizontal"',
    '[class.ant-form-vertical]': 'nzLayout === "vertical"',
    '[class.ant-form-inline]': 'nzLayout === "inline"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-form-item>
      <nz-form-label
        *ngIf="to.hideLabel !== true && to.label"
        [nzSpan]="nzLayout == 'horizontal' && !fixedWidth ? 8 : null"
        [nzNoColon]="nzNoColon"
        [nzRequired]="!nzNoColon && nzRequired"
        [ngStyle]="(fixedWidth | fixedWidth)?.label"
        [nzFor]="id"
        [nzTooltipTitle]="nzTooltipTitle"
        [nzTooltipIcon]="nzTooltipIcon">
        <span [innerHTML]="to.label"></span>
      </nz-form-label>
      <!--
        'invalid' + field.formControl?.invalid
        'touched:' +  field.formControl?.touched
        'show:' + field.validation?.show
        'submitted:' + this.options?.parentForm?.submitted
      -->
      <nz-form-control
        [nzValidateStatus]="formControl"
        [nzErrorTip]="errorTpl"
        [nzSpan]="nzLayout == 'horizontal' && !fixedWidth ? 16 : null"
        [nzOffset]="controlOffset"
        [ngStyle]="(fixedWidth | fixedWidth)?.control"
        [nzExtra]="to.description ? extraTpl : undefined"
        [nzHasFeedback]="nzHasFeedback">
        <ng-container #fieldComponent></ng-container>

        <ng-template #errorTpl let-control>
          <span>{{ errorMessage }}</span>
        </ng-template>

        <ng-template #extraTpl let-control>
          <span>{{ to.description }}</span>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
})

export class FormWrapper extends FieldWrapper {

  labelStyle: object | null = null;
  controlStyle: object | null = null;


  get nzLayout(): NzFormLayoutType  {
    return this.props.layout || this.props.layout || 'horizontal'
  }

  get controlOffset() : number {
    return  this.nzLayout === 'vertical' ? 0 : (!this.props.label ? 8 : 0)
  }

  // const baseStyle = { position: 'absolute', width: `${this.inputWidth}px` };
  // this.datePickerService.arrowLeft =
  //   this.datePickerService.activeInput === 'left'
  //     ? 0
  //     : this.inputWidth + this.separatorElement?.nativeElement.offsetWidth || 0;

  // if (this.dir === 'rtl') {
  //   this.activeBarStyle = { ...baseStyle, right: `${this.datePickerService.arrowLeft}px` };
  // } else {
  //   this.activeBarStyle = { ...baseStyle, left: `${this.datePickerService.arrowLeft}px` };
  // }

  get errorState(): boolean {
    return  !!(this.field.formControl?.invalid &&
      (this.field.formControl?.touched || this.options?.parentForm?.submitted || !!this.field.validation?.show))
    // return this.showError ? 'error' : '';
  }

  get fixedWidth (): string {
    return this.props.fixedWidth || ''
  }

  get nzNoColon(): boolean {
    return this.props.nzNoColon || this.props.noColon || false
  }

  get nzRequired(): boolean {
    return  (this.props.nzRequired || this.props.required) && this.props.hideRequiredMarker !== true || false
  }

  get nzTooltipTitle(): string | TemplateRef<void> {
    return this.props.nzTooltipTitle || this.props.tooltipTitle || ''
  }

  get nzTooltipIcon(): string | NzFormTooltipIcon {
    return this.props.NzFormTooltipIcon || { type: 'question-circle', theme: 'outline' }
  }

  get nzValidateStatus(): string | NzFormTooltipIcon {
    return this.props.nzValidateStatus || null
  }

  get nzHasFeedback(): boolean {
    return this.props.nzHasFeedback || false
  }

  get nzExtra(): string | TemplateRef<void> {
    return this.props.nzExtra
  }

  get nzSuccessTip(): string | TemplateRef<void> {
    return this.props.nzSuccessTip
  }

  get nzWarningTip(): string | TemplateRef<void> {
    return this.props.nzWarningTip
  }

  get nzErrorTip(): string | TemplateRef<void> {
    return this.props.nzErrorTip
  }

  get nzValidatingTip(): string | TemplateRef<void> {
    return this.props.nzValidatingTip
  }

  get nzAutoTips(): string | TemplateRef<void> {
    return this.props.nzAutoTips
  }

  get nzDisableAutoTips(): string | TemplateRef<void> {
    return this.props.nzDisableAutoTips
  }

  get errorMessage(): any {
    // debugger
    const formControl = this.field.formControl;

    console.log('fieldForm', formControl)
    if (formControl) {
      for (const error in formControl.errors) {
        if (formControl.errors.hasOwnProperty(error)) {
          let message = this.config.getValidatorMessage(error);
          console.log('getValidatorMessage:' + message, this.field.formControl?.value, this.field)

          // 如果是异步校验, 则注册异步校验，在验证信息
          if (this.field.validators?.validation.some((item: string) => item == 'async')) {
            const AsyncValidator = (control: AbstractControl):  Observable<ValidationErrors | null> => {
              console.log(control.value)
              return of(control).pipe(delay(10)).pipe(
                map(control => {
                  const re = !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
                  console.log('re', re)
                  return re ? {} : { async: true }
                }),
                catchError(() => of(null))
              )
            }
            if (!formControl.hasAsyncValidator(AsyncValidator)) {
              console.log('1111')
              formControl.addAsyncValidators(AsyncValidator)
              formControl.updateValueAndValidity({
                onlySelf: false,
                emitEvent: true
              })
            }

          }

          if (isObject(formControl.errors[error])) {
            if (formControl.errors[error].errorPath) {
              return '';
            }

            if (formControl.errors[error].message) {
              message = formControl.errors[error].message.replace();
              console.log('fieldForm.errors[error].message:' + message)

            }
          }

          if (this.field.validation?.messages?.[error]) {
            // 如果 pattern 为string，validation?.messages 为string
            console.log(this.field.validation?.messages, error)
            if (typeof(this.field.props?.pattern)=='string') {
              // const ValidatorFn = Validators.pattern(new RegExp(this.field.props?.pattern))
              // formControl?.addValidators(ValidatorFn)

              // 添加自定义正则校验
              const customRegExp = (nameRe: RegExp): ValidatorFn => {
                return (control: AbstractControl): ValidationErrors | null => {
                  const forbidden = false;
                  return forbidden ? {forbiddenName: {value: control.value}} : null;
                };
              }
               formControl?.addValidators(customRegExp(new RegExp(this.field.props?.patterns)))
            }

            message = this.field.validation.messages[error];
            if (typeof(message)=='string') {
              message = message.replace("{field.formControl.value}'", this.field.formControl?.value)
            }

            console.log(this.field.validation.messages, error)
          }

          if (this.field.validators?.[error]?.message) {
            message = this.field.validators[error].message;
            console.log('this.field.validators[error].message:' + message)
          }

          if (this.field.asyncValidators?.[error]?.message) {
            message = this.field.asyncValidators[error].message;
            console.log('this.field.asyncValidators[error].message;:' + message)
          }

          if (typeof message === 'function') {
            return message(formControl.errors[error], this.field);
          }

          console.log(message)

          return message;
        }
      }
    }
    return
  }

  constructor(
    private config: FormlyConfig
  ) {
    super();
  }

  errorMessage$?: Observable<string>;

  ngOnInit () {}

  ngOnChanges() {}
}

import { Component, ViewChild, ViewContainerRef, OnInit, TemplateRef } from '@angular/core';
import { FieldWrapper, FormlyConfig } from '@ngx-formly/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { isObservable, Observable, of } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';

const isObject = (x: any) => {
  return x != null && typeof x === 'object';
}

@Component({
  selector: 'app-form-field-wrapper',
  templateUrl: './form.wrapper.html',
})

export class FormWrapper extends FieldWrapper {
  // @ViewChild('fieldTpl', { read: ViewContainerRef })

  get errorState() {
    return this.showError ? 'error' : '';
  }

  get nzNoColon(): boolean {
    return this.to.nzNoColon || false
  }

  get nzRequired(): boolean {
    return  (this.to.nzRequired || this.to.required) && this.to.hideRequiredMarker !== true || false
  }

  get nzTooltipTitle(): string | TemplateRef<void> {
    return this.to.nzTooltipTitle
  }

  get nzTooltipIcon(): string | NzFormTooltipIcon {
    return this.to.NzFormTooltipIcon || null
  }

  // nz-form-control

  get nzValidateStatus(): string | NzFormTooltipIcon {
    return this.to.nzValidateStatus || null
  }

  get nzHasFeedback(): boolean {
    return this.to.nzHasFeedback() || false
  }

  get nzExtra(): string | TemplateRef<void> {
    return this.to.nzExtra
  }

  get nzSuccessTip(): string | TemplateRef<void> {
    return this.to.nzSuccessTip
  }

  get nzWarningTip(): string | TemplateRef<void> {
    return this.to.nzWarningTip
  }


  get nzErrorTip(): string | TemplateRef<void> {
    return this.to.nzErrorTip
  }

  get nzValidatingTip(): string | TemplateRef<void> {
    return this.to.nzValidatingTip
  }

  get nzAutoTips(): string | TemplateRef<void> {
    return this.to.nzAutoTips
  }

  get nzDisableAutoTips(): string | TemplateRef<void> {
    return this.to.nzDisableAutoTips
  }

  get errorMessage(): any {
    const fieldForm = this.field.formControl;
    if (fieldForm) {
      for (const error in fieldForm.errors) {
        if (fieldForm.errors.hasOwnProperty(error)) {
          let message = this.config.getValidatorMessage(error);
  
          if (isObject(fieldForm.errors[error])) {
            if (fieldForm.errors[error].errorPath) {
              return;
            }
  
            if (fieldForm.errors[error].message) {
              message = fieldForm.errors[error].message;
            }
          }
  
          if (this.field.validation?.messages?.[error]) {
            message = this.field.validation.messages[error];
          }
  
          if (this.field.validators?.[error]?.message) {
            message = this.field.validators[error].message;
          }
  
          if (this.field.asyncValidators?.[error]?.message) {
            message = this.field.asyncValidators[error].message;
          }
  
          if (typeof message === 'function') {
            return message(fieldForm.errors[error], this.field);
          }
  
          return message;
        }
      }
  
    }
  }

  constructor(
    private config: FormlyConfig
  ) {
    super();
  }

  errorMessage$?: Observable<string>;

  ngOnChanges() {
    if (this.field.formControl) {
      this.errorMessage$ = this.field.formControl.statusChanges.pipe(
        startWith(null),
        tap(() => {
          console.log(this)
        }),
        switchMap(() => (isObservable(this.errorMessage) ? this.errorMessage : of(this.errorMessage))),
      );
    }
  }

  onBtnClick () {
    if (this.to.buttonClick) {
      this.to.buttonClick(this.model, this.options);
    }
  }
}

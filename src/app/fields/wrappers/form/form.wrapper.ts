import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { FieldWrapper, FormlyConfig } from '@ngx-formly/core';
import { NzFormTooltipIcon, NzFormLayoutType } from 'ng-zorro-antd/form';
import { isObservable, Observable, of } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { isObject } from 'src/app/utils/utils';

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
      <ng-container *ngIf="to.label && to.hideLabel !== true">
        <nz-form-label 
          [nzSpan]="nzLayout == 'horizontal' ? 8 : null"
          [nzNoColon]="nzNoColon" 
          [nzRequired]="nzRequired" 
          [nzFor]="id" 
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipIcon]="nzTooltipIcon">
          <span [innerHTML]="to.label"></span>
        </nz-form-label>
      </ng-container>
      <nz-form-control 
        [nzValidateStatus]="errorState" 
        [nzSpan]="nzLayout == 'horizontal' ? 16 : null"
        [nzErrorTip]="errorTpl"
        [nzExtra]="nzExtra"
        [nzHasFeedback]="nzHasFeedback">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <span>{{ errorMessage }}</span>
        </ng-template>
      </nz-form-control>
      <!-- {{ 'invalid：' + field.formControl?.invalid  
          + ', touched: ' +  field.formControl?.touched 
          + ', submitted: ' + this.options?.parentForm?.submitted
          + ', show: ' + !!field.validation?.show
      }}  -->
    </nz-form-item>
  `
})

export class FormWrapper extends FieldWrapper {

  get nzLayout(): NzFormLayoutType  {
    return this.to.layout || this.to.layout || 'horizontal'
  }

  get errorState() {
    // return  this.field.formControl?.invalid && 
    //   (this.field.formControl?.touched || this.options?.parentForm?.submitted || !!this.field.validation?.show)
    return this.showError ? 'error' : '';
  }

  get nzNoColon(): boolean {
    return this.to.nzNoColon || false
  }

  get nzRequired(): boolean {
    return  (this.to.nzRequired || this.to.required) && this.to.hideRequiredMarker !== true || false
  }

  get nzTooltipTitle(): string | TemplateRef<void> {
    return this.to.nzTooltipTitle || this.to.tooltipTitle || ''
  }

  get nzTooltipIcon(): string | NzFormTooltipIcon {
    return this.to.NzFormTooltipIcon || { type: 'question-circle', theme: 'outline' }
  }

  get nzValidateStatus(): string | NzFormTooltipIcon {
    return this.to.nzValidateStatus || null
  }

  get nzHasFeedback(): boolean {
    return this.to.nzHasFeedback || true
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
    // debugger
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

  ngOnInit () {
    // this.errorMessage$ = this.field.formControl?.statusChanges.pipe(
    //   tap(() => {
    //   }),
    //   switchMap(() => (isObservable(this.errorMessage) ? this.errorMessage : of(this.errorMessage))),
    // );
  }

  ngOnChanges() {}
}

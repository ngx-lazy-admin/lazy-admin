import { Component, ViewChild, ViewContainerRef, OnInit, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper, FormlyConfig } from '@ngx-formly/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { isObservable, Observable, of } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { isObject } from 'src/app/utils';

@Component({
  selector: 'app-table-wrapper',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-form-item class="mb-2">
      <nz-form-control 
        nz-tooltip 
        [nzTooltipVisible]="showError" 
        [nzTooltipTrigger]="'focus'" 
        [nzValidateStatus]="errorState"
        [nzTooltipTitle]="showError ? titleTemplate : null" 
        nzTooltipColor="#fff"
        nzTooltipPlacement="topRight">
        <ng-container #fieldComponent></ng-container>
        <ng-template #titleTemplate let-thing>
          <span class="ant-form-item-explain ant-form-item-explain-error">{{errorMessage}}</span>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `
})

export class TableWrapper extends FieldWrapper {
  get nzLayout(): string {
    return this.props.nzLayout ? this.props.nzLayout : 'horizontal'
  }

  get errorState() {
    return this.showError ? 'error' : '';
  }

  get nzNoColon(): boolean {
    return this.props.nzNoColon || false
  }

  get nzRequired(): boolean {
    return  (this.props.nzRequired || this.props.required) && this.props.hideRequiredMarker !== true || false
  }

  get nzTooltipTitle(): string | TemplateRef<void> {
    return this.props.nzTooltipTitle
  }

  get nzTooltipIcon(): string | NzFormTooltipIcon {
    return this.props.NzFormTooltipIcon || null
  }

  get nzValidateStatus(): string | NzFormTooltipIcon {
    return this.props.nzValidateStatus || null
  }

  get nzTooltipStatus (): boolean {
    return false
  }

  get nzHasFeedback(): boolean {
    return this.props.nzHasFeedback() || false
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

    // console.log(this)
    // this.formControl.valueChanges.subscribe(item => {
    //   console.log(item)
    //   console.log(this.errorState)
    // })
  }

  errorMessage$?: Observable<string>;

  ngOnChanges() {
    if (this.field.formControl) {
      // this.errorMessage$ = this.field.formControl.statusChanges.pipe(
      //   startWith(null),
      //   tap(() => {
      //     console.log(this)
      //   }),
      //   switchMap(() => (isObservable(this.errorMessage) ? this.errorMessage : of(this.errorMessage))),
      // );
    }
  }

  ngAfterViewInit() {
    // this.formControl?.valueChanges(item => {
    //   console.log(item)
    // })
    // this.formControl.valueChanges.subscribe(item => {

    // })
  }

  onBtnClick () {
    if (this.props.buttonClick) {
      this.props.buttonClick(this.model, this.options);
    }
  }
}

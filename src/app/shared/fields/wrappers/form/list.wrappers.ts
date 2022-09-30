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
  import { isObject } from 'src/app/utils';
  
  @Component({
    selector: 'div[list-wrapper]',
    host: {
      '[class.ant-form-horizontal]': 'nzLayout === "horizontal"',
      '[class.ant-form-vertical]': 'nzLayout === "vertical"',
      '[class.ant-form-inline]': 'nzLayout === "inline"',
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <li nz-list-item nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
            <a>edit</a>
          </nz-list-item-action>
        </ul>
      </li>
    `,
  })
  
  export class ListWrapper extends FieldWrapper {
  
    labelStyle: object | null = null;
    controlStyle: object | null = null;
  
  
    get nzLayout(): NzFormLayoutType  {
      return this.props.layout || this.props.layout || 'horizontal'
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
      const fieldForm = this.field.formControl;
  
      if (fieldForm) {
        for (const error in fieldForm.errors) {
          if (fieldForm.errors.hasOwnProperty(error)) {
            let message = this.config.getValidatorMessage(error);
            console.log('getValidatorMessage:' + message)
    
            if (isObject(fieldForm.errors[error])) {
              if (fieldForm.errors[error].errorPath) {
                return;
              }
    
              if (fieldForm.errors[error].message) {
                message = fieldForm.errors[error].message;
                console.log('fieldForm.errors[error].message:' + message)
  
              }
            }
    
            if (this.field.validation?.messages?.[error]) {
              message = this.field.validation.messages[error];
              console.log('this.field.validation.messages[error]:' + message)
  
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
  
    ngOnInit () {}
  
    ngOnChanges() {}
  }
  
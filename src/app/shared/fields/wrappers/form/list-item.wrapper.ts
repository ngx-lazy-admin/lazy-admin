import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { FieldWrapper, FormlyConfig } from '@ngx-formly/core';
import { NzFormTooltipIcon, NzFormLayoutType } from 'ng-zorro-antd/form';
import { isObservable, Observable, of } from 'rxjs';

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
    <nz-list>
      <nz-list-item>
        <nz-list-item-meta
            nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
          <nz-list-item-meta-title>{{to.title}}</nz-list-item-meta-title>
          <nz-list-item-meta-description>{{to.description}}</nz-list-item-meta-description>
        </nz-list-item-meta>
        <ng-container #fieldComponent></ng-container>
      </nz-list-item>
    </nz-list>
  `,
})

export class ListItemWrapper extends FieldWrapper {

  labelStyle: object | null = null;
  controlStyle: object | null = null;

  get nzLayout(): NzFormLayoutType  {
    return this.props.layout || this.props.layout || 'horizontal'
  }

  get errorState(): boolean {
    return  !!(this.field.formControl?.invalid && 
      (this.field.formControl?.touched || this.options?.parentForm?.submitted || !!this.field.validation?.show))
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

  constructor(
    private config: FormlyConfig
  ) {
    super();
  }

  errorMessage$?: Observable<string>;

  ngOnInit () {}

  ngOnChanges() {}
}

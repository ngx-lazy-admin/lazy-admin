import { Component, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSegmentedOption } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'div[segmented-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ant-form-item-required:before {
        display: inline-block;
        margin-right: 4px;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun,sans-serif;
        line-height: 1;
        content: "*";
      }
    `
  ],
  template: `
    <nz-segmented
      [formControl]="control"
			[formlyAttributes]="field"
      [nzBlock]="nzBlock"
      [nzDisabled]="nzDisabled"
      [nzOptions]="nzOptions"
      [nzSize]="nzSize"
      [nzLabelTemplate]="temp"
      (nzValueChange)="valueChange($event)">
    </nz-segmented>

    <ng-template #temp let-index="index" let-data="$implicit">
      <ng-container [ngSwitch]="index">
        <ng-container *ngSwitchCase="0">
          <nz-avatar nzSrc="https://joeschmoe.io/api/v1/random"></nz-avatar>
          <div>{{data.label}}</div>
        </ng-container>
        <ng-container *ngSwitchCase="1">
          <nz-avatar nzText="K"></nz-avatar>
          <div>User 2</div>
        </ng-container>
        <ng-container *ngSwitchCase="2">
          <nz-avatar nzIcon="user"></nz-avatar>
          <div>User 3</div>
        </ng-container>
      </ng-container>
    </ng-template>
  `
})

export class SegmentedField extends FieldType {

  // @ViewChild('temp', { static: true, read: TemplateRef }) templateRef!: TemplateRef<{
  //   $implicit: NzSegmentedOption;
  //   index: number;
  // }>;

  get control() : FormControl {
		return this.formControl as FormControl;
  }

	get nzBlock(): boolean {
		return this.props.nzBlock || this.props.block || false;
	}

	get nzDisabled(): boolean {
		return this.props.nzDisabled || this.props.disabled || false;
  }

  get nzSize() : 'small' | 'default' | 'large' {
		return this.props.nzSize || this.props.size || 'default';
  }

  get nzOptions () : string[] | number[] | Array<{ label: string; value: string | number; icon: string; disabled?: boolean; useTemplate?: boolean }> {
    return this.props.nzOptions || this.props.options || []
  }

  get readonly(): boolean {
    return this.props.readonly || false
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  valueChange ($event: any) {
    if (this.props.valueChange) {
      this.props.valueChange($event)
    }
  }
}

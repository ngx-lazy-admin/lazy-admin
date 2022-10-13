import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[radio-field]',
  template: `
    <nz-radio-group 
      [formControl]="control"
      [formlyAttributes]="field"
      [nzButtonStyle]="nzButtonStyle"
      [nzSize]="nzSize"
      (ngModelChange)="ngModelChange($event)"
      ngDefaultControl>
      <ng-container *ngIf="radioButton">
        <label nz-radio-button [nzValue]="o.value" [nzDisabled]="o.disabled" *ngFor="let o of nzOptions">{{ o.label }}</label>
      </ng-container>

      <ng-container *ngIf="!radioButton">
        <label nz-radio [nzValue]="o.value" [nzDisabled]="o.disabled" *ngFor="let o of nzOptions">{{ o.label }}</label>
      </ng-container>

    </nz-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class RadioGroupField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzName(): string {
		return this.props.nzName || this.props.name || '';
	}

  get nzDisabled(): boolean {
		return this.props.nzDisabled || this.props.disabled || false;
	}

  get nzSize(): 'large' | 'small' | 'default' {
		return this.props.nzSize || this.props.size || 'default';
	}

  get nzButtonStyle(): 'outline' | 'solid' {
		return this.props.nzButtonStyle || this.props.buttonStyle || 'outline';
	}

  get radioButton(): boolean {
		return this.props.radioButton || false;
	}

  get nzOptions(): any[] {
    return this.props.nzOptions || this.props.options || []
  }

  ngModelChange ($event: Event) {
    if (this.props.change) {
        this.props.change(this.field, $event)
    }
  }
}

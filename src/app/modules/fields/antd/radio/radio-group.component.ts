import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[radio-field]',
  template: `
    <nz-radio-group 
      [formControl]="control"
      [formlyAttributes]="field"
      [nzDisabled]="nzDisabled"
      [nzButtonStyle]="nzButtonStyle"
      [nzSize]="nzSize"
      (ngModelChange)="ngModelChange($event)"
      ngDefaultControl>
      <ng-container *ngIf="radioButton">
        <label nz-radio-button [nzValue]="o.value" [nzDisabled]="o.disabled" *ngFor="let o of nzOptions">{{ o.label }} {{o.disabled}}</label>
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
		return this.to.nzName || this.to.name || '';
	}

  get nzDisabled(): boolean {
		return this.to.nzDisabled || this.to.disabled || false;
	}

  get nzSize(): 'large' | 'small' | 'default' {
		return this.to.nzSize || this.to.size || 'default';
	}

  get nzButtonStyle(): 'outline' | 'solid' {
		return this.to.nzButtonStyle || this.to.buttonStyle || 'outline';
	}

  get radioButton(): boolean {
		return this.to.radioButton || false;
	}

  get nzOptions(): any[] {
    return this.to.nzOptions || this.to.options || []
  }

  ngModelChange ($event: Event) {
    if (this.to.change) {
        this.to.change(this.field, $event)
    }
  }
}

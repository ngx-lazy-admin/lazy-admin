import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[alert-field]',
  template: `
    <!-- <g2-plot-item
      [formControl]="control"
      [formlyAttributes]="field"
      (ngModelChange)="ngModelChange($event)">
    </g2-plot-item> -->1
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,


})
export class G2PlotField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get disabled(): boolean {
		return this.to.disabled || false;
	}

  ngModelChange ($event: any) {
    console.log($event)
  }

  ngOnDestroy(): void {
  }
}

import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { LineOptions } from '@antv/g2plot';

@Component({
  selector: 'div[g2-plot-field]',
  template: `
    <!-- <g2-plot-item
      [formControl]="control"
      [formlyAttributes]="field"

      (ngModelChange)="modelChange($event)"
      [config]="config"
    >
    </g2-plot-item> -->
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

  get config(): LineOptions {
    return this.to.config
  }

  ngAfterViewInit() {
    // this.field.formControl?.valueChanges.subscribe(value => {
    //   console.log(value)
    // })
  }

  ngOnDestroy(): void {
    
  }


  modelChange ($event: any) {
    // console.log('modelChange', $event)
  }
}

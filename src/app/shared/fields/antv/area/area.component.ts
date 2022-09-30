import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { LineOptions } from '@antv/g2plot';

@Component({
  selector: 'div[antv-area]',
  template: `
    <antv-area-item
      [formControl]="control"
      [formlyAttributes]="field"
      [config]="config"
    >
    </antv-area-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AntvAreaField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get disabled(): boolean {
		return this.props.disabled || false;
	}

  get config(): LineOptions {
    return this.props.config
  }

  ngAfterViewInit() {

  }

  ngOnDestroy(): void {
    
  }
}

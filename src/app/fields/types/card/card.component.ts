import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzDescriptionsSize  } from 'ng-zorro-antd/descriptions';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';

@Component({
  selector: 'div[card-field]',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  ]
})

export class CardField extends FieldArrayType implements OnDestroy {

	get nzTitle(): string|TemplateRef<void> {
		return this.to.nzTitle || false;
	}

	get nzExtra(): string|TemplateRef<void> {
    console.log(this.to.nzExtra)
		return this.to.nzExtra || '';
  }

  get nzBordered() : boolean {
		return this.to.nzBordered || false;
  }

  get nzColumn() : number | { [key in NzBreakpointEnum]: number } {
		return this.to.nzColumn || null;
  }

  get nzSize() : NzDescriptionsSize  {
		return this.to.nzSize || 'deafult';
  }

  get nzColon() : boolean {
		return this.to.nzColon || false;
  }

  get extraFields(): FormlyFieldConfig[] {
    return this.to.extraFields || []
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.map((item, index) => {
        super.remove(index)
      });
    }
  }

  onClick($event: any) {
    if (this.to.click) {
      this.to.click(this.field, $event)
    }
  }
}

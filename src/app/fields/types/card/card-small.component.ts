import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzDescriptionsSize  } from 'ng-zorro-antd/descriptions';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';

@Component({
  selector: 'div[card-field]',
  template: `
    <nz-card>
      <div class="d-flex justify-content-between bd-highlight">
        {{to.label}} 
        <i *ngIf="to.tooltip" 
          class="gray-500 text-dark"
          style="--bs-text-opacity: 0.45"
          nz-tooltip 
          [nzTooltipTitle]="to.tooltip"
          nz-icon
          nzType="question-circle" 
          nzTheme="outline">
        </i>
      </div>
      
      <ng-container *ngFor="let item of field.fieldGroup; let i = index; trackBy: trackByFn">
        <formly-field [field]="item"></formly-field>
      </ng-container>
    </nz-card>
  `,
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
  ]
})

export class CardSmallField extends FieldType  implements OnDestroy {

	get nzTitle(): string|TemplateRef<void> {
		return this.to.nzTitle || this.to.title || '';
	}

	get nzExtra(): string|TemplateRef<void> {
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
    return this.to.extraFields ? this.to.extraFields(this.field) : []
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {
  }
}

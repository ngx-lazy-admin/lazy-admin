import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldArrayType, FieldType } from '@ngx-formly/core';
import { NzDescriptionsLayout, NzDescriptionsSize  } from 'ng-zorro-antd/descriptions';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';

@Component({
  selector: 'div[description-field]',
  // templateUrl: './descriptions.component.html',
  template: `
  <nz-descriptions
    [nzTitle]="nzTitle"  
    [nzBordered]="nzBordered"
    [nzLayout]="nzLayout" 
    [nzSize]="nzSize"
    [nzColon]="nzColon"
    class="bg-white"
    [nzColumn]="nzColumn || { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
    <ng-container *ngFor="let item of field.fieldGroup; let i = index; trackBy: trackByFn">
      <nz-descriptions-item 
        [nzTitle]="nzDesTitle" 
        [nzSpan]="item?.templateOptions?.nzSpan || 1"
      >
        <formly-field [field]="item"></formly-field>
      </nz-descriptions-item>
      <ng-template #nzDesTitle>
        <td class="ant-descriptions-item-label" [class.ant-form-item-required]="item?.templateOptions?.required"> 
          {{ item?.templateOptions?.label || item?.templateOptions?.title }}
        </td>
      </ng-template>
    </ng-container>
  </nz-descriptions>

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

export class DescriptionsField extends FieldType implements OnDestroy {

	get nzTitle(): string|TemplateRef<void> {
		return this.to.nzTitle || this.to.title || '';
	}

	get nzExtra(): string|TemplateRef<void> {
		return this.to.nzExtra || '';
  }

  get nzBordered() : boolean {
		return this.to.nzBordered || this.to.bordered || false;
  }

  get nzColumn() : number | { [key in NzBreakpointEnum]: number } {
		return this.to.nzColumn || this.to.column || null;
  }

  get nzSize() : NzDescriptionsSize  {
		return this.to.nzSize || this.to.size || 'deafult';
  }

  get nzLayout(): NzDescriptionsLayout {
    return this.to.nzLayout || this.to.layout || 'horizontal'
  }

  get nzColon() : boolean {
		return this.to.nzColon || this.to.colon || false;
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      // this.field.fieldGroup.map((item, index) => {
      //   super.remove(index)
      // });
    }
  }
}

import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzDescriptionsSize  } from 'ng-zorro-antd/descriptions';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';

@Component({
  selector: 'div[card-taps-field]',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-card [nzTitle]="nzTitle" [nzExtra]="extraTemplate">
      <nz-card-tab>
        <nz-tabset [(nzSelectedIndex)]="index2">
          <nz-tab *ngFor="let tr of field.fieldGroup; let i = index; trackBy: trackByFn">
            <ng-container *ngFor="let td of tr.fieldGroup; trackBy: trackByFn">
              <formly-field [field]="td"></formly-field>
            </ng-container>
          </nz-tab>
        </nz-tabset>
      </nz-card-tab>
    </nz-card>

    <ng-template #extraTemplate>
      <formly-form [fields]="extraFields"></formly-form>
    </ng-template>
  
  `
})

export class CardTabsField extends FieldArrayType implements OnDestroy {

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

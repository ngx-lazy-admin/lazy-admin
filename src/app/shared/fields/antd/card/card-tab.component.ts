import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzDescriptionsSize  } from 'ng-zorro-antd/descriptions';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';

@Component({
  selector: 'div[card-tabs-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-card [nzTitle]="nzTitle" [nzExtra]="extraTemplate">
      <nz-card-tab>
        <nz-tabset>
          <ng-container *ngFor="let tr of field.fieldGroup; let i = index; trackBy: trackByFn">
            <nz-tab [nzTitle]="tr.templateOptions?.title">
              <formly-field [field]="tr"></formly-field>
            </nz-tab>
          </ng-container>
        </nz-tabset>
      </nz-card-tab>
    </nz-card>

    <ng-template #extraTemplate>
      <formly-form [fields]="extraFields"></formly-form>
    </ng-template>
  `
})

export class CardTabsField extends FieldType implements OnDestroy {

  get nzActions(): Array<TemplateRef<void>> {
		return this.to.nzActions || this.to.actions || '';
	}

  get nzBodyStyle(): { [key: string]: string } {
		return this.to.nzBodyStyle || this.to.bodyStyle || '';
	}

  get nzBorderless(): boolean {
		return this.to.nzBorderless || this.to.borderless || false;
	}

	get nzCover(): TemplateRef<void> {
		return this.to.nzCover || this.to.cover || '';
	}

  get nzExtra(): string|TemplateRef<void> {
		return this.to.nzExtra || this.to.extra || '';
	}

  get nzHoverable(): boolean {
		return this.to.nzHoverable || this.to.hoverable || false;
	}

  get nzLoading(): boolean {
		return this.to.nzLoading || this.to.loading || false;
	}

	get nzTitle(): string|TemplateRef<void> {
		return this.to.nzTitle || false;
	}

  get nzBordered() : boolean {
		return this.to.nzBordered || false;
  }

  get nzColumn() : number | { [key in NzBreakpointEnum]: number } {
		return this.to.nzColumn || null;
  }

  get nzSize() : NzDescriptionsSize  {
		return this.to.nzSize || 'default';
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

  ngOnDestroy() {}

  onClick($event: any) {
    if (this.to.click) {
      this.to.click(this.field, $event)
    }
  }
}

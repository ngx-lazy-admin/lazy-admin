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
		return this.props.nzActions || this.props.actions || '';
	}

  get nzBodyStyle(): { [key: string]: string } {
		return this.props.nzBodyStyle || this.props.bodyStyle || '';
	}

  get nzBorderless(): boolean {
		return this.props.nzBorderless || this.props.borderless || false;
	}

	get nzCover(): TemplateRef<void> {
		return this.props.nzCover || this.props.cover || '';
	}

  get nzExtra(): string|TemplateRef<void> {
		return this.props.nzExtra || this.props.extra || '';
	}

  get nzHoverable(): boolean {
		return this.props.nzHoverable || this.props.hoverable || false;
	}

  get nzLoading(): boolean {
		return this.props.nzLoading || this.props.loading || false;
	}

	get nzTitle(): string|TemplateRef<void> {
		return this.props.nzTitle || false;
	}

  get nzBordered() : boolean {
		return this.props.nzBordered || false;
  }

  get nzColumn() : number | { [key in NzBreakpointEnum]: number } {
		return this.props.nzColumn || null;
  }

  get nzSize() : NzDescriptionsSize  {
		return this.props.nzSize || 'default';
  }

  get nzColon() : boolean {
		return this.props.nzColon || false;
  }

  get extraFields(): FormlyFieldConfig[] {
    return this.props.extraFields || []
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {}

  onClick($event: any) {
    if (this.props.click) {
      this.props.click(this.field, $event)
    }
  }
}

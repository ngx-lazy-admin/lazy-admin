import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'div[card-field]',
  template: `
  <nz-card 
    [nzBodyStyle]="nzBodyStyle"
    [nzTitle]="nzTitle" 
    [nzType]="nzType" 
    [nzExtra]="extraFields ? extraTemplate : ''"
    [nzActions]="[actionEdit, actionEllipsis]"
    [nzBorderless]="nzBorderless">
    <i *ngIf="to.tooltip" 
      class="gray-500 text-dark position-absolute  top-0 end-0 me-3 mt-3"
      style="--bs-text-opacity: 0.45"
      nz-tooltip 
      [nzTooltipTitle]="to.tooltip"
      nz-icon
      nzType="exclamation-circle" 
      nzTheme="outline">
    </i>
    <ng-container *ngFor="let item of field.fieldGroup; let i = index; trackBy: trackByFn">
      <formly-field [field]="item"></formly-field>
    </ng-container>
  </nz-card>

  <ng-template #extraTemplate>
    <ng-container *ngIf="extraFields">
      <formly-form [fields]="extraFields"></formly-form>
    </ng-container>
  </ng-template>

  <ng-template #actionSetting>
    <i nz-icon nzType="setting"></i>
  </ng-template>

  <ng-container *ngFor="let item of nzActions">

    <!-- <span *ngIf="true">Value: {{ hero | json }}</span> -->
  </ng-container>

  <ng-template #hero>
    <div>111</div>
  </ng-template>

  <ng-template [cdkPortalOutlet]="selectedPortal"></ng-template>

  <ng-template #templatePortalContent>Hello, this is a template portal</ng-template>

  <input #ref2 type="text" />

  <button (click)="log(hero)">11 {{ref2.value}}</button>

  <ng-template #actionEdit>
    <i nz-icon nzType="edit"></i>
  </ng-template>
  <ng-template #actionEllipsis>
    <i nz-icon nzType="ellipsis"></i>
  </ng-template>

  {{ heros | json}}
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

export class CardField extends FieldType  implements OnDestroy {

  heros = [1,2,3]
  isOdd = '112'

  get nzActions(): Array<TemplateRef<void>> {
		return this.to.nzActions || this.to.actions || [111,222,333];
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
		return this.to.nzTitle || this.to.title || '';
	}

  get nzType(): 'inner' {
		return this.to.nzType || this.to.type || '';
	}

  get nzSize(): 'default'|'small' {
		return this.to.nzSize || this.to.size || 'default';
	}

  get nzBordered() : boolean {
		return this.to.nzBordered || false;
  }

  get nzColumn() : number | { [key in NzBreakpointEnum]: number } {
		return this.to.nzColumn || null;
  }

  get nzColon() : boolean {
		return this.to.nzColon || false;
  }

  get extraFields(): FormlyFieldConfig[] {
    return this.to.extraFields ? this.to.extraFields(this.field) : null
  }

  log (tmp: any) {
    console.log(tmp)
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

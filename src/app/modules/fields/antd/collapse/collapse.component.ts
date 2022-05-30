import { 
  Component, 
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'div[collapse-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ant-form-item-required:before {
        display: inline-block;
        margin-right: 4px;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun, sans-serif;
        line-height: 1;
        content: "*";
      }
    `
  ],
  template: `
    <nz-collapse 
      [nzAccordion]="nzAccordion"
      [nzBordered]="nzBordered"
      [nzGhost]="nzGhost"
      [nzExpandIconPosition]="nzExpandIconPosition"
    >
      <ng-container *ngFor="let field of field.fieldGroup; let i = index; trackBy: trackByFn">
        <nz-collapse-panel
          [nzDisabled]="field?.templateOptions?.disabled || false"
          [nzHeader]="field?.templateOptions?.header || ''"
          [nzExpandedIcon]="field?.templateOptions?.expandedIcon"
          [nzExtra]="field?.templateOptions?.extra"
          [nzShowArrow]="field?.templateOptions?.showArrow || true"
          [nzActive]="field?.templateOptions?.active"
          (nzActiveChange)="activeChange($event, field.templateOptions?.activeChange)"
        >
          <formly-field [field]="field"></formly-field>
        </nz-collapse-panel>
      </ng-container>
    </nz-collapse>
  `
})

export class CollapseField extends FieldArrayType implements OnDestroy {

	get nzAccordion(): boolean {
		return this.to.nzAccordion || false;
	}

	get nzBordered(): boolean {
		return this.to.nzBordered || false;
  }

  get nzGhost() : boolean {
		return this.to.nzGhost || false;
  }

  get nzExpandIconPosition() : 'left' | 'right' {
		return this.to.nzExpandIconPosition || 'right';
  }

  activeChange ($event: boolean, fn: any) {
    if (fn) {
      fn($event)
    }
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
}

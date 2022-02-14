import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef, ViewContainerRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { ActionTypeInterface, ShareFieldType } from '../share-field.type';


@Injectable({ providedIn: 'root' })
@Component({
  selector: 'div[group-field]',
  template: `

    <ng-container *ngFor="let item of field.fieldGroup; let i = index; trackBy: trackByFn">
      <formly-field [field]="item"></formly-field>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})


export class GroupField extends ShareFieldType  implements OnDestroy {


  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  templatePortal!: TemplatePortal<any>;

  get nzActions(): Array<ActionTypeInterface> {
    return this.to.actions || []
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


  actionEdit:any

  log (tmp: any) {
    console.log(tmp)
  }

  actionClick (data: any) {
    if (data.click) {
      data.click(this.field, this)
    }
  }

  select () {
    this.domPortalContent.nativeElement.innerHTML = `<a > ${Math.random()} <button nz-button>111</button> </a>`
    this.domPortal = new DomPortal(this.domPortalContent);
    this.selectedPortal = this.domPortal
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  domPortal?: any;

  ngAfterViewInit() {


    this.cd.detectChanges();
  }

  ngOnDestroy() {}

  onClick($event: any) {
    if (this.to.click) {
      this.to.click(this.field, $event)
    }
  }
}

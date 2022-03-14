import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef, ViewContainerRef, ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { ActionTypeInterface, ShareFieldType } from '../share-field.type';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FullScreenService } from 'src/app/services/menu/full-screen.service';



@Injectable({ providedIn: 'root' })
@Component({
  selector: 'div[card-field]',
  template: `

  <nz-card 
    [nzBodyStyle]="nzBodyStyle"
    [nzTitle]="nzTitle ? nzTitle : ''" 
    [nzType]="nzType" 
    [nzExtra]="extraTemplate"
    [nzHoverable]="nzHoverable"
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

    <ul class="ant-card-actions" *ngIf="nzActions.length">
      <li *ngFor="let action of nzActions" [style.width.%]="100 / nzActions.length">
        <span>
          <button nz-button nzType="link" (click)="this.actionClick(action)"> 
            <i *ngIf="action.icon" nz-icon [nzType]="action.icon"></i> {{ action.text }}
          </button>
        </span>
      </li>
    </ul>
  </nz-card>

  <ng-template #hero let-text="text" let-type="type">

  </ng-template>

  <ng-template #extraTemplate>
    <ng-container *ngFor="let action of extraActions; let i = index; trackBy: trackByFn">
      <a nz-popconfirm
        [nzPopconfirmTitle]="action.popconfirmTitle"
        (nzOnConfirm)="confirm()"
        (nzOnCancel)="cancel()" 
        (click)="click(action)">
        <i *ngIf="action.icon" nz-icon [nzType]="action.icon"></i> 
        {{ action.text }}
      </a>
    </ng-container>

    <i nz-icon class="f16" nz-button nzType="expand" (click)="fullScreen()" nzTheme="outline"></i>
  </ng-template>

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


export class CardField extends ShareFieldType  implements OnDestroy {
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

  get extraActions (): ActionTypeInterface[] {
    return this.to.extraActions || []
  }

  actionEdit:any

  constructor(
    public cd: ChangeDetectorRef,
    public http: HttpClient,
    public readonly zone: NgZone,
    public message: NzMessageService,
    private elRef: ElementRef,
    private fullScreenService: FullScreenService
  ) {
    super(cd, http, zone, message);
  }

  log (tmp: any) {
    console.log(tmp)
  }

  fullScreen() {
    const element = this.elRef.nativeElement
    this.fullScreenService.toggle(element).subscribe((item: any) => {
      console.log(item)
    })
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

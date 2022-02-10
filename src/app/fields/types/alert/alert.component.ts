import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { ShareFieldType } from '../share-field.type';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[alert-field]',
  template: `
    <nz-alert
      [nzType]="nzType"
      [nzCloseable]="nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzShowIcon]="nzShowIcon"
      [nzMessage]="nzMessage"
      (nzOnClose)="close()"
    ></nz-alert>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,


})
export class AlertField extends ShareFieldType {

  get disabled(): boolean {
		return this.to.disabled || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

	get nzType(): 'success' | 'info' | 'warning' | 'error' {
		return this.to.nzType || this.to.type || 'info';
	}

  get nzCloseable() : boolean {
		return this.to.nzCloseable || this.to.closeable || false;
  }

  get nzCloseText(): string | TemplateRef<void> {
    return this.to.nzCloseText || this.to.closeText || null;
  }

  get nzDescription() : string | TemplateRef<void> {
		return this.to.nzDescription || this.to.description || null;
  }

  get nzMessage() : string | TemplateRef<void> {
		return this.to.nzMessage || this.to.message || null;
  }

	get nzShowIcon(): boolean {
		return this.to.nzShowIcon || this.to.showIcon || false;
	}

  get nzIconType(): string {
    return this.to.nzIconType || this.to.iconType || ''
  }

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

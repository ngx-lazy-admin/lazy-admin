import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[badge-field]',
  template: `
    <nz-badge 
      [nzText]="formControl.value" 
      [nzStatus]="nzStatus"
      [nzColor]="nzColor"
      [nzCount]="nzCount"
      [nzDot]="nzDot"
      [nzShowDot]="nzShowDot"
      [nzOverflowCount]="nzOverflowCount"
      [nzShowZero]="nzShowZero"
      [nzText]="nzText"
      [nzTitle]="nzTitle"
      [nzOffset]="nzOffset"
      [nzStyle]="nzStyle">
    </nz-badge>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BadgeField extends ShareFieldType {

  get disabled(): boolean {
		return this.to.disabled || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzColor() : string {
		return this.to.nzColor || this.to.color;
  }

  get nzCount() : number | TemplateRef<void> {
		return this.to.nzCount || this.to.count;
  }

  get nzDot() : boolean {
		return this.to.nzDot || this.to.dot;
  }

  get nzShowDot() : boolean {
		return this.to.nzShowDot || this.to.nzShowDot;
  }

  get nzOverflowCount() : number {
		return this.to.nzOverflowCount || this.to.overflowCount || 99;
  }

  get nzShowZero() : boolean {
		return this.to.nzShowZero || this.to.showZero;
  }

  get nzStatus () : 'success' | 'processing' | 'default' | 'error' | 'warning' {
    return this.to.nzStatus || this.to.status
  }

  get nzText () : string | TemplateRef<void> {
    return this.to.nzText || this.to.text
  }

  get nzTitle () : string | null {
    return this.to.nzTitle || this.to.title
  }

  get nzOffset () : [number, number] {
    return this.to.nzOffset || this.to.nzOffset
  }

  get nzStyle () : any {
    return this.to.style || this.to.nzStyle || {}
  }
  
  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

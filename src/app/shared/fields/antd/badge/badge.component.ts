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
		return this.props.disabled || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzColor() : string {
		return this.props.nzColor || this.props.color;
  }

  get nzCount() : number | TemplateRef<void> {
		return this.props.nzCount || this.props.count;
  }

  get nzDot() : boolean {
		return this.props.nzDot || this.props.dot;
  }

  get nzShowDot() : boolean {
		return this.props.nzShowDot || this.props.nzShowDot;
  }

  get nzOverflowCount() : number {
		return this.props.nzOverflowCount || this.props.overflowCount || 99;
  }

  get nzShowZero() : boolean {
		return this.props.nzShowZero || this.props.showZero;
  }

  get nzStatus () : 'success' | 'processing' | 'default' | 'error' | 'warning' {
    return this.props.nzStatus || this.props.status
  }

  get nzText () : string | TemplateRef<void> {
    return this.props.nzText || this.props.text
  }

  get nzTitle () : string | null {
    return this.props.nzTitle || this.props.title
  }

  get nzOffset () : [number, number] {
    return this.props.nzOffset || this.props.nzOffset
  }

  get nzStyle () : any {
    return this.props.style || this.props.nzStyle || {}
  }
  
  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

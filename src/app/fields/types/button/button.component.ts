import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { ShareFieldType } from '../share-field.type';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[button-field]',
  template: `
    <button nz-button
      [nzGhost]="nzGhost"
      [nzLoading]="nzLoading"
      [nzShape]="nzShape"
      [nzSize]="nzSize"
      [nzType]="nzType"
      [nzBlock]="nzBlock"
      (click)="click($event)"
    >
      <i *ngIf="icon" nz-icon [nzType]="icon"></i>
      <ng-container *ngIf="text">{{ text }}</ng-container>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,


})
export class ButtonField extends ShareFieldType {

  get disabled(): boolean {
		return this.to.disabled || false;
	}

	get nzGhost(): boolean {
		return this.to.nzGhost || this.to.ghost || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzShape() : NzButtonShape {
		return this.to.nzShape || this.to.shape || '';
  }

  get nzLoading(): boolean {
    return this.to.nzLoading || this.to.loading || false;
  }

  get nzSize() : NzButtonSize {
		return this.to.nzSize || this.to.size || 'default';
  }

  get nzType() : NzButtonType {
		return this.to.nzType || this.to.type || 'link';
  }

  get nzBlock() : boolean {
		return this.to.nzBlock || this.to.block || false;
  }

	get nzDanger(): boolean {
		return this.to.nzDanger || this.to.danger || false;
	}

  get text(): string {
    return this.to.text || ''
  }

  get icon(): string {
    return this.to.icon || ''
  }

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

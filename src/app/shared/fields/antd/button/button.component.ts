import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';

import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[button-field]',
  template: `
    <ng-container *ngIf="nzType !== 'link'">
      <button 
        nz-button
        [nzGhost]="nzGhost"
        [nzLoading]="nzLoading"
        [nzShape]="nzShape"
        [nzSize]="nzSize"
        [nzType]="nzType"
        [disabled]="disabled"
        [nzDanger]="nzDanger"
        nz-popconfirm
        [nzPopconfirmTitle]="nzPopconfirmTitle"
        [nzPopconfirmPlacement]="nzPopconfirmPlacement"
        type="submit"
        [nzBlock]="nzBlock"
        (click)="click()"
        (nzOnCancel)="cancel()"
      >
        <i *ngIf="icon" nz-icon [nzType]="icon"></i>
        <ng-container *ngIf="text">{{ text }}</ng-container>
      </button>
  </ng-container>

  <ng-container *ngIf="nzType === 'link'">
    <a 
      nz-button
      [nzGhost]="nzGhost"
      [nzLoading]="nzLoading"
      [nzShape]="nzShape"
      [nzSize]="nzSize"
      [nzType]="nzType"
      [disabled]="disabled"
      [nzDanger]="nzDanger"
      nz-popconfirm
      [nzPopconfirmTitle]="nzPopconfirmTitle"
      [nzPopconfirmPlacement]="nzPopconfirmPlacement"
      type="submit"
      [nzBlock]="nzBlock"
      (click)="click()"
      (nzOnCancel)="cancel()"
    >
      <i *ngIf="icon" nz-icon [nzType]="icon"></i>
      <ng-container *ngIf="text">{{ text }}</ng-container>
    </a>
  </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,


})
export class ButtonField extends ShareFieldType {

  get disabled(): boolean {
		return this.props.disabled || false;
	}

	get nzGhost(): boolean {
		return this.props.nzGhost || this.props.ghost || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzShape() : NzButtonShape {
		return this.props.nzShape || this.props.shape || '';
  }

  get nzLoading(): boolean {
    return this.props.nzLoading || this.props.loading || false;
  }

  get nzSize() : NzButtonSize {
		return this.props.nzSize || this.props.size || 'default';
  }

  get nzType() : NzButtonType {
		return this.props.nzType || this.props.type || '';
  }

  get nzBlock() : boolean {
		return this.props.nzBlock || this.props.block || false;
  }

	get nzDanger(): boolean {
		return this.props.nzDanger || this.props.danger || false;
	}

  get text(): string {
    return this.props.text || ''
  }

  get icon(): string {
    return this.props.icon || ''
  }

  get nzPopconfirmPlacement(): string {
    return this.props.nzPopconfirmPlacement || 'bottom'
  }

  get nzPopconfirmTitle(): string {
    return this.props.nzPopconfirmTitle || null
  }

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

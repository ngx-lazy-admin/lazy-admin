import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';

import { ActionTypeInterface, execEval, ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[button-field]',
  template: `
    <ng-container *ngFor="let item of nzOptions; let i = index">
      <a 
        nz-button 
        class="me-2"
        [class.me-2]="item?.type != 'link'" 
        [nzType]="item?.type || 'primary'" 
        [disabled]="item.disabled"
        [nzSize]="item?.size || 'small'"

        nz-popconfirm

        [nzPopconfirmTitle]="item.popconfirmTitle"
        [nzPopconfirmPlacement]="item.popconfirmPlacement"

        (click)="onClick(item, $event)"
        (nzOnConfirm)="confirm(item)"
        (nzOnCancel)="cancel(item)"
      >
        <i *ngIf="item?.icon" nz-icon nzType="item?.icon"></i>
        {{item.text}}
      </a>
      <ng-container *ngIf="nzGhost && i != nzOptions.length - 1">
        <nz-divider class="mx-0" nzType="vertical"></nz-divider>
      </ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonGroupField extends ShareFieldType implements OnInit {

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

  get nzMaxCount() : number {
    return this.to.nzMaxCount || 99;
  }

  get nzLoading(): boolean {
    return this.to.nzLoading || this.to.loading || false;
  }

  get nzSize() : NzButtonSize {
		return this.to.nzSize || this.to.size || 'default';
  }

  get nzType() : NzButtonType {
		return this.to.nzType || this.to.type || '';
  }

  get nzBlock() : boolean {
		return this.to.nzBlock || this.to.block || false;
  }

	get nzDanger(): boolean {
		return this.to.nzDanger || this.to.danger || false;
	}

  get nzOptions(): ActionTypeInterface[] {
    return this.to.nzOptions || this.to.options || []
  }


  private _destroy$ = new Subject<void>();

  onClick (item: ActionTypeInterface, $event: Event) {
    if (item.click) {
      this.zone.runOutsideAngular(() => {
        try{
          if (item.click) {
            const func = typeof(item.click) == 'string' ? execEval(item.click) : item.click;
            func(this.field, this, $event)
          }
        } catch (err){
          console.log('click: error', err)
        }
      });
    }
  }

  onConfirm (item: ActionTypeInterface) {
    if (item.confirm) {
      item.confirm(this.field, this);
    }
  }

  onCancel (item: ActionTypeInterface) {
    if (item.cancel) {
      item.cancel(this.field, this);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

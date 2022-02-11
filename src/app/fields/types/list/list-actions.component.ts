import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
 } from '@angular/core';
import { Subject } from 'rxjs';
import { ButtonGroupOptionInterface } from '../button/button-group.component';
import { ShareFieldType, ActionTypeInterface } from '../share-field.type';

@Component({
  selector: 'div[list-actions-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ul nz-list-item-actions>
      <ng-container *ngFor="let action of actionOptions.slice(0, maxTagCount); let i = index; trackBy: trackByFn">
        <nz-list-item-action>
          <a         
            nz-popconfirm
            [nzPopconfirmTitle]="action.popconfirmTitle"
            (nzOnConfirm)="confirm()"
            (nzOnCancel)="cancel()" 
            (click)="click(action)">
            <i *ngIf="action.icon" nz-icon [nzType]="action.icon"></i> 
            {{ action.text }}
          </a>
        </nz-list-item-action>
      </ng-container>
      <nz-list-item-action>
        <a nz-dropdown [nzDropdownMenu]="menu">
          更多
          <i nz-icon nzType="down"></i>
        </a>
      </nz-list-item-action>
    </ul>

    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu nzSelectable>
      <ng-container *ngFor="let action of actionOptions.slice(maxTagCount); let i = index; trackBy: trackByFn">
        <li nz-menu-item
          nz-popconfirm
          [nzPopconfirmTitle]="action.popconfirmTitle"
          (nzOnConfirm)="confirm(action)"
          (nzOnCancel)="cancel(action)" 
          (click)="click(action)">
          <i *ngIf="action.icon" nz-icon [nzType]="action.icon"></i> 
          {{ action.text }}
        </li>
        </ng-container>
      </ul>
    </nz-dropdown-menu>
  `,
  styles: [
    `
    .ant-list-item-action {
      margin-left: unset;
    }
    `
  ]
})

export class ListActionsField extends ShareFieldType implements OnDestroy {

  private destroy$ = new Subject();

  get nzSelectedIndex(): number {
		return this.to.nzSelectedIndex || 0;
	}

  get toolbarOptions () : ButtonGroupOptionInterface[] {
    return this.to.toolbarOptions || []
  }

  get actionOptions (): ActionTypeInterface[] {
    return this.to.actionOptions || []
  }

  get maxTagCount (): number {
    return this.to.maxTagCount || 2
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index;
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();    
  }
} 

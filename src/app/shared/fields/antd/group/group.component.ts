import { Component, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation, Injectable, HostBinding, OnInit, AfterViewInit } from '@angular/core';
import { ShareFieldType } from '../share-field.type';

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

export class GroupField extends ShareFieldType implements OnDestroy, AfterViewInit {
  @HostBinding('class') className = ''
  @HostBinding('style') bodyStyle = {}

  ngAfterViewInit() {
    this.className = this.to?.bodyClass;
    this.bodyStyle = this.to?.bodyStyle;
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {}
}

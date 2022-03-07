import { Component, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation, Injectable, HostBinding } from '@angular/core';
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
  host: {
    class: `bodyClass === true`,
  }
})

export class GroupField extends ShareFieldType  implements OnDestroy {
  @HostBinding('class') className = ''

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  bodyClass (): string {
    return this.to.bodyClass
  }

  ngAfterViewInit() {
    this.className = this.to.bodyClass;
    this.cd.detectChanges();
  }

  ngOnDestroy() {}

}

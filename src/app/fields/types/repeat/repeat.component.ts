import { Component, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation, Injectable } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { ShareFieldType } from '../share-field.type';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'div[repeat-field]',
  template: `1
    <cdk-virtual-scroll-viewport itemSize="80" class="example-viewport container" style="height: 40vh;">
      <div *cdkVirtualFor="let field of field.fieldGroup; let i = index;" class="row">
        <formly-field class="col" [field]="field"></formly-field>
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class RepeatField extends FieldArrayType  implements OnDestroy {

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {}

}

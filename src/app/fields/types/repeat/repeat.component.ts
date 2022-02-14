import { Component, OnDestroy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-repeat-section',
  template: `
  <ng-container *ngFor="let field of field.fieldGroup; let i = index; trackBy: trackByFn">
    <div [style.display]="!field.hide ? 'block' : 'none'">
      <formly-group
        [model]="model"
        [field]="field"
        [options]="options"
        [form]="formControl">
      </formly-group>
    </div>
  </ng-container>

  `
})

export class FormlyFieldRepeatComponent extends FieldArrayType  implements OnDestroy {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {
    // 组件销毁时, 删除循环的列表
    this.field.fieldGroup.map((item, index) => {
      super.remove(index);
    });
  }
}

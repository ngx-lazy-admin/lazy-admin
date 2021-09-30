import { Component, OnDestroy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-repeat-section',
  templateUrl: './repeat.component.html'
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

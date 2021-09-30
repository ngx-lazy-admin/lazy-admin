import { Component, OnDestroy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-model-component',
  templateUrl: './model.component.html'
})

export class FormlyFieldModelComponent extends FieldArrayType implements OnDestroy {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnDestroy() {
    // 组件销毁时, 删除循环的列表
    this.field.fieldGroup.map((item, index) => {
      super.remove(index);
    });
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}

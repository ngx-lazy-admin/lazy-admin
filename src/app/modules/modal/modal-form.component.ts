
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'nz-modal-custom-component',
  templateUrl: './modal-form.component.html',
})
export class NzModalCustomComponent {

  @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;

  form = new FormGroup({});
}

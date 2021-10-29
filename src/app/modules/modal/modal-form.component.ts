
/* declarations: NzModalCustomComponent */
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, Optional   } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import hotkeys from 'hotkeys-js';

import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'nz-modal-custom-component',
  templateUrl: './modal-form.component.html',
})
export class NzModalCustomComponent {

  @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;

  form = new FormGroup({});

  constructor(private modal: NzModalRef) {}

  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
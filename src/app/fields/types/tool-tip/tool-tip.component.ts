import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-tooltip-basic',
  template: `
        <span *ngIf="to['content']"
            [nzOverlayClassName]="to['nzOverlayClassName'] || ''"
            [nzOverlayStyle]="to['nzOverlayStyle'] || {}"
            [nzPlacement]="to['nzPlacement'] || 'top'"
            nz-tooltip
            [nzTitle]="model[key] || ''">{{to['content']}}
        </span>
  `
})
export class FormlyFieldTooltipComponent extends FieldType implements OnInit {
    ngOnInit () {}
    OnChange (event) {}
}

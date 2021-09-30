import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-formly-field-title',
    templateUrl: './label.component.html',
    styles: [`
        :host label {
            line-height: 1.5;
        }
    `]
})
export class FormlyFieldLabelComponent extends FieldType {}

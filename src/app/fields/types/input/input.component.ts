import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-formly-field-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class FormlyFieldInputComponent extends FieldType {

}

import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-number-component',
    templateUrl: './number.component.html'
})
export class FormlyFieldNumberComponent extends FieldType {
    formatter = (value: number | string) => {
        return value;
    }
    parser = (value: string) => value;
}

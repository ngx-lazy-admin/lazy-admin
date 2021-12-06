import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
    selector: 'div[template-field]',
    templateUrl: './template.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TemplateField extends FieldType {

}

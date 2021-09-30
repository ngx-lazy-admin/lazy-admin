import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-divider-component',
    templateUrl: './divider.component.html'
})
export class FormlyFieldDividerComponent extends FieldType {

    get nzDashed() {
        return this.to['nzDashed'] || false;
    }

    get nzType() {
        return this.to['nzType'] || 'horizontal';
    }

    get nzText() {
        return this.to['nzText'] || '';
    }

    get nzOrientation () {
        return this.to['nzOrientation'] || '';
    }
}

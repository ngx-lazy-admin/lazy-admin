import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea 
        nz-input [id]="id"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [rows]="to['nzRow'] || 3"
        [maxlength]="to['maxlength'] || 524288"
        [placeholder]="to['nzPlaceHolder'] || '请输入'"
        [nzSize]="to['nzSize']"
    ></textarea>
  `,
  styles: [`
    .textarea {
        font-size: 13px;
    }
    textarea::-webkit-input-placeholder { /* WebKit browsers */
        font-size: 13px;
    }
    textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
        font-size: 13px;
    }
    textarea::-ms-input-placeholder { /* Internet Explorer 10+ */
        font-size: 13px;
    }
  `]
})
export class FormlyFieldTextareaComponent extends FieldType {

}

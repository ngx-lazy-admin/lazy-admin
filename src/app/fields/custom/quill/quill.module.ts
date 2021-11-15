import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { FormlyModule } from '@ngx-formly/core';
import { QuillField } from './quill.component';

@NgModule({
  declarations: [
    QuillField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTimePickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'quill',
          component: QuillField,
        },
      ],
    }),
  ],
})
export class QuillFieldModule {}

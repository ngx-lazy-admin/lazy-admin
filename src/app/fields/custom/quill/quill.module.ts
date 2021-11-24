import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { QuillField } from './quill.component';
import { QuillEditField } from './quill-edit.component';

@NgModule({
  declarations: [
    QuillEditField,
    QuillField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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

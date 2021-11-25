import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TuiEditorField } from './tui-editor.component';
import { TuiEditFieldItem } from './tui-editor-item.component';

@NgModule({
  declarations: [
    TuiEditFieldItem,
    TuiEditorField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tui',
          component: TuiEditorField,
        },
      ],
    }),
  ],
})
export class TuiEditorFieldModule {}

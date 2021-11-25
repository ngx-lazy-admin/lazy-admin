   
import { NgModule } from '@angular/core';
import { EchartsFieldModule } from './echart';
import { QuillFieldModule } from './quill';
import { TuiEditorFieldModule } from './tui-editor';

@NgModule({
  imports: [
    QuillFieldModule,
    EchartsFieldModule,
    TuiEditorFieldModule
  ],
})
export class CustomFieldModule {}
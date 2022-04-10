import { NgModule } from '@angular/core';
import { AntvFieldModule } from './antv';
import { EchartsFieldModule } from './echart';
import { QuillFieldModule } from './quill';
import { TuiEditorFieldModule } from './tui-editor';

@NgModule({
  imports: [
    AntvFieldModule,
    QuillFieldModule,
    EchartsFieldModule,
    TuiEditorFieldModule,
  ],
})
export class CustomFieldModule {}
   
import { NgModule } from '@angular/core';
import { AntvFieldModule } from './antv';
import { CustomModule } from './custom/custom.module';
import { EchartsFieldModule } from './echart';
import { QuillFieldModule } from './quill';
import { TuiEditorFieldModule } from './tui-editor';

@NgModule({
  imports: [
    AntvFieldModule,
    QuillFieldModule,
    EchartsFieldModule,
    TuiEditorFieldModule,
    CustomModule
  ],
})
export class CustomFieldModule {}
   
import { NgModule } from '@angular/core';
import { AntvFieldModule } from './antv';
import { EchartsFieldModule } from './echart';
import { QuillFieldModule } from './quill';

@NgModule({
  imports: [
    AntvFieldModule,
    QuillFieldModule,
    EchartsFieldModule
  ],
})
export class CustomFieldModule {}
   
import { NgModule } from '@angular/core';
import { EchartsFieldModule } from './echart';
import { QuillFieldModule } from './quill';

@NgModule({
  imports: [
    QuillFieldModule,
    EchartsFieldModule
  ],
})
export class CustomFieldModule {}
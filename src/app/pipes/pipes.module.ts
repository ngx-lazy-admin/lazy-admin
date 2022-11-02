import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicPipe } from './dynamic/dynamic.pipe';
import { MarkedPipe } from './marked/marked.pipe';
import { WatermarkPipe } from './watermark/watermark.pipe';

@NgModule({
  declarations: [DynamicPipe, MarkedPipe, WatermarkPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicPipe, MarkedPipe, WatermarkPipe]
})
export class PipesModule {}

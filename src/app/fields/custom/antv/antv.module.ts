import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { G2PlotFieldModule } from './g2-plot';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    G2PlotFieldModule,
  ],
})
export class AntvFieldModule {}

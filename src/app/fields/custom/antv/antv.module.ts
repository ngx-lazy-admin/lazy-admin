import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { G2PlotFieldModule } from './g2-plot';
import { AntvLineFieldModule } from './line';
import { AntvAreaFieldModule } from './area';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    G2PlotFieldModule,
    AntvLineFieldModule,
    AntvAreaFieldModule
  ],
})
export class AntvFieldModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatePipe } from './template.pipe';

@NgModule({
  declarations: [
    TemplatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    TemplatePipe
  ]
})
export class FieldPipesModule {}
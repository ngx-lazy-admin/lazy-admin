import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FormlyModule } from '@ngx-formly/core';

import { ThemeComponent } from './theme.component';

@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    FormlyModule.forRoot({ extras: { renderFormlyFieldElement: false } }),
  ],
  exports: [
    ThemeComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ThemeModule {}
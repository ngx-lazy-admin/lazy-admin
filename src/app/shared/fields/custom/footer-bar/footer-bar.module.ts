import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FooterBarField } from './footer-bar.component';

@NgModule({
  declarations: [
    FooterBarField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'footer-bar',
          component: FooterBarField,
        },
      ],
    }),
  ],
})
export class FooterBarModule {}

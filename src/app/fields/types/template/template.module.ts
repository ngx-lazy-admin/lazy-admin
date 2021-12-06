import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateField } from './template.component'

@NgModule({
  declarations: [TemplateField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-template',
          component: TemplateField,
        },
        {
          name: 'html',
          component: TemplateField,
        },
        {
          name: 'text',
          component: TemplateField,
        }
      ],
    }),
  ],
})
export class TemplateFieldModule {}
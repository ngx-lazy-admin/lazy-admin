import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateField } from './template.component';
import { NzPipesModule } from 'ng-zorro-antd/pipes';

@NgModule({
  declarations: [TemplateField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzPipesModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-template',
          component: TemplateField,
        },
        {
          name: 'template',
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
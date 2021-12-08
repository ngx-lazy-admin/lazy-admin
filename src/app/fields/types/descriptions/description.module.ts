import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { DescriptionField } from './description.component'

@NgModule({
  declarations: [DescriptionField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzDescriptionsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'description',
          component: DescriptionField,
        },
        {
          name: 'nz-description',
          component: DescriptionField,
        }
      ],
    }),
  ],
})
export class DescriptionFieldModule {}
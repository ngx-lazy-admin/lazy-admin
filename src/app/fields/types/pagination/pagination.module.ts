import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PaginationField } from './pagination.component';
import { paginationFieldItem } from './pagination-item.component';

@NgModule({
  declarations: [
    PaginationField,
    paginationFieldItem
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzPaginationModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'pagination',
          component: PaginationField,
        },
        {
          name: 'nz-pagination',
          component: PaginationField,
        }
      ],
    }),
  ],
})

export class PaginationFieldModule {}

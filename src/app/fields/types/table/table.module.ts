import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableField } from './table.component';
import { VirtualTableField } from './virtual-table.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { IconsProviderModule } from 'src/app/modules/icons-provider.module';


@NgModule({
  declarations: [
    TableField,
    VirtualTableField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IconsProviderModule,
    NzTableModule,
    NzEmptyModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'table',
          component: TableField,
        },
        {
          name: 'nz-table',
          component: TableField,
        },
        {
          name: 'virtual-table',
          component: VirtualTableField,
        },
      ],
    }),
  ],
})
export class TableFieldModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableField } from './table.component';
import { VirtualTableField } from './virtual-table.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { IconsProviderModule } from 'src/app/modules/icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


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
    NzToolTipModule,
    NzTableModule,
    NzEmptyModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
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
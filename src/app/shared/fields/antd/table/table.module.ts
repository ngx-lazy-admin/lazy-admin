import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { FormlyModule } from '@ngx-formly/core';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SimpleTableField } from './simple-table.component';
import { TableField } from './table.component';
import { VirtualTableField } from './virtual-table.component';
import { AntdTable } from './ant-table.component';
import { AntdTableField } from './ant-table-field.component';
import { ProTableField } from './pro-table.component';
// import { TemplatePipe } from './template.pipe';
import { ProTableItemComponent } from './pro-table-item.component';
import { FieldPipesModule } from '../../pipe/pipes.module';
// import { TemplatePipe } from '../template.pipe';

@NgModule({
  declarations: [
    TableField,
    VirtualTableField,
    SimpleTableField,
    AntdTableField,
    ProTableField,
    AntdTable,
    ProTableItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PortalModule,
    NzIconModule,
    NzToolTipModule,
    NzTableModule,
    NzEmptyModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzDropDownModule,
    FieldPipesModule,
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
        {
          name: 'simple-table',
          component: SimpleTableField
        },
        {
          name: 'antd-table',
          component: AntdTableField
        },
        {
          name: 'pro-table',
          component: ProTableField
        }
      ],
    }),
  ]
})
export class TableFieldModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListField } from './list.component';
import { VirtualListField } from './virtual-list.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { IconsProviderModule } from 'src/app/modules/icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ListActionsField } from './list-actions.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { WidthPipe } from './width.pipe';

@NgModule({
  declarations: [
    ListField,
    VirtualListField,
    ListActionsField,
    WidthPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IconsProviderModule,
    NzToolTipModule,
    NzListModule,
    NzEmptyModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzDropDownModule,
    NzPaginationModule,
    NzCardModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'list',
          component: ListField,
        },
        {
          name: 'nz-list',
          component: ListField,
        },
        {
          name: 'nz-list-actions',
          component: ListActionsField,
        },
        {
          name: 'list-actions',
          component: ListActionsField,
        },
        {
          name: 'virtual-list',
          component: VirtualListField,
        },
      ],
    }),
  ],
})
export class ListFieldModule {}
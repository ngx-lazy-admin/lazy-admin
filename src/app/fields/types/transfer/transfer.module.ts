import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { FormlyModule } from '@ngx-formly/core';
import { TransferField } from './transfer.component';

@NgModule({
  declarations: [TransferField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTransferModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-transfer',
          component: TransferField,
        },
      ],
    }),
  ],
})
export class TransferFieldModule {}

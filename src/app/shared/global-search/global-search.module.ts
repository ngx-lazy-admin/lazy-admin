import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { GlobalSearchComponent } from './global-search.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    GlobalSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ScrollingModule,

    NzAlertModule,
    NzIconModule,
    NzModalModule,
    NzListModule,
    NzInputModule
  ],
  exports: [
    GlobalSearchComponent
  ]
})
export class GlobalSearchModule {}
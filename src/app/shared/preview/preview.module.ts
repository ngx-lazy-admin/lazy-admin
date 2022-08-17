import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { PreviewContent } from './preview-content.component';

@NgModule({
  declarations: [
    PreviewContent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NzButtonModule,
    NzModalModule,
    DragDropModule,
    NzIconModule,
  ],
  exports: [
    PreviewContent,
  ]
})
export class PreviewModule { }

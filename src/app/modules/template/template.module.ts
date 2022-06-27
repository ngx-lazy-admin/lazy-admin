import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { IconsProviderModule } from '../icons-provider.module';
import { DefaultComponentPortal, FooterComponentPortal, HeaderComponentPortal, IconComponentPortal } from './template.component';

@NgModule({
  declarations: [
    HeaderComponentPortal,
    FooterComponentPortal,
    DefaultComponentPortal,
    IconComponentPortal
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzButtonModule,
    NzModalModule,
    DragDropModule,
    NzIconModule,
  ],
  exports: [
    HeaderComponentPortal,
    FooterComponentPortal,
    IconComponentPortal
  ]
})
export class TemplateModule { }

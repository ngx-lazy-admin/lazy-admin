import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { IconsProviderModule } from '../icons-provider.module';
import { DefaultComponentPortal, FooterComponentPortal, HeaderComponentPortal, IconPortal, InputPortal } from './template.component';

@NgModule({
  declarations: [
    HeaderComponentPortal,
    FooterComponentPortal,
    DefaultComponentPortal,
    InputPortal,
    IconPortal
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
    NzInputModule
  ],
  exports: [
    HeaderComponentPortal,
    FooterComponentPortal,
    InputPortal,
    IconPortal
  ]
})
export class TemplateModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    ListComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,

  ]
})
export class ListModule { }

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
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { MatListModule } from '@angular/material/list';
// import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';

// import { NzAutocompleteOptionComponent } from './autocomplete-option.component';

@NgModule({
  declarations: [
    GlobalSearchComponent

    // NzAutocompleteOptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ScrollingModule,
    NzAutocompleteModule,

    MatListModule,

    NzAlertModule,
    NzIconModule,
    NzModalModule,
    NzListModule,
    NzInputModule
  ],
  exports: [GlobalSearchComponent]
})
export class GlobalSearchModule {}

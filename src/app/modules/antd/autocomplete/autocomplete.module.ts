import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { AutocompleteFields } from './autocomplete.component'

@NgModule({
  declarations: [AutocompleteFields],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzAutocompleteModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'autocomplete',
          component: AutocompleteFields,
        },
        {
          name: 'nz-autocomplete',
          component: AutocompleteFields,
        }
      ],
    }),
  ],
})
export class AutocompleteFieldModule {}
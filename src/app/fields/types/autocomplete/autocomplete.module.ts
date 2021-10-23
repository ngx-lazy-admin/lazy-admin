import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteFields } from './autocomplete.component'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

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
          name: 'nz-autocomplete',
          component: AutocompleteFields,
        }
      ],
    }),
  ],
})
export class AutocompleteFieldModule {}
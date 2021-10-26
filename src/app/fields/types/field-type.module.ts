   
import { NgModule } from '@angular/core';

import { InputFieldModule } from './input';
import { AutocompleteFieldModule } from './autocomplete';
import { ButtonFieldModule } from './button';
import { InputNumberFieldModule } from './input-number';

@NgModule({
  imports: [
    InputFieldModule,
    AutocompleteFieldModule,
    ButtonFieldModule,
    InputNumberFieldModule
  ],
})
export class FieldTypeModule {}
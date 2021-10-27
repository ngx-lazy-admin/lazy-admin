   
import { NgModule } from '@angular/core';

import { InputFieldModule } from './input';
import { AutocompleteFieldModule } from './autocomplete';
import { ButtonFieldModule } from './button';
import { InputNumberFieldModule } from './input-number';
import { CheckboxFieldModule } from './checkbox';


@NgModule({
  imports: [
    InputFieldModule,
    AutocompleteFieldModule,
    ButtonFieldModule,
    InputNumberFieldModule,
    CheckboxFieldModule,
  ],
})
export class FieldTypeModule {}
   
import { NgModule } from '@angular/core';

import { InputFieldModule } from './input';
import { AutocompleteFieldModule } from './autocomplete';
import { ButtonFieldModule } from './button';


@NgModule({
  imports: [
    InputFieldModule,
    AutocompleteFieldModule,
    ButtonFieldModule
  ],
})
export class FieldTypeModule {}
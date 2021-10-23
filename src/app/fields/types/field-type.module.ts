   
import { NgModule } from '@angular/core';

import { InputFieldModule } from './input';
import { AutocompleteFieldModule } from './autocomplete';

@NgModule({
  imports: [
    InputFieldModule,
    AutocompleteFieldModule
  ],
})
export class FieldTypeModule {}
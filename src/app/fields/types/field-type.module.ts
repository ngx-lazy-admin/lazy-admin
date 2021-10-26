   
import { NgModule } from '@angular/core';

import { InputFieldModule } from './input';
import { AutocompleteFieldModule } from './autocomplete';
import { ButtonFieldModule } from './button';
import { InputNumberFieldModule } from './input-number';
import { CheckboxFieldModule } from './checkbox';
import { CheckboxGroupFieldModule } from './checkbox-group';
import { CheckboxWrapperFieldModule } from './checkbox-wrapper';


@NgModule({
  imports: [
    InputFieldModule,
    AutocompleteFieldModule,
    ButtonFieldModule,
    InputNumberFieldModule,
    CheckboxFieldModule,
    CheckboxGroupFieldModule,
    CheckboxWrapperFieldModule
  ],
})
export class FieldTypeModule {}
   
import { NgModule } from '@angular/core';
import { AutocompleteFieldModule } from './autocomplete';
import { ButtonFieldModule } from './button';
import { CheckboxFieldModule } from './checkbox';
import { DatePickerFieldModule } from './date-picker';
import { InputFieldModule } from './input';
import { InputNumberFieldModule } from './input-number';
import { RadioFieldModule } from './radio';
import { RateFieldModule } from './rate';
import { SliderFieldModule } from './slider';
import { TimePickerFieldModule } from './time-picker';
import { UploadFieldModule } from './upload';


@NgModule({
  imports: [
    AutocompleteFieldModule,
    ButtonFieldModule,
    CheckboxFieldModule,
    DatePickerFieldModule,
    InputFieldModule,
    InputNumberFieldModule,
    RadioFieldModule,
    RateFieldModule,
    UploadFieldModule,
    SliderFieldModule,
    TimePickerFieldModule
  ],
})
export class FieldTypeModule {}
   
import { NgModule } from '@angular/core';
import { AutocompleteFieldModule } from './autocomplete';
import { ButtonFieldModule } from './button';
import { CheckboxFieldModule } from './checkbox';
import { DatePickerFieldModule } from './date-picker';
import { DescriptionFieldModule } from './descriptions';
import { InputFieldModule } from './input';
import { InputNumberFieldModule } from './input-number';
import { RadioFieldModule } from './radio';
import { RateFieldModule } from './rate';
import { SelectFieldModule } from './select';
import { SliderFieldModule } from './slider';
import { StepsFieldModule } from './steps';
import { TabsFieldModule } from './tabs';
import { TagFieldModule } from './tag';
import { TemplateFieldModule } from './template';
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
    TimePickerFieldModule,
    TagFieldModule,
    DescriptionFieldModule,
    TemplateFieldModule,
    TabsFieldModule,
    StepsFieldModule,
    SelectFieldModule
  ],
})
export class FieldTypeModule {}
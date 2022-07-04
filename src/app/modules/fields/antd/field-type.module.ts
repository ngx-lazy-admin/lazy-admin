   
import { NgModule } from '@angular/core';
import { AlertFieldModule } from './alert';
import { AutocompleteFieldModule } from './autocomplete';
import { ButtonFieldModule } from './button';
import { CardFieldModule } from './card';
import { CascaderFieldModule } from './cascader';
import { CheckboxFieldModule } from './checkbox';
import { CollapseFieldModule } from './collapse';
import { DatePickerFieldModule } from './date-picker';
import { DescriptionFieldModule } from './descriptions';
import { GroupFieldModule } from './group';
import { InputFieldModule } from './input';
import { InputNumberFieldModule } from './input-number';
import { ListFieldModule } from './list';
import { ModalFieldModule } from './modal';
import { ProgressFieldModule } from './progress';
import { RadioFieldModule } from './radio';
import { RateFieldModule } from './rate';
import { RepeatFieldModule } from './repeat';
import { SelectFieldModule } from './select';
import { SliderFieldModule } from './slider';
import { StatisticFieldModule } from './statistic';
import { StepsFieldModule } from './steps';
import { SwitchFieldModule } from './switch';
import { TableFieldModule } from './table';
import { TabsFieldModule } from './tabs';
import { TagFieldModule } from './tag';
import { TemplateFieldModule } from './template';
import { TimePickerFieldModule } from './time-picker';
import { TreeFieldModule } from './tree';
import { UploadFieldModule } from './upload';
import { PaginationFieldModule } from './pagination';
import { BadgeFieldModule } from './badge/badge.module';
import { MentionFieldModule } from './mention';
import { TypographyFieldModule } from './typography';
import { SegmentedFieldModule } from './segmented';
import { TreeSelectFieldModule } from './tree-select';
import { TransferFieldModule } from './transfer';

@NgModule({
  imports: [
    AlertFieldModule,
    AutocompleteFieldModule,
    BadgeFieldModule,
    ButtonFieldModule,
    CascaderFieldModule,
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
    SwitchFieldModule,
    SelectFieldModule,
    CardFieldModule,
    TableFieldModule,
    CollapseFieldModule,
    StatisticFieldModule,
    SegmentedFieldModule,
    ListFieldModule,
    ProgressFieldModule,
    TreeFieldModule,
    TypographyFieldModule,
    GroupFieldModule,
    RepeatFieldModule,
    ModalFieldModule,
    PaginationFieldModule,
    MentionFieldModule,
    TreeSelectFieldModule,
    TransferFieldModule
  ],
  providers: [
    
  ],
})
export class FieldTypeModule {}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { NgZorroAntdModule, NZ_ICONS, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

// ngx-zorro 的组件扩展
import { OverlayModule } from '@angular/cdk/overlay';

// 富文本
// import { QuillModule } from 'ngx-quill'
// import QuillBetterTable from 'quill-better-table'

// 自定义的formly组件库
import { FormlyFieldInputComponent } from './types/input/input.component';
import { FormlyFieldTextareaComponent } from './types/textarea/textarea.component';
import { AutocompleteComponent } from './types/autocomplete/autocomplete.component';
import { FormlyFieldCascaderComponent } from './types/cascader/cascader.component';
import { FormlyFieldCheckboxComponent } from './types/checkbox/checkbox.component';
import { FormlyFieldDatePickerComponent } from './types/date-picker/date-picker.component';
import { FormlyFieldNumberComponent } from './types/number/number.component';
import { FormlyFieldRadioComponent } from './types/radio/radio.component';
import { FormlyFieldRateComponent } from './types/rate/rate.component';
import { FormlyFieldSelectComponent } from './types/select/select.component';
import { FormlyFieldSliderComponent } from './types/slider/slider.component';
import { FormlyFieldSwitchComponent } from './types/switch/switch.component';
import { FormlyFieldTimePickerComponent } from './types/time-picker/time-picker.component';
import { NzTreeSelectComponent } from './types/tree-select/tree-select.component';
import { FormlyFieldDateRangePickerComponent } from './types/date-range-picker/date-range-picker.component';
import { FormlyFieldTooltipComponent } from './types/tool-tip/tool-tip.component';
import { FormlyFieldTitleComponent } from './types/title/title.component';
import { FormlyFieldRepeatComponent } from './types/repeat/repeat.component';
import { FormlyFieldLabelComponent } from './types/label/label.component';
import { FormlyFieldButtonComponent } from './types/button/button.component';
import { FormlyFieldTemplateComponent } from './types/template/template.component';
import { FormlyFieldGridComponent } from './types/grid/grid.component';
import { FormlyFieldTableComponent } from './types/table/table.component';
import { FormlyFieldModelComponent } from './types/model/model.component';
import { FormlyFieldDividerComponent } from './types/divider/divider.component';
import { NzAvatarUploaderComponent } from './types/avatar-uploader/avatar-uploader.component';
import { FormlyFieldSelectDateComponent } from './types/select-date/select-date.component';

import { FormlyFieldInputArrayComponent } from './types/input-array/input-array.component';

// repeat
import { TableSectionComponent } from './types/table-section/table-section.component';
import { TabSectionComponent } from './types/tab-section/tab-section.component';
import { TabsSectionComponent } from './types/tabs-section/tabs-section.component';
import { NzDesSectionComponent } from './types/des-section/des-section.component';

// wrappers
import { FormlyFieldPanelWrapperComponent } from './wrappers/panel/formly-field-panel-wrapper.component';
import { EmptyWrapperComponent } from './wrappers/empty-wrapper/empty-wrapper.component';
import { FormlyFieldWrapperComponent } from './wrappers/formly-field-wrapper/formly-field-wrapper.component';
import { InlineFieldWrapperComponent } from './wrappers/inline-field-wrapper/inline-field-wrapper.component';

// editor
import { NgxQuillComponent } from './types/ngx-quill/ngx-quill.component';
// import { TinyEditorComponent } from './types/tiny-editor/tiny-editor.component'

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };
  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

// 引入继承的多选框
export const ForRootFormlyModule = FormlyModule.forRoot({
    types: [
        {
            name: 'nz-input',
            wrappers: ['field-wrapper'],
            component: FormlyFieldInputComponent,
        },
        {
          name: 'nz-input-array',
          wrappers: ['field-wrapper'],
          component: FormlyFieldInputArrayComponent,
        },
        {
            name: 'nz-textarea',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTextareaComponent
        },
        {
            name: 'nz-autocomplete',
            wrappers: ['field-wrapper'],
            component: AutocompleteComponent
        },
        {
            name: 'nz-cascader',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCascaderComponent
        },
        {
            name: 'checkbox',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCheckboxComponent
        },
        {
            name: 'date-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldDatePickerComponent
        },
        {
            name: 'nz-date-range-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldDateRangePickerComponent
        },
        {
            name: 'nz-number',
            wrappers: ['field-wrapper'],
            component: FormlyFieldNumberComponent
        },
        {
            name: 'nz-radio',
            wrappers: ['field-wrapper'],
            component: FormlyFieldRadioComponent
        },
        {
            name: 'rate',
            wrappers: ['field-wrapper'],
            component: FormlyFieldRateComponent
        },
        {
            name: 'nz-select',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSelectComponent
        },
        {
            name: 'slider',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSliderComponent
        },
        {
            name: 'nz-switch',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSwitchComponent
        },
        {
            name: 'time-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTimePickerComponent
        },
        {
            name: 'nz-tree-select',
            wrappers: ['field-wrapper'],
            component: NzTreeSelectComponent
        },
        {
            name: 'tool-tip',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTooltipComponent
        },
        {
            name: 'table-section',
            component: TableSectionComponent
        },
        {
            name: 'nz-title',
            component: FormlyFieldTitleComponent
        },
        {
            name: 'tabs-section',
            component: TabsSectionComponent
        },
        {
            name: 'nz-grid',
            component: FormlyFieldGridComponent
        },
        {
            name: 'nz-repeat',
            component: FormlyFieldRepeatComponent
        },
        {
            name: 'tab-sections',
            component: TabSectionComponent
        },
        {
            name: 'nz-checkbox',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCheckboxComponent
        },
        {
            name: 'nz-label',
            component: FormlyFieldLabelComponent
        },
        {
            name: 'nz-button',
            component: FormlyFieldButtonComponent
        },
        {
            name: 'nz-template',
            component: FormlyFieldTemplateComponent
        },
        {
            name: 'nz-table',
            component: FormlyFieldTableComponent
        },
        {
            name: 'nz-model',
            component: FormlyFieldModelComponent
        },
        {
            name: 'nz-divider',
            component: FormlyFieldDividerComponent
        },
        {
            name: 'rich-text',
            component: NgxQuillComponent
        },
        {
            name: 'nz-avatar-uploader',
            component: NzAvatarUploaderComponent
        },
        {
            name: 'nz-des-section',
            component: NzDesSectionComponent
        },
        {
            name: 'select-date',
            component: FormlyFieldSelectDateComponent,
            wrappers: ['field-wrapper'],
        }
    ],
    wrappers: [
        {name: 'field-wrapper', component: FormlyFieldWrapperComponent},
        {name: 'panel-wrapper', component: FormlyFieldPanelWrapperComponent},
        {name: 'empty-wrapper', component: EmptyWrapperComponent},
        {name: 'inline-wrapper', component: InlineFieldWrapperComponent}
    ]
});

@NgModule({
    providers: [
        // { provide: NZ_I18N, useValue: zh_CN },
        // { provide: NZ_ICONS, useValue: icons }
    ],
    imports: [
        // NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        OverlayModule,
        ForRootFormlyModule,

        // QuillModule.forRoot()
    ],
    declarations: [
        FormlyFieldInputComponent,
        FormlyFieldInputArrayComponent,
        FormlyFieldTextareaComponent,
        AutocompleteComponent,
        FormlyFieldCascaderComponent,
        FormlyFieldCheckboxComponent,
        FormlyFieldDatePickerComponent,
        FormlyFieldDateRangePickerComponent,
        FormlyFieldNumberComponent,
        FormlyFieldRadioComponent,
        FormlyFieldRateComponent,
        FormlyFieldSelectComponent,
        FormlyFieldSliderComponent,
        FormlyFieldSwitchComponent,
        FormlyFieldTimePickerComponent,
        NzTreeSelectComponent,

        FormlyFieldTooltipComponent,
        TableSectionComponent,
        FormlyFieldTitleComponent,
        TabSectionComponent,
        FormlyFieldSelectDateComponent,

        FormlyFieldGridComponent,
        FormlyFieldRepeatComponent,
        FormlyFieldLabelComponent,
        NzAvatarUploaderComponent,
        FormlyFieldButtonComponent,
        TabsSectionComponent,
        FormlyFieldTemplateComponent,
        FormlyFieldTableComponent,
        FormlyFieldModelComponent,
        FormlyFieldDividerComponent,
        NgxQuillComponent,
        NzDesSectionComponent,
        EmptyWrapperComponent,
        FormlyFieldWrapperComponent,
        FormlyFieldPanelWrapperComponent,
        InlineFieldWrapperComponent,
    ],
    exports: [
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormlyModule,
        OverlayModule
    ]
})
export class FormlyNgxZorroModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FormlyNgxZorroModule,
            providers: []
        };
    }
}

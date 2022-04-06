export { FormlyForm } from './components/formly.form';
export { FormlyFieldConfig, FormlyTemplateOptions, FormlyFormOptions } from './components/formly.field.config';
export { FormlyField } from './components/formly.field';
export { FormlyAttributes } from './components/formly.attributes';

export { FORMLY_CONFIG, FormlyConfig, ConfigOption, FormlyExtension } from './services/formly.config';
export { FormlyFormBuilder } from './services/formly.form.builder';

export { FieldType, Field, FieldTypeConfig, FieldGroupTypeConfig } from './templates/field.type';
export { FieldArrayType, FieldArrayTypeConfig } from './templates/field-array.type';
export { FieldWrapper } from './templates/field.wrapper';

export {
	defineHiddenProp as ɵdefineHiddenProp, 
	reverseDeepMerge as ɵreverseDeepMerge,
	getFieldValue as ɵgetFieldValue,
	wrapProperty as ɵwrapProperty,
	clone as ɵclone
} from './utils';

export { FormlyModule } from './core.module';

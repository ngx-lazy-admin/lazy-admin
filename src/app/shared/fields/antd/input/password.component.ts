import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[input-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	template: `
    <nz-input-group [nzSuffix]="suffixTemplate">
      <input
        nz-input
				[type]="passwordVisible ? 'text' : 'password'"
				[formControl]="control"
				[formlyAttributes]="field"
        [placeholder]="placeholder"
      />
    </nz-input-group>
    <ng-template #suffixTemplate>
      <i nz-icon [nzType]="passwordVisible ? 'eye-invisible' : 'eye'" (click)="passwordVisible = !passwordVisible"></i>
    </ng-template>
	`
})
export class PasswordField extends FieldType {

	get nzBorderless(): boolean {
		return this.props.nzBorderless || this.props.borderless || false
	}

	get nzSize(): NzSizeLDSType {
		return this.props.nzSize || this.props.size || 'default'
	}

	get nzType(): string {
		return this.props.nzType || this.props.type || 'text'
	}

	get placeholder(): string {
		return this.props.nzPlaceholder || this.props.placeholder || ''
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }

	passwordVisible: boolean = false;
}

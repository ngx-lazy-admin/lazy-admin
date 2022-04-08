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
		return this.to.nzBorderless || this.to.borderless || false
	}

	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || this.to.size || 'default'
	}

	get nzType(): string {
		return this.to.nzType || this.to.type || 'text'
	}

	get placeholder(): string {
		return this.to.nzPlaceholder || this.to.placeholder || ''
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }

	passwordVisible: boolean = false;
}

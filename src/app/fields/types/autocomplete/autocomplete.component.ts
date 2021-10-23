import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-autocomplete-component',
    templateUrl: './autocomplete.component.html'
})
export class AutocompleteFields extends FieldType implements OnInit {
  data: any = [];

  get nzBorderless(): boolean {
		return this.to.nzBorderless || 'false'
	}

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzSize(): NzSizeLDSType {
		return this.to.nzSize || 'default'
	}

	get type(): string {
		return this.to.type || 'text'
	}

  get nzBackfill(): boolean {
		return this.to.nzBackfill || false
	}

  get nzDefaultActiveFirstOption(): boolean {
    return this.to.nzDefaultActiveFirstOption || false
  }

  get nzWidth(): number {
    return this.to.nzWidth
  }

  // set nzAutocompleteOptions(value) {
  //   this._options = value;
  // }
  // get nzAutocompleteOptions(): boolean {
  //   return this.to.options === undefined ? this._options : false;
  // }

  get autocompleteOptions() {
    return this.to.options
  } 

  private _options: boolean | undefined;

  ngOnInit () {
    if (this.to.options instanceof Array) {
      this.data = [...this.to.options];
    }
  }

  onInput($event: Event): void {
    const value = ($event.target as HTMLInputElement).value;
    this.data = value ? [value, value + value, value + value + value].map(item => {
      return {
        label: item,
        value: item
      }
    }) : [];  
  }
}

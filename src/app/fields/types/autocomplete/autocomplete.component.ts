import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType,  } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
// import { AutocompleteDataSource } from 'ng-zorro-antd/auto-complete';

interface AutocompleteDataSourceItem {
  value: string;
  label: string;
  disabled?: boolean
}

declare type AutocompleteDataSource = Array<AutocompleteDataSourceItem | string | number>;

@Component({
    selector: 'div[autocomplete-field]',
    templateUrl: './autocomplete.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AutocompleteFields extends FieldType implements OnInit {
  data: any = [];

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzBorderless(): boolean {
		return this.to.nzBorderless || 'false'
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

  get nzDataSource(): AutocompleteDataSource {
    return this.to.nzDataSource 
  }

  get nzDefaultActiveFirstOption(): boolean {
    return this.to.nzDefaultActiveFirstOption || false
  }

  get nzWidth(): number {
    return this.to.nzWidth
  }

  get nzOverlayClassName (): string {
    return this.to.nzOverlayClassName
  }

  get nzOverlayStyle (): string {
    return this.to.nzOverlayStyle
  }

  get compareWith(): any {
    return this.to.compareWith
  }
  // set nzAutocompleteOptions(value) {
  //   this._options = value;
  // }
  // get nzAutocompleteOptions(): boolean {
  //   return this.to.options === undefined ? this._options : false;
  // }


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

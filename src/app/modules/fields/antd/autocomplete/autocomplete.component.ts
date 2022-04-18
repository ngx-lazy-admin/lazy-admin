import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType,  } from 'ng-zorro-antd/core/types';
import { execFunc } from '../share-field.type';

interface AutocompleteDataSourceItem {
  value: string;
  label: string;
  disabled?: boolean
}

interface Option {
  label: string;
  value: string;
  age: number;
}

declare type AutocompleteDataSource = Array<AutocompleteDataSourceItem | string | number>;

@Component({
  selector: 'div[autocomplete-field]',
  template: `
  <input nz-input
    [formControl]="control"
    [formlyAttributes]="field"
    [nzSize]="nzSize"
    [nzBorderless]="nzBorderless"
    [type]="type"
    [nzAutocomplete]="auto"
    (ngModelChange)="change($event)">

  <nz-autocomplete #auto
    [nzBackfill]="nzBackfill"
    [nzDefaultActiveFirstOption]="nzDefaultActiveFirstOption"
    [nzWidth]="nzWidth"
    [nzDataSource]="data">
  </nz-autocomplete>
  
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteFields extends FieldType implements OnInit {
  data: any = [];

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzBorderless(): boolean {
		return this.to.nzBorderless || false
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

  // get nzDataSource(): AutocompleteDataSource {
  //   return this.to.nzDataSource 
  // }

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

  compareFun = (o1: Option | string, o2: Option): boolean => {
    if (o1) {
      return typeof o1 === 'string' ? o1 === o2.label : o1.value === o2.value;
    } else {
      return false;
    }
  };

  
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

  change(value: any): void {
    if (value) {
      const changeFn = execFunc(this.to?.modelChange)
      if (changeFn && changeFn instanceof Function) {
        try {
          this.data = changeFn(value, this.field) || []
        } catch (error) {
          this.data = []
        } finally {
          
        }
      }
    } else {
      this.data = []
    }
  }
}

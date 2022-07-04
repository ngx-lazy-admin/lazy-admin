import { Component, ChangeDetectionStrategy, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { formatDate } from '@angular/common';
import { TransferItem } from 'ng-zorro-antd/transfer';

@Component({
	selector: 'div[time-picker-field]',
	// templateUrl: './transfer.component.html',
	template: `
	<nz-transfer
		[nzDataSource]="list"
		[nzDisabled]="nzDisabled"
		[nzTitles]="['Source', 'Target']"
		(nzSelectChange)="selectChange($event)"
		[nzSelectedKeys]="['0', '2']"
		(nzChange)="change($event)">
	</nz-transfer>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
		'[class.display-contents]': `true`,
	}
})
export class TransferField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzId(): boolean {
		return this.to.nzId || false
	}

	get nzDisabled(): boolean {
    return this.to.nzDisabled || this.to.disabled || false
  }

	get nzTitles(): 	string[] {
    return this.to.nzTitles || this.to.nzTitles || ['', '']
  }

	list: TransferItem[] = [];

	ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1
      });
    }

    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

	selectChange ($event: any) {
		console.log($event)
		console.log('selectChange')
	}

	change ($event: any) {
		console.log($event)
	}

	ngModelChange ($event: Date) {
		if (this.to.change) {
			this.to.change(this.field, $event)
		}
	}

	nzOpenChange ($event: Event) {
		if (this.to.nzOpenChange) {
			this.to.nzOpenChange(this.field, $event)
		}
	}
}

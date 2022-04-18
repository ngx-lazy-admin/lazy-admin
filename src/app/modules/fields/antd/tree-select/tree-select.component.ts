import { Component, ChangeDetectionStrategy, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';

@Component({
    selector: 'div[tree-select-field]',
    templateUrl: './tree-select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
      'display': 'contents',
      '[class.display-contents]': `true`,
    }
})
export class TreeSelectField extends FieldType  {
  show: Boolean = false;
  value = null;
  nodes = [
      {
        title: 'Node1',
        value: '0',
        key: '0',
        children: [
          {
            title: 'Child Node1',
            value: '1',
            key: '1',
            isLeaf: true
          }
        ]
      },
      {
        title: 'Node2',
        value: '2',
        key: '2',
        children: [
          {
            title: 'Child Node3',
            value: '3',
            key: '3',
            isLeaf: true
          },
          {
            title: 'Child Node4',
            value: '4',
            key: '4',
            isLeaf: true
          },
          {
            title: 'Child Node5',
            value: '5',
            key: '5',
            isLeaf: true
          }
        ]
      }
  ];

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzId(): boolean {
		return this.to.nzId || false
	}

  get nzPlaceHolder(): string {
    return this.to.nzPlaceHolder || this.to.placeholder
  }
  
  get nzExpandedKeys(): string[] {
		return this.to.nzExpandedKeys || []
	}

  get nzNodes():  Array<NzTreeNode | NzTreeNodeOptions> {
		return this.to.nzNodes || []
	}

  get nzSuffixIcon(): boolean {
		return this.to.nzSuffixIcon || false
	}
  
	ngModelChange ($event: Date) {
    if (this.to.change) {
      this.to.change(this.field, $event)
    }
  }

  nzExpandChange ($event: Event) {
    if (this.to.nzOpenChange) {
      this.to.nzExpandChange(this.field, $event)
    }
	}

  onChange($event: string): void {}

  ngOnInit(): void {
    this.nodes = this.to['nzNodes'];
    this.show = true;
  }
}

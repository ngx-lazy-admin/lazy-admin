import { Component, ChangeDetectionStrategy, Input, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import { NzTreeComponent } from 'ng-zorro-antd/tree';

@Component({
    selector: 'div[tree-field]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
    <nz-tree
      #nzTreeComponent
      [nzData]="nodes"
      nzCheckable
      [nzCheckedKeys]="defaultCheckedKeys"
      [nzExpandedKeys]="defaultExpandedKeys"
      [nzSelectedKeys]="defaultSelectedKeys"
      (nzClick)="nzClick($event)"
      (nzContextMenu)="nzClick($event)"
      (nzCheckBoxChange)="nzCheck($event)"
      (nzExpandChange)="nzCheck($event)"
    ></nz-tree>
    `,
    host: {
      'display': 'contents',
      '[class.display-contents]': `true`,
    }
})
export class TreeField extends FieldType  {
  show: Boolean = false;
  value = null;

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzId(): boolean {
		return this.to.nzId || false
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
  
  get nzPlaceHolder(): string {
    return this.to.nzPlaceHolder || this.to.placeholder || '请选择'
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

  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: NzTreeComponent;
  defaultCheckedKeys = ['10020'];
  defaultSelectedKeys = ['10010'];
  defaultExpandedKeys = ['100', '1001'];

  nodes: NzTreeNodeOptions[] = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          disabled: true,
          children: [
            { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [
            { title: 'leaf 1-1-0', key: '10020', isLeaf: true },
            { title: 'leaf 1-1-1', key: '10021', isLeaf: true }
          ]
        }
      ]
    }
  ];

  nzClick(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.nzTreeComponent.getSelectedNodeList());
  }

  ngAfterViewInit(): void {
    // get node by key: '10011'
    console.log(this.nzTreeComponent.getTreeNodeByKey('10011'));
    // use tree methods
    console.log(
      this.nzTreeComponent.getTreeNodes(),
      this.nzTreeComponent.getCheckedNodeList(),
      this.nzTreeComponent.getSelectedNodeList(),
      this.nzTreeComponent.getExpandedNodeList()
    );
  }
}

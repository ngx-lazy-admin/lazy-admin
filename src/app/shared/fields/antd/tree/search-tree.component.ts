import { Component, ChangeDetectionStrategy, Input, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FieldType,  } from '@ngx-formly/core';

import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import { NzTreeComponent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'div[tree-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
  <nz-input-group class="mb-3" [nzSuffix]="suffixIcon" >
    <input type="text" nz-input placeholder="输入菜单名称搜索"  />
  </nz-input-group>

  <ng-template #suffixIcon>
    <i nz-icon nzType="search"></i>
  </ng-template>

  <nz-tree
    [nzData]="nodes"
    nzCheckable
    nzMultiple
    [nzCheckedKeys]="defaultCheckedKeys"
    [nzExpandedKeys]="defaultExpandedKeys"
    [nzSelectedKeys]="defaultSelectedKeys"
    (nzClick)="nzEvent($event)"
    (nzExpandChange)="nzEvent($event)"
    (nzCheckBoxChange)="nzEvent($event)"
  ></nz-tree>
  `,
  host: {
    'display': 'contents',
    '[class.display-contents]': `true`,
  }
})
export class SearchTreeField extends FieldType  {
  show: Boolean = false;
  value = null;

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzId(): boolean {
		return this.props.nzId || false
	}

  
  get nzExpandedKeys(): string[] {
		return this.props.nzExpandedKeys || []
	}

  get nzNodes():  Array<NzTreeNode | NzTreeNodeOptions> {
		return this.props.nzNodes || this.nodes || []
	}


  get nzSuffixIcon(): boolean {
		return this.props.nzSuffixIcon || false
	}
  
  get nzPlaceHolder(): string {
    return this.props.nzPlaceHolder || this.props.placeholder || '请选择'
  }
    
	ngModelChange ($event: Date) {
    if (this.props.change) {
      this.props.change(this.field, $event)
    }
  }

  nzExpandChange ($event: Event) {
    if (this.props.nzOpenChange) {
      this.props.nzExpandChange(this.field, $event)
    }
	}

  onChange($event: string): void {}

  ngOnInit(): void {
      // this.nodes = this.to['nzNodes'];
      this.show = true;
  }

  // @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: NzTreeComponent;
  defaultCheckedKeys = ['10020'];
  defaultSelectedKeys = ['10010'];
  defaultExpandedKeys = ['100', '1001'];


  nzClick(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    // console.log(keys, this.nzTreeComponent.getSelectedNodeList());
  }

  ngAfterViewInit(): void {
    // get node by key: '10011'
    // console.log(this.nzTreeComponent.getTreeNodeByKey('10011'));
    // use tree methods
    // console.log(
    //   this.nzTreeComponent.getTreeNodes(),
    //   this.nzTreeComponent.getCheckedNodeList(),
    //   this.nzTreeComponent.getSelectedNodeList(),
    //   this.nzTreeComponent.getExpandedNodeList()
    // );
  }

  searchValue = '';

  nodes = [
    {
      title: '首页',
      key: '0-0',
      expanded: true,
      children: [
        {
          title: 'Dashboard',
          key: '0-0-0',
          children: [
            { title: '主控页', key: '0-0-0-0', isLeaf: true },
            { title: '监控页', key: '0-0-0-1', isLeaf: true },
            { title: '工作台', key: '0-0-0-2', isLeaf: true }
          ]
        },
        {
          title: '系统管理',
          key: '0-0-1',
          children: [
            { title: '用户管理', key: '0-0-1-0', isLeaf: true },
            { title: '菜单权限管理', key: '0-0-1-1', isLeaf: true },
            { title: '角色权限管理', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '表单页面',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  nzEvent(event: any): void {
    console.log(event);
  }
}

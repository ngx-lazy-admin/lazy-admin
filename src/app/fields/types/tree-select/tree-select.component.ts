import { Component, OnInit} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-tree-select-component',
    templateUrl: './tree-select.component.html'
})
export class NzTreeSelectComponent extends FieldType implements OnInit {
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


  onChange($event: string): void {}

  ngOnInit(): void {
      this.nodes = this.to['nzNodes'];
      this.show = true;
  }
}

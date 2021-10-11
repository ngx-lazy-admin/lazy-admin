import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutSiderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

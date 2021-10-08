import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LayoutBasicComponent implements OnInit {

  constructor() { }

  percent = 0
  progress = false
  isCollapsed = false;

  ngOnInit(): void {
    this.progress = true;
  }

  afterClose(): void {
    console.log('close');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less']
})
export class LayoutBasicComponent implements OnInit {

  constructor() { }

  isCollapsed = false;
  ngOnInit(): void {
  }

}

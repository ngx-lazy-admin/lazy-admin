import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class LayoutMenuComponent implements OnInit {

  constructor() { }

  isCollapsed = false
  ngOnInit(): void {
  }

}

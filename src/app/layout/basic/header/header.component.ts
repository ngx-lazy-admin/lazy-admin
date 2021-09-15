import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class LayoutHeaderComponent implements OnInit {

  constructor() { }

  tabs = ['Tab 1', 'Tab 2'];
  selectedIndex = 0;

  // tabs = ['Tab 1', 'Tab 2'];
  // selectedIndex = 0;

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.selectedIndex = this.tabs.length;
  }

  ngOnInit(): void { }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutFooterBarComponent implements OnInit {

  constructor() { }

  checked = true;
  ngOnInit(): void {
  }

}

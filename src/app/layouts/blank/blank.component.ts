import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutBlankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('LayoutBlankComponent')
  }
}

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent implements OnInit {


  i: NzSafeAny = {};

  constructor(
    private cd: ChangeDetectorRef
  ) { 
    
  }

  ngOnInit(): void {
  }

}

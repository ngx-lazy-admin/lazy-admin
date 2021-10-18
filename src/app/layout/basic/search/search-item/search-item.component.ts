import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef
  ) { 
    
  }

  ngOnInit(): void {
  }

}

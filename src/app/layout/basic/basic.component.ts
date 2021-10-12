import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LayoutBasicComponent implements OnInit {

  percent = 0
  progress = false
  isCollapsed = false;

  constructor(
    public user: UserService,
    private layout: LayoutService,
    private cd: ChangeDetectorRef 
  ) {
    this.layout.isCollapsed$().subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })
  }



  ngOnInit(): void {
    this.progress = true;
  }

  afterClose(): void {
    console.log('close');
  }

  collapsedChange ($event: EventEmitter<boolean>) {
    this.layout.collapsChange();
  }
}

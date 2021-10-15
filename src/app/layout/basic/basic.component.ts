import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LayoutService } from '../layout.service';
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LayoutBasicComponent implements OnInit {

  percent = 0
  progress: boolean | null = false
  isCollapsed = false;

  constructor(
    public user: UserService,
    private layout: LayoutService,
    private cd: ChangeDetectorRef,
    private message: MessageService
  ) {
    // 布局状态
    this.layout.isCollapsed$().subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })

    // 进度条的加载状态
    this.message.loading$.subscribe(item => {
      this.progress = item
      this.percent = this.progress ? 100 : 0;
    });
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

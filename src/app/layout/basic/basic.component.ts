import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Optional } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

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
  dir: Direction = 'ltr';

  private destroy$ = new Subject<void>();
  // private _dirChangeSubscription = Subscription.EMPTY;
  constructor(
    public user: UserService,
    private layout: LayoutService,
    private cd: ChangeDetectorRef,
    private message: MessageService,
    @Optional() private directionality: Directionality
  ) {
    // 布局状态
    this.layout.change$?.pipe(takeUntil(this.destroy$)).subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })

    // 进度条的加载状态
    this.message.loadingChange$?.pipe(takeUntil(this.destroy$)).subscribe(item => {
      this.progress = item
      this.percent = this.progress ? 100 : 0;
    });

    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
  }

  ngOnInit(): void {
    this.progress = true;
  }

  afterClose(): void {
    console.log('close');
  }

  collapsedChange ($event: boolean) {
    this.layout.collapsChange($event);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

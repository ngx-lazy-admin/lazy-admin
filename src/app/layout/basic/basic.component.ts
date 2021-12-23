import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Optional } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { LayoutService } from '../layout.service';
import { MessageService } from '../../services/message.service'
import { ModalService } from 'src/app/modules/modal';
import { BreakpointMap, NzBreakpointKey, NzBreakpointService, siderResponsiveMap } from 'ng-zorro-antd/core/services';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'hostClick($event)'
  }
})
export class LayoutBasicComponent implements OnInit {

  percent: number = 100;
  progress: boolean | null = false;

  // 是否收缩
  isCollapsed: boolean = false;
  dir: Direction = 'ltr';

  nzWidth = 256
  nzCollapsedWidth = 256;
  isXs = false;

  map: any = {};

  nzWidthRange: number[] = []

  isVisible: boolean = true;
  index: number = 0;

  menus: any = null

  private destroy$ = new Subject<void>();
  // private _dirChangeSubscription = Subscription.EMPTY;
  constructor(
    public user: UserService,
    private layout: LayoutService,
    private cd: ChangeDetectorRef,
    private message: MessageService,
    private modal: ModalService,
    private menu: MenuService,
    private breakpointService: NzBreakpointService,
    private route: ActivatedRoute,
    private router: Router,

    @Optional() private directionality: Directionality,
  ) {
    // 布局状态
    this.layout.change$?.pipe(takeUntil(this.destroy$)).subscribe(item => {
      if (item) {
        this.index = 0
      } else {
        this.index = 1
      }
    })

    this.menu.change$?.subscribe(item => {
      this.menus = item;
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

    this.breakpointService
      .subscribe(siderResponsiveMap, true)
      .pipe(takeUntil(this.destroy$))
      .subscribe((map: any) => {
        this.map = map;
        if (map['lg'] || map['xl'] || map['xxl']) {
          this.index = 1;
          this.isVisible = false;
          this.nzWidthRange = [80, 256]
        } else if (map['sm'] || map['md']) {
          this.index = 0;
          this.isVisible = false;
          this.nzWidthRange = [80, 256]
        } else if (map['xs']) {
          this.isVisible = false;
          this.index = 0;
          this.nzWidthRange = [0, 256]
        }

        this.layout.collapsChange(!this.index);
        this.cd.markForCheck();
      });
  }

  ngOnInit(): void {
    this.progress = true;
    console.log(this.route)
    console.log(this.router)
  }

  afterClose(): void {
    console.log('close');
  }

  collapsedChange ($event: boolean) {
    this.layout.collapsChange($event);
  }

  close () {
    this.layout.collapsChange(!this.isCollapsed);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  hostClick ($event: Event) {
    this.modal.hideAll()
  }
}

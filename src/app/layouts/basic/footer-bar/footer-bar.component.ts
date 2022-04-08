import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '@app/services/api/user';

import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-layout-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutFooterBarComponent implements OnInit {

  isCollapsed = false;

  checked = true;

  private destroy$ = new Subject<void>();


  constructor(
    public user: UserService,
    private layout: LayoutService,
    private cd: ChangeDetectorRef 
  ) {
    this.layout.change$?.subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

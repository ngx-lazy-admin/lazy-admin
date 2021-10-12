import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-layout-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutFooterBarComponent implements OnInit {

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

  checked = true;
  ngOnInit(): void {
  }

}

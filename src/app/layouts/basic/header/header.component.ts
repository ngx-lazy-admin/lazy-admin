import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  HostListener,
  OnDestroy
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { LayoutService } from '../../layout.service';
import { MenuService } from '../../../services/api/menu/menu.services';
import { FullScreenService } from 'src/app/services/menu/full-screen.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bg-gray-100]': 'true',
    '[class.d-block]': 'true'
  }
})
export class LayoutHeaderComponent implements OnDestroy {

  isVisible: boolean = false;

  private destroy$ = new Subject<void>();

  status: boolean = false


  constructor(
    public overlay: Overlay, 
    public viewContainerRef: ViewContainerRef,
    public layout: LayoutService,
    public menu: MenuService,
    private cd: ChangeDetectorRef,
    private fullScreenService: FullScreenService
  ) {

    this.layout.change$
      ?.pipe(takeUntil(this.destroy$))
      .subscribe(item => {
        this.cd.markForCheck();
      })


    this.menu.tabsetChange$
      ?.pipe(takeUntil(this.destroy$))
      .subscribe(item => {
        this.cd.markForCheck();
      })
  }

  collapseChange (isCollapsed: boolean) {
    this.layout.collapseChange(isCollapsed);
  }

  fullScreen() {
    this.fullScreenService.toggle().subscribe(item => {})
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

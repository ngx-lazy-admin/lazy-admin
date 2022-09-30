import { 
  Component,
  OnInit,
  ChangeDetectionStrategy, 
  ChangeDetectorRef,
  ViewContainerRef,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { NzContextMenuService } from 'ng-zorro-antd/dropdown';

import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { MenuService, MenuType } from '../../menu.service';

export declare type menuOperationType = 'left' | 'right' | 'all' | 'reload' | 'other';

@Component({
  selector: 'app-layout-header-tabset',
  templateUrl: './header-tabset.component.html',
  styleUrls: ['./header-tabset.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderTabsetComponent implements OnInit {

  selectedIndex: number = 0;
  tabs: Array<MenuType|null> | null = []

  private _destroy$ = new Subject<void>();

  constructor(
    private contextMenuService: NzContextMenuService,
    private menu: MenuService,
    private cd: ChangeDetectorRef
  ) {
    this.menu.tabsetChange$.pipe(takeUntil(this._destroy$), debounceTime(60)).subscribe(item => {
      this.tabs = item
      if (this.tabs?.findIndex(item => item?.selected) || this.tabs?.findIndex(item => item?.selected) === 0) {
        this.selectedIndex = this.tabs?.findIndex(item => item?.selected)
      }
      this.cd.markForCheck();
    })
  }

  ngOnInit(): void {}

  closeTab({ index }: { index: number }): void {
    this.menu.closeTabSet(index)
  }

  newTab(): void {

  }

  contextMenu($event: MouseEvent, menu: any): void {
    $event.preventDefault();
    this.contextMenuService.create($event, menu);
  }

  closeMenu(tabs: any, type: menuOperationType = 'all'): void {
    switch (type) {
      case 'all': {
        console.log('all'); 
        break;
      }
      case 'left': {
        console.log('left');
        break;
      }
      case 'right': {
        console.log('right');
        break;
      }
      case 'other': {
        console.log('other');
        break;
      }
      case 'reload': {
        console.log('reload');
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

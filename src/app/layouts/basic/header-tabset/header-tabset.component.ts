import { 
  Component,
  OnInit,
  ChangeDetectionStrategy, 
  ChangeDetectorRef,
  ViewContainerRef,
  ViewChild,
  TemplateRef,
  AfterViewChecked
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { NzContextMenuService } from 'ng-zorro-antd/dropdown';
import { NzModalService } from 'ng-zorro-antd/modal';

import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { MenuService, MenuType } from '../../menu.service';
import { ModalService } from 'src/app/shared/modal';


export declare type menuOperationType = 'left' | 'right' | 'all' | 'reload' | 'other';

@Component({
  selector: 'app-layout-header-tabset',
  templateUrl: './header-tabset.component.html',
  styleUrls: ['./header-tabset.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ModalService]
})
export class LayoutHeaderTabsetComponent implements OnInit, AfterViewChecked {

  selectedIndex: number = 0;
  tabs: Array<MenuType|null> | null = []

  menus: any[] = []
  modals: any[] = []

  private _destroy$ = new Subject<void>();
  lastModalLength = 0

  constructor(
    private contextMenuService: NzContextMenuService,
    private menu: MenuService,
    private modal: NzModalService,
    private cd: ChangeDetectorRef,
    private modalServe: ModalService
  ) {
    this.menu.tabsetChange$.pipe(takeUntil(this._destroy$), debounceTime(60)).subscribe(tabs => {
      this.menus = tabs || []
      if (this.tabs?.findIndex(item => item?.selected) || this.tabs?.findIndex(item => item?.selected) === 0) {
        this.selectedIndex = this.tabs?.findIndex(item => item?.selected)
      }
      // this.cd.markForCheck();
      this.updateTabs()
    })



    console.log('header-tabset')
    console.log(this.modal.openModals)
  }

  ngOnInit(): void {
    this.modalServe.change.subscribe(item => {
      console.log('header-tabset')
      // this.updateTabs()
    })
    console.log(this.modalServe.change)
  }

  closeTab({ index }: { index: number }): void {
    this.menu.closeTabSet(index)
  }

  newTab(tabs: any): void {
    // this.tabs = tabs
    // if (this.tabs?.findIndex(item => item?.selected) || this.tabs?.findIndex(item => item?.selected) === 0) {
    //   this.selectedIndex = this.tabs?.findIndex(item => item?.selected)
    // }
    // this.cd.markForCheck();
  }

  updateTabs () {
    const modals = this.modal.openModals.map(modal => {
      const params = modal.getConfig().nzComponentParams
      return {
        ...modal.getConfig().nzComponentParams,
        modal,
        name: params?.nzTitle
      }
    })

    this.tabs = [...this.menus, ...modals]
    this.selectedIndex = this.tabs?.findIndex(item => item?.selected)
    this.cd.markForCheck(); 
  }

  contextMenu($event: MouseEvent, menu: any): void {
    $event.preventDefault();
    this.contextMenuService.create($event, menu);
  }

  ngAfterViewChecked() {
    // if (this.modal.openModals.length != this.lastModalLength) {
    //   this.lastModalLength = this.modal.openModals.length
    //   this.updateTabs()
    // }
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

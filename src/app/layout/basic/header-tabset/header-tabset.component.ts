import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewContainerRef,
  ViewChild, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { MenuService } from '../../../services/menu.service';
import { Subject } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-layout-header-tabset',
  templateUrl: './header-tabset.component.html',
  styleUrls: ['./header-tabset.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderTabsetComponent implements OnInit {

  @ViewChild('overlayGlobalTemplate') templateGlobalPortals!: TemplatePortal ;

  @ViewChild('contentmenu') _dialogTemplate!: TemplateRef<any>;

  private _overlayRef: OverlayRef;
  private _portal!: TemplatePortal;

  // tabs: string[] = ['Tab 1', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 'Tab 1', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 'Tab 1', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 'Tab 1', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 'Tab 1', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 'Tab 1', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', ];
  selectedIndex = 0;
  tabs: Array<Menu|null> | null = []

  // tabs = ['Tab 1', 'Tab 2'];
  // selectedIndex = 0;

  isOpen = true

  private destroy$ = new Subject<void>();

  constructor(
    public overlay: Overlay, 
    public viewContainerRef: ViewContainerRef,
    private nzContextMenuService: NzContextMenuService,
    private menu: MenuService,
    private cd: ChangeDetectorRef
  ) {
    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
    });

    this.menu.tabsetChange$.subscribe(item => {
      this.tabs = item
      if (this.tabs?.findIndex(item => item?.selected) || this.tabs?.findIndex(item => item?.selected) === 0) {
        this.selectedIndex = this.tabs?.findIndex(item => item?.selected)
      }
      
      this.cd.markForCheck();
    })

    // 订阅数据
    // this._portal = new TemplatePortal(this._dialogTemplate, this.viewContainerRef);
  }

  ngOnInit(): void {}

  closeTab({ index }: { index: number }): void {
    // this.tabs.splice(index, 1);
  }

  newTab(): void {
    // this.tabs.push('New Tab');
    // this.selectedIndex = this.tabs.length;
  }

  ngAfterViewInit() {
    // 弹窗内容
    this._portal = new TemplatePortal(this._dialogTemplate, this.viewContainerRef);
    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
    });


    // 点击遮罩层关闭弹窗
    this._overlayRef.backdropClick().subscribe(($event: any) => {
      this._overlayRef.detach()
    });

    this._overlayRef.keydownEvents().subscribe(($event: any) => {
      $event.stopPropagation()
    })
  }

  openDialog($event:any) {
    let strategy = null
    strategy = this.overlay.position().flexibleConnectedTo({
        x: $event.x,
        y: $event.y
    }).withPositions([{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top',
    }])
    this._overlayRef.updatePositionStrategy(strategy)
    this._overlayRef.attach(this._portal);
  }

  onContextmenu($event: any, menu: any): void {
    $event.preventDefault();
    console.log($event);
    console.log('onContextmenu')
    // this.openDialog($event)
    // this.isOpen = !this.isOpen;
    this.nzContextMenuService.create($event, menu);
  }

  /**
   * overlay 在整个屏幕的中间显示
   */
  showOverlayGlobalPanelCenter() {
    // config: OverlayConfig overlay的配置，配置显示位置，和滑动策略
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
        .global() // 全局显示
        .centerHorizontally() // 水平居中
        .centerVertically(); // 垂直居中
    config.hasBackdrop = true; // 设置overlay后面有一层背景, 当然你也可以设置backdropClass 来设置这层背景的class
    const overlayRef = this.overlay.create(config); // OverlayRef, overlay层

    overlayRef.attach(this.templateGlobalPortals);
    overlayRef.backdropClick().subscribe(() => {
        // 点击了backdrop背景
        overlayRef.dispose();
    });

    // this._overlayTemplateRef = this.overlay.create(config);
    // this._overlayTemplateRef.attach(this.templateGlobalPortals);
    // OverlayPanelComponent是动态组件
    // 创建一个ComponentPortal，attach到OverlayRef，这个时候我们这个overlay层就显示出来了。
    // overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));

    // 监听overlayRef上的键盘按键事件
    // overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
    //     console.log(overlayRef._keydownEventSubscriptions + ' times');
    //     console.log(event);
    // });
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  closeMenu(): void {
    this.nzContextMenuService.close();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

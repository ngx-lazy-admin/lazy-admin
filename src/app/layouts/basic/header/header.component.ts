import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  HostListener
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { Subject } from 'rxjs';
import { LayoutService } from '../../layout.service';
import { MenuService } from '../../../services/api/menu/menu.services';
import hotkeys from 'hotkeys-js';
import { FullScreenService } from 'src/app/services/menu/full-screen.service';

export interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}

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
export class LayoutHeaderComponent implements OnInit {

  @ViewChild('overlayGlobalTemplate') templateGlobalPortals!: TemplatePortal ;
  @ViewChild('contentmenu') _dialogTemplate!: TemplateRef<any>;

  private _overlayRef: OverlayRef;
  private _portal!: TemplatePortal;

  isVisible: boolean = false;
  
  isCollapsed: boolean = false;

  searchValue: string|null = null;

  inputValue?: string;
  optionGroups: AutocompleteOptionGroups[] = [];

  private destroy$ = new Subject<void>();

  status: boolean = false


  constructor(
    public overlay: Overlay, 
    public viewContainerRef: ViewContainerRef,
    private nzContextMenuService: NzContextMenuService,
    private layout: LayoutService,
    public menu: MenuService,
    private cd: ChangeDetectorRef,
    private el: ElementRef,
    private fullScreenService: FullScreenService
  ) {

    this.layout.change$?.subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })

    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
    });

    this.menu.tabsetChange$.subscribe(item => {
      this.cd.markForCheck();
    })

    hotkeys('ctrl + k', (event, handler) => {
      // Prevent the default refresh event under WINDOWS system
      event.preventDefault();
      this.isVisible = true;
      this.cd.markForCheck();
    });
  }

  collapsChange (isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
    this.layout.collapsChange(this.isCollapsed);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  fullScreen() {
    this.fullScreenService.toggle().subscribe(item => {
      console.log('111')
    })
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

    // hotkeys('ctrl + f', (event, handler) => {
    //   // Prevent the default refresh event under WINDOWS system
    //   event.preventDefault() 
    //   alert('you pressed F5!') 
    // });
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
    this.nzContextMenuService.create($event, menu);
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  closeMenu(): void {
    this.nzContextMenuService.close();
  }

  onChange ($event: Event) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [
        {
          title: '话题',
          children: [
            {
              title: 'AntDesign',
              count: 10000
            },
            {
              title: 'AntDesign UI',
              count: 10600
            }
          ]
        },
        {
          title: '问题',
          children: [
            {
              title: 'AntDesign UI 有多好',
              count: 60100
            },
            {
              title: 'AntDesign 是啥',
              count: 30010
            }
          ]
        },
        {
          title: '文章',
          children: [
            {
              title: 'AntDesign 是一个设计语言',
              count: 100000
            }
          ]
        }
      ];
    }, 1000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Inject, Injectable, Renderer2, ViewContainerRef, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { ThemeSettingComponent } from './public-api';

@Injectable({
  providedIn: 'root'
})
export class ThemeSettingService   {
  viewContainerRef!: ViewContainerRef

  userSettingsPortal: any

  currentIndex: number = 500

  private renderer: Renderer2;

  private _hideAllStatus: boolean = false;

  constructor(
    private modal: NzModalService,
    private rendererFactory: RendererFactory2,
    private drawerService: NzDrawerService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  randomString(e: number) {    
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
  }

  open(): void {
    const drawerRef = this.drawerService.create<ThemeSettingComponent, { value: string }, string>({
      nzContent: ThemeSettingComponent,
      nzContentParams: {
        value: '1111'
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }
}

import { Inject, Injectable, Renderer2, ViewContainerRef, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { CodeEditorContent } from './code-editor-content.component';
// import { randomString } from 'src/app/utils';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDragService } from 'ng-zorro-antd/core/services';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { randomString } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class CodeEditorService   {
  viewContainerRef!: ViewContainerRef
  private renderer: Renderer2;
  constructor(
    private modal: NzModalService,
    private rendererFactory: RendererFactory2,
    private drawerService: NzDrawerService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  // 创建弹窗
  create (params: any, $event: any = null): NzDrawerRef {
    
    // 阻止事件冒泡
    $event && $event.stopPropagation();

    // 生成唯一的id
    const id = randomString(32)

    // 创建弹窗
    console.log('create')

    const drawerRef = this.drawerService.create<CodeEditorContent, { value: string }, string>({
      nzContent: CodeEditorContent,
      nzViewContainerRef: this.viewContainerRef,
      nzContentParams: {
        id: id,
        fields: params.fields,
        model: params.model,
        modal: this.modal,
        click: (type: string, id: string) => {
          console.log(type, id)
        }
      },
      nzClosable: false,
      ...params
    });

    return drawerRef;
  }
}

import { Component, ElementRef, ViewEncapsulation, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';

// @ts-ignore
import Editor, { EditorOptions } from '@toast-ui/editor';

@Component({
  selector: 'tui-editor-item',
  styleUrls: [
    './tui-editor-item.component.css',
  ],
  template: `
    <div class="#editor"></div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TuiEditFieldItem),
      multi: true
    }
  ]
})
export class TuiEditFieldItem extends FieldType implements AfterViewInit {

  @Input() 
  placeholder: string = '';

  @Input() 
  config = {
    height: '500px',
    initialValue: ''
  }

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    // private cos: CosService
  ) {
    super();
  }

  // action = 'web/plupload/upload-big?object_type=1430';
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  // 基本数据
  tuiEditor: any;
  editorElem!: HTMLElement;
  content: any;

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    this.editorElem = this.elementRef.nativeElement.children[0];

    if (this.editorElem) {
      this.tuiEditor = new Editor(
        Object.assign({el: this.editorElem}, this.config)
      )
    }

    this.tuiEditor.on("change", (value: any) => {
      this.onChange(this.tuiEditor.getMarkdown())
    })
  }

  handlerImage () {
    const imageInput = document.createElement('input');
    imageInput.setAttribute('type', 'file');
    imageInput.setAttribute('name', 'file');
    imageInput.setAttribute('accept', 'image/png, image/gif, image/jpeg');
    imageInput.classList.add('ql-image');
    imageInput.addEventListener('change', () => {
      if (imageInput instanceof HTMLInputElement && imageInput.files) {
        const file = imageInput.files[0];
        const formData = new FormData();
        formData.append('file', file);
        if (imageInput.files != null && imageInput.files[0] != null) {
          this.uploadFile(file)
        }
      }

    });
    imageInput.click();
  }

  /**
   * @description 粘贴
   * @param e
   */
  pasteHandle(e: any) {
    const clipboardData = e.clipboardData;
    let i = 0;
    let items, item, types;

    if (clipboardData) {
      items = clipboardData.items;

      if (!items) {
        return;
      }
      item = items[0];
      types = clipboardData.types || [];

      for (; i < types.length; i++) {
        if (types[i] === 'Files') {
          item = items[i];
          break;
        }
      }
      if (item && item.kind === 'file' && item.type.match(/^image\//i)) {
        e.preventDefault();
        const file = item.getAsFile();
        this.uploadFile(file)
      }
    }
  }

    /**
   * 拖拽
   * @param e
   */
  dropHandle($event: any) {
    $event.preventDefault();
    const file = $event.dataTransfer.files[0]; // 获取到第一个上传的文件对象
    this.uploadFile(file)
  }

  uploadFile (file: File) {
    // this.cos.uploadFile({
    //   file: file,
    //   action: '/web/cos/upload?type=1430'
    // }).subscribe(item => {
    //   if (item['statusCode'] === 200) {
    //     console.log(item)
    //     // const src =  'web/file/' + item['file']['file_id'];
    //     const src = location.protocol + '//'+ item['Location']
    //     const range = this.quillEditor.getSelection(true);
    //     const index = range.index + range.length;
    //     this.quillEditor.insertEmbed(range.index, 'image', src);
    //   }
    // })
  }

  writeValue(value: any): void {
    if (this.tuiEditor) {
      this.tuiEditor.setMarkdown(value)
    } else {
      setTimeout(() => {
        this.tuiEditor.setMarkdown(value)
      }, 0);
    }
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    // this.nzDisabled = disabled;
    // this.cd.markForCheck();
  }
}


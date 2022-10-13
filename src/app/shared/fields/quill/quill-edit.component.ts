import { Component, ElementRef, ViewEncapsulation, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, forwardRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType, FormlyConfig,  } from '@ngx-formly/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ShareFieldType } from '../share-field.type';
import { loadScript, loadStyle } from 'src/app/utils';

declare global {
  interface Window {
    Quill: any
  }
}


@Component({
  selector: 'quill-edit-field',
  styleUrls: [
    './quill.component.css',
  ],
  template: `
    <div class="quill-editor"></div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuillEditField),
      multi: true
    }
  ]
})
export class QuillEditField implements AfterViewInit {

  @Input() 
  placeholder: string = '';

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  quillEditor: any;
  editorElem: HTMLElement | string = '';
  content: any;
  defaultModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'align': new Array<any>() }],

      [{ 'color': new Array<any>() }, { 'background': new Array<any>() }],          // dropdown with defaults from theme

      ['link', 'image', 'video'],  
                             // link and image, video
      ['formula', 'blockquote', 'code-block', 'clean'],
    ]
  };

  constructor(
    private elRef: ElementRef,
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    // private cos: CosService
  ) {
    // super();
  }

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    this.editorElem = this.elRef.nativeElement.children[0];
    loadStyle('https://cdn.quilljs.com/1.3.6/quill.snow.css').subscribe(item => {})
    loadScript('https://cdn.quilljs.com/1.3.6/quill.js').subscribe(item => {
      // this.echart = window.echarts.init(this.elRef.nativeElement.querySelector('#echart'));
      // this.echart.setOption(this.formControl.value || this.props.config);
      const Quill = window.Quill

      const font = Quill.import('formats/font');
      font.whitelist = ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace'];
      Quill.register(font, true);

      console.log(window)
      this.quillEditor = new Quill(this.editorElem, Object.assign({
        modules: this.defaultModules,
        placeholder: this.placeholder || '请输入',
        readOnly: false,
        theme: 'snow',
        boundary: document.body
      }));
  
      // 写入内容
      this.quillEditor?.on('selection-change', (range: any) => {
        if (!range) {
          // this.onModelTouched();
          // this.blur.emit(this.quillEditor);
        } else {
          // this.focus.emit(this.quillEditor);
        }
      });
  
      // text change
      this.quillEditor.on('text-change', (delta: any, oldDelta: any, source: any) => {
        if (this.editorElem instanceof HTMLElement) {
          let value = this.editorElem.children[0].innerHTML;
          if (value === '<p><br></p>') {
            value = '';
          }
          this.onChange(value);
        }
      });
  
      // 上传图片
      this.quillEditor.getModule('toolbar').addHandler('image', this.handlerImage.bind(this));
  
      // 监听拖拽
      this.quillEditor.root.addEventListener('drop', this.dropHandle.bind(this), false);
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
    console.log(value)
    if (this.quillEditor) {
      this.quillEditor.deleteText(0, this.quillEditor.getLength())
      this.quillEditor.clipboard.dangerouslyPasteHTML(0, value);
    } else {
      setTimeout(() => {
        this.quillEditor?.deleteText(0, this.quillEditor.getLength())
        this.quillEditor?.clipboard.dangerouslyPasteHTML(0, value);
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


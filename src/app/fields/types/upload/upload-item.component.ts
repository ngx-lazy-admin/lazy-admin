
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';

import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzImageService, NzImage } from 'ng-zorro-antd/image';

export interface NzCheckBoxOptionInterface {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'nz-upload-item',
  exportAs: 'nzUploadItem',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-upload
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      [nzFileList]="fileList"
      nzListType="picture"
      [nzPreview]="imagePreview"
      (nzChange)="change($event)"
    >
      <button nz-button>
        <i nz-icon nzType="upload"></i>
        上传
      </button>
    </nz-upload>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzUploadItemComponent),
      multi: true
    }
  ]
})
export class NzUploadItemComponent implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  @Input() 
  @InputBoolean() 
  nzDisabled = false;

  @Input() 
  nzOptions: NzCheckBoxOptionInterface[] = []

  fileList: NzUploadFile[] = [];

  private _destroy$ = new Subject<void>();

  trackByOption(_: number, option: NzCheckBoxOptionInterface): string {
    return option.value;
  }

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
    private nzImageService: NzImageService
  ) {
    // TODO: move to host after View Engine deprecation
    this.elementRef.nativeElement.classList.add('ant-upload-wrap');
  }

  ngOnInit(): void {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .pipe(takeUntil(this._destroy$))
      .subscribe(focusOrigin => {
        if (!focusOrigin) {
          Promise.resolve().then(() => this.onTouched());
        }
      });
  }

  change(info: NzUploadChangeParam): void {
    let fileList = [...info.fileList];

    // Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    this.fileList = fileList;

    this.onChange(info.fileList);
  }

  imagePreview = async (file: NzUploadFile): Promise<void> => {

    if (!file.url && !file.preview && file.originFileObj) {
      file.preview = await getBase64(file.originFileObj!);
    }

    const images = this.fileList.map(item => {
      return {
        src: item.url ? item.url : item.preview,
        alt: item.filename
      }
    })

    const priview = this.nzImageService.preview(<NzImage[]>images, { nzZoom: 1.5, nzRotate: 0 });
    const index = this.fileList.map(item => item.url).indexOf(file.url)

    if (index > -1) {
      priview.switchTo(index)
    }
  };

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this._destroy$.next();
    this._destroy$.complete();
  }

  writeValue(fileList: NzUploadFile[]): void {
    this.fileList = fileList
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.nzDisabled = disabled;
    this.cd.markForCheck();
  }
}


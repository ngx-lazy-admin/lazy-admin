import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[alert-field]',
  template: `
    <nz-alert
      [nzType]="nzType"
      [nzCloseable]="nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzShowIcon]="nzShowIcon"
      [nzMessage]="nzMessage"
      (nzOnClose)="close()"
    ></nz-alert>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AlertField extends ShareFieldType {
  get disabled(): boolean {
    return this.props.disabled || false;
  }

  get control(): FormControl {
    return this.formControl as FormControl;
  }

  get nzType(): 'success' | 'info' | 'warning' | 'error' {
    return this.props.nzType || this.props.type || 'info';
  }

  get nzCloseable(): boolean {
    return this.props.nzCloseable || this.props.closeable || false;
  }

  get nzCloseText(): string | TemplateRef<void> {
    return this.props.nzCloseText || this.props.closeText || null;
  }

  get nzDescription(): string | TemplateRef<void> {
    return this.props.nzDescription || this.props.description || null;
  }

  get nzMessage(): string | TemplateRef<void> {
    return this.props.nzMessage || this.props.message || null;
  }

  get nzShowIcon(): boolean {
    return this.props.nzShowIcon || this.props.showIcon || false;
  }

  get nzIconType(): string {
    return this.props.nzIconType || this.props.iconType || '';
  }

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[progress-field]',
  template: `
    <nz-progress [nzPercent]="nzPercent" [nzSize]="nzSize"></nz-progress>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProgressField extends ShareFieldType {

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get disabled(): boolean {
		return this.to.disabled || false;
	}

	get nzType(): 'line' | 'circle' | 'dashboard' {
		return this.to.nzType || this.to.type || 'line';
	}

  get nzFormat() : (percent: number) => string | TemplateRef<{ $implicit: number }> {
		return this.to.nzFormat || this.to.format || (percent => percent + '%');
  }

  get nzPercent(): number {
    return this.formControl.value?.percent || this.to.nzPercent || this.to.percent || 10;
  }


  get nzShowInfo(): boolean {
    return this.to.nzLoading || this.to.loading || false;
  }

  get nzStatus() : 'success' | 'exception' | 'active' | 'normal' {
		return this.formControl.value.status || this.to.nzStatus || this.to.status || '';
  }

  get nzSize(): "small" | "default" {
    return this.to.nzSize || 'small'
  }

  get nzStrokeLinecap() : 'round' | 'square' {
		return this.to.nzStrokeLinecap || this.to.strokeLinecap || 'round';
  }

  get nzStrokeColor() : string | { from: string; to: string; direction: string; [percent: string]: string } {
		return this.to.nzBlock || this.to.block || false;
  }

	get nzSuccessPercent(): number {
		return this.to.nzDanger || this.to.danger || 0;
	}
  // todo

  get text(): string {
    return this.to.text || ''
  }

  get icon(): string {
    return this.to.icon || ''
  }

  get nzPopconfirmPlacement(): string {
    return this.to.nzPopconfirmPlacement || 'bottom'
  }

  get nzPopconfirmTitle(): string {
    return this.to.nzPopconfirmTitle || null
  }

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

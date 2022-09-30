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
		return this.props.disabled || false;
	}

	get nzType(): 'line' | 'circle' | 'dashboard' {
		return this.props.nzType || this.props.type || 'line';
	}

  get nzFormat() : (percent: number) => string | TemplateRef<{ $implicit: number }> {
		return this.props.nzFormat || this.props.format || (percent => percent + '%');
  }

  get nzPercent(): number {
    return this.formControl.value?.percent || this.props.nzPercent || this.props.percent || 10;
  }


  get nzShowInfo(): boolean {
    return this.props.nzLoading || this.props.loading || false;
  }

  get nzStatus() : 'success' | 'exception' | 'active' | 'normal' {
		return this.formControl.value.status || this.props.nzStatus || this.props.status || '';
  }

  get nzSize(): "small" | "default" {
    return this.props.nzSize || 'small'
  }

  get nzStrokeLinecap() : 'round' | 'square' {
		return this.props.nzStrokeLinecap || this.props.strokeLinecap || 'round';
  }

  get nzStrokeColor() : string | { from: string; to: string; direction: string; [percent: string]: string } {
		return this.props.nzBlock || this.props.block || false;
  }

	get nzSuccessPercent(): number {
		return this.props.nzDanger || this.props.danger || 0;
	}
  // todo

  get text(): string {
    return this.props.text || ''
  }

  get icon(): string {
    return this.props.icon || ''
  }

  get nzPopconfirmPlacement(): string {
    return this.props.nzPopconfirmPlacement || 'bottom'
  }

  get nzPopconfirmTitle(): string {
    return this.props.nzPopconfirmTitle || null
  }

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

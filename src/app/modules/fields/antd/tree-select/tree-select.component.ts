import { Component, ChangeDetectionStrategy, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';

@Component({
    selector: 'div[tree-select-field]',
    template: `
    <nz-tree-select
      style="width: 100%"
      [formControl]="control"
      [formlyAttributes]="field"
      [nzExpandedKeys]="nzExpandedKeys"
      [nzNodes]="nzNodes"
      nzShowSearch
      [nzPlaceHolder]="nzPlaceHolder"
      (ngModelChange)="onChange($event)"
    ></nz-tree-select>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
      'display': 'contents',
      '[class.display-contents]': `true`,
    }
})
export class TreeSelectField extends FieldType  {
  show: Boolean = false;
  value = null;

  get ngStyle(): any {
    return this.ngStyle || ''
  }

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzId(): boolean {
		return this.to.nzId || false
	}

  get nzPlaceHolder(): string {
    return this.to.nzPlaceHolder || this.to.placeholder || ''
  }

  get nzDisabled(): boolean {
    return this.to.nzDisabled || this.to.disabled || false
  }

  get nzShowIcon(): boolean {
    return this.to.nzShowIcon || this.to.showIcon || false
  }

  get nzShowSearch(): string {
    return this.to.nzShowSearch || this.to.showSearch || false
  }

  get nzNotFoundContent(): string {
    return this.to.nzDisabled || this.to.notFoundContent || ''
  }

  get nzDropdownMatchSelectWidth(): boolean {
    return this.to.nzDropdownMatchSelectWidth || this.to.dropdownMatchSelectWidth || false
  }


  get nzDropdownStyle(): { [key: string]: string; } {
    return this.to.nzDropdownStyle || this.to.dropdownStyle || {}
  }

  get nzDropdownClassName(): string {
    return this.to.nzDropdownClassName || this.to.dropdownClassName || ''
  }


  get nzMultiple(): boolean {
    return this.to.nzMultiple || this.to.multiple || false
  }

  get nzHideUnMatched(): boolean {
    return this.to.nzHideUnMatched || this.to.nzHideUnMatched || false
  }

  get nzSize(): 'large' | 'small' | 'default' {
    return this.to.nzSize || this.to.nzSize || 'default'
  }

  get nzStatus(): 'error' | 'warning' {
    return this.to.nzStatus || this.to.status || ''
  }

  get nzCheckable(): boolean {
    return this.to.nzCheckable || this.to.nzCheckable || false
  }

  get nzShowExpand(): boolean {
    return this.to.nzShowExpand || this.to.showExpand || false
  }

  get nzShowLine(): boolean {
    return this.to.nzShowLine || this.to.nzShowLine || false
  }


  get nzAsyncData(): boolean {
    return this.to.nzAsyncData || this.to.nzAsyncData || false
  }

  get nzNodes(): 	NzTreeNodeOptions[] {
    return this.to.nzNodes || this.to.nodes || false
  }


  get nzDefaultExpandAll(): boolean {
    return this.to.nzDefaultExpandAll || this.to.nzDefaultExpandAll || false
  }


  get nzExpandedKeys(): string[] {
    return this.to.nzExpandedKeys || this.to.expandedKeys || []
  }

  get nzDisplayWith(): (node: NzTreeNode) => string {
    return this.to.nzDisplayWith || this.to.nzDisplayWith || false
  }

  get nzMaxTagCount(): number {
    return this.to.nzMaxTagCount || this.to.nzMaxTagCount || false
  }

  get nzMaxTagPlaceholder(): any {
    return this.to.nzMaxTagPlaceholder || this.to.nzMaxTagPlaceholder || false
  }

  get nzTreeTemplate(): any {
    return this.to.nzTreeTemplate || this.to.nzTreeTemplate || false
  }

  get nzVirtualHeight(): string {
    return this.to.nzVirtualHeight || this.to.nzVirtualHeight || false
  }

  get nzVirtualItemSize(): number {
    return this.to.nzVirtualItemSize || this.to.nzVirtualItemSize || false
  }

  get nzVirtualMaxBufferPx(): number {
    return this.to.nzVirtualMaxBufferPx || this.to.nzVirtualMaxBufferPx || false
  }

  get nzVirtualMinBufferPx(): number {
    return this.to.nzVirtualMinBufferPx || this.to.nzVirtualMinBufferPx || false
  }

  get nzBackdrop(): number {
    return this.to.nzBackdrop || this.to.nzBackdrop || false
  }

	ngModelChange ($event: Date) {
    if (this.to.change) {
      this.to.change(this.field, $event)
    }
  }

  nzExpandChange ($event: Event) {
    if (this.to.expandChange) {
      this.to.expandChange(this.field, $event)
    }
	}

  onChange($event: string): void {}

  ngOnInit(): void {
    this.show = true;
  }
}

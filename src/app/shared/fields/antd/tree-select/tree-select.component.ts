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
		return this.props.nzId || false
	}

  get nzPlaceHolder(): string {
    return this.props.nzPlaceHolder || this.props.placeholder || ''
  }

  get nzDisabled(): boolean {
    return this.props.nzDisabled || this.props.disabled || false
  }

  get nzShowIcon(): boolean {
    return this.props.nzShowIcon || this.props.showIcon || false
  }

  get nzShowSearch(): string {
    return this.props.nzShowSearch || this.props.showSearch || false
  }

  get nzNotFoundContent(): string {
    return this.props.nzDisabled || this.props.notFoundContent || ''
  }

  get nzDropdownMatchSelectWidth(): boolean {
    return this.props.nzDropdownMatchSelectWidth || this.props.dropdownMatchSelectWidth || false
  }


  get nzDropdownStyle(): { [key: string]: string; } {
    return this.props.nzDropdownStyle || this.props.dropdownStyle || {}
  }

  get nzDropdownClassName(): string {
    return this.props.nzDropdownClassName || this.props.dropdownClassName || ''
  }


  get nzMultiple(): boolean {
    return this.props.nzMultiple || this.props.multiple || false
  }

  get nzHideUnMatched(): boolean {
    return this.props.nzHideUnMatched || this.props.nzHideUnMatched || false
  }

  get nzSize(): 'large' | 'small' | 'default' {
    return this.props.nzSize || this.props.nzSize || 'default'
  }

  get nzStatus(): 'error' | 'warning' {
    return this.props.nzStatus || this.props.status || ''
  }

  get nzCheckable(): boolean {
    return this.props.nzCheckable || this.props.nzCheckable || false
  }

  get nzShowExpand(): boolean {
    return this.props.nzShowExpand || this.props.showExpand || false
  }

  get nzShowLine(): boolean {
    return this.props.nzShowLine || this.props.nzShowLine || false
  }


  get nzAsyncData(): boolean {
    return this.props.nzAsyncData || this.props.nzAsyncData || false
  }

  get nzNodes(): 	NzTreeNodeOptions[] {
    return this.props.nzNodes || this.props.nodes || false
  }


  get nzDefaultExpandAll(): boolean {
    return this.props.nzDefaultExpandAll || this.props.nzDefaultExpandAll || false
  }


  get nzExpandedKeys(): string[] {
    return this.props.nzExpandedKeys || this.props.expandedKeys || []
  }

  get nzDisplayWith(): (node: NzTreeNode) => string {
    return this.props.nzDisplayWith || this.props.nzDisplayWith || false
  }

  get nzMaxTagCount(): number {
    return this.props.nzMaxTagCount || this.props.nzMaxTagCount || false
  }

  get nzMaxTagPlaceholder(): any {
    return this.props.nzMaxTagPlaceholder || this.props.nzMaxTagPlaceholder || false
  }

  get nzTreeTemplate(): any {
    return this.props.nzTreeTemplate || this.props.nzTreeTemplate || false
  }

  get nzVirtualHeight(): string {
    return this.props.nzVirtualHeight || this.props.nzVirtualHeight || false
  }

  get nzVirtualItemSize(): number {
    return this.props.nzVirtualItemSize || this.props.nzVirtualItemSize || false
  }

  get nzVirtualMaxBufferPx(): number {
    return this.props.nzVirtualMaxBufferPx || this.props.nzVirtualMaxBufferPx || false
  }

  get nzVirtualMinBufferPx(): number {
    return this.props.nzVirtualMinBufferPx || this.props.nzVirtualMinBufferPx || false
  }

  get nzBackdrop(): number {
    return this.props.nzBackdrop || this.props.nzBackdrop || false
  }

	ngModelChange ($event: Date) {
    if (this.props.change) {
      this.props.change(this.field, $event)
    }
  }

  nzExpandChange ($event: Event) {
    if (this.props.expandChange) {
      this.props.expandChange(this.field, $event)
    }
	}

  onChange($event: string): void {}

  ngOnInit(): void {
    this.show = true;
  }
}

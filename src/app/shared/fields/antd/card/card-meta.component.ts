import { 
  Component, 
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  TemplateRef
} from '@angular/core';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[card-meta-field]',
  template: `
    <nz-card-meta 
      [nzAvatar]="avatarTemplate"
      [nzTitle]="nzTitle" 
      [nzDescription]="formControl.value?.description">
    </nz-card-meta>

    <ng-template #avatarTemplate>
      <nz-avatar 
        [nzShape]="nzShape"
        [nzSize]="nzSize"
        [nzGap]="nzGap"
        [nzShape]="nzShape"
        [nzShape]="nzShape"
        [nzSrcSet]="nzSrcSet"
        [nzAlt]="nzAlt"
        [nzText]="nzText"
        [nzSrc]="formControl.value?.avatar">
      </nz-avatar>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})


export class CardMetaField extends ShareFieldType  implements OnDestroy {

  get nzTitle(): string | TemplateRef<void> {
    return this.formControl.value?.title || this.to.title || this.to.nzTitle || ''
  }

  get nzDescription(): string | TemplateRef<void> {
    return this.formControl.value?.description || this.to.description || this.to.nzDescription || ''
  }

  get nzBodyStyle(): { [key: string]: string } {
		return this.to.nzBodyStyle || this.to.bodyStyle || '';
	}

  get nzIcon(): string | TemplateRef<void> {
    return this.to.nzIcon || this.to.icon || ''
  }

  get nzShape(): 'circle' | 'square' {
    return this.to.nzShape || this.to.shape || 'circle'
  }

  get nzSize(): 'large' | 'small' | 'default' | number {
    return this.to.nzSize || this.to.size || 'default'
  }

  get nzGap(): number {
    return this.to.nzGap || this.to.nzGap || 4
  }

  get nzSrc(): string  {
    return this.formControl.value?.src || this.to.nzSrc || this.to.src || ''
  }

  get nzSrcSet(): string {
    return this.to.srcSet || this.to.nzSrcSet || ''
  }

  get nzAlt(): string {
    return this.to.nzAlt || this.to.alt || ''
  }

  get nzText(): string {
    return this.to.nzText || this.to.text || ''
  }


  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnDestroy() {}

  onClick($event: any) {
    if (this.to.click) {
      this.to.click(this.field, $event)
    }
  }
}

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
    return this.formControl.value?.title || this.props.title || this.props.nzTitle || ''
  }

  get nzDescription(): string | TemplateRef<void> {
    return this.formControl.value?.description || this.props.description || this.props.nzDescription || ''
  }

  get nzBodyStyle(): { [key: string]: string } {
		return this.props.nzBodyStyle || this.props.bodyStyle || '';
	}

  get nzIcon(): string | TemplateRef<void> {
    return this.props.nzIcon || this.props.icon || ''
  }

  get nzShape(): 'circle' | 'square' {
    return this.props.nzShape || this.props.shape || 'circle'
  }

  get nzSize(): 'large' | 'small' | 'default' | number {
    return this.props.nzSize || this.props.size || 'default'
  }

  get nzGap(): number {
    return this.props.nzGap || this.props.nzGap || 4
  }

  get nzSrc(): string  {
    return this.formControl.value?.src || this.props.nzSrc || this.props.src || ''
  }

  get nzSrcSet(): string {
    return this.props.srcSet || this.props.nzSrcSet || ''
  }

  get nzAlt(): string {
    return this.props.nzAlt || this.props.alt || ''
  }

  get nzText(): string {
    return this.props.nzText || this.props.text || ''
  }


  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnDestroy() {}

  onClick($event: any) {
    if (this.props.click) {
      this.props.click(this.field, $event)
    }
  }
}

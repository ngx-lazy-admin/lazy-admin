import { Pipe, PipeTransform } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { marked } from 'marked';
import { TemplateService } from '../../template';

@Pipe({
  name: 'template'
})
export class TemplatePipe implements PipeTransform {
	constructor(
		private templateService: TemplateService
	) {
	}
  transform(ref: any): ComponentPortal<any> | null {
    return this.templateService.get(ref);
  }
}

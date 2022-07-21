import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import { ComponentPortal } from '@angular/cdk/portal';
import { TemplateService } from 'src/app/shared/template';

@Pipe({
  name: 'template'
})
export class TemplatePipe implements PipeTransform {
  constructor(
    private template: TemplateService
  ) {}
  
  transform([column, data]: any[]): ComponentPortal<any> | null{
    return this.template.get(column, data)
  }
}

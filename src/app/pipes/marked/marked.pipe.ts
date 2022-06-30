import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {
  transform(value: string | null | undefined): string | null {
    return value ? marked.parse(value) : null;
  }
}

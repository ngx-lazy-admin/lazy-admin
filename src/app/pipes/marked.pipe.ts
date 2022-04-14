import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {
  transform(value: string): string {
    console.log(value, marked.parse(value))
    return value ? marked.parse(value) : value;
  }
}

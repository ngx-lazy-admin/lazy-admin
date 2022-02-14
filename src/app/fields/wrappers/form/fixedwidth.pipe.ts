import { Injector, Pipe, PipeTransform, ProviderToken } from '@angular/core';

@Pipe({name: 'fixedWidth'})
export class FixedWidthPipe implements PipeTransform {
  transform(width: string): any {
    if (width) {
      const labelStyle = { 
        width: '120px',
        flex: '0 0 120px'
      };

      const controlStyle = { 
        maxWidth: `calc(100% - ${ width })` 
      };

      return {
        control: controlStyle,
        label: labelStyle
      }
    } else {
      return null
    }
  }
}


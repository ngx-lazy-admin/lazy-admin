import { Pipe, PipeTransform } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { isNumber } from 'src/app/utils/utils';

@Pipe({
  name: 'width',
  pure: true
})
export class WidthPipe implements PipeTransform {
  transform(fieldGroup: FormlyFieldConfig[] | undefined): string {
    if (fieldGroup && fieldGroup.length) {
      const number =  fieldGroup.map(field =>  {
        const col = field.className
          ?.split(' ').find(item => item.includes('col-'))
          ?.split('-').find(item => isNumber(item))
        return Number(col)
      })?.reduce((num, total) => num + total)
  
      if (number && number > 12) {
        return Number((number / 12).toFixed(2)) * 100 + '%'
      } else {
        return '100%'
      }
    } else {
      return '100%'
    }
  }
}
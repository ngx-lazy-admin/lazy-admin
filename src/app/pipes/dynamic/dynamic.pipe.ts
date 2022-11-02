import { Injector, Pipe, PipeTransform, ProviderToken } from '@angular/core';
import {
  PercentPipe,
  CurrencyPipe,
  DecimalPipe,
  DatePipe,
  KeyValuePipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';

export type pipeTokenType =
  | 'currency'
  | 'date'
  | 'decimal'
  | 'keyValue'
  | 'lowerCase'
  | 'percent'
  | 'slice'
  | 'titleCase'
  | 'upperCase';

@Pipe({ name: 'dynamic' })
export class DynamicPipe implements PipeTransform {
  public constructor(private injector: Injector) {}

  transform(value: any, pipeToken: pipeTokenType, pipeArgs?: any[]): any {
    const Map = {
      currency: CurrencyPipe,
      date: DatePipe,
      decimal: DecimalPipe,
      number: DecimalPipe,
      keyValue: KeyValuePipe,
      lowerCase: LowerCasePipe,
      percent: PercentPipe,
      slice: SlicePipe,
      titleCase: TitleCasePipe,
      upperCase: UpperCasePipe
    };

    if (value && pipeToken && Map.hasOwnProperty(pipeToken)) {
      var pipeClass = Map[pipeToken];
      var pipe = this.injector.get<any>(pipeClass);
      if (Array.isArray(pipeArgs)) {
        return pipe.transform(value, ...pipeArgs);
      } else {
        return pipe.transform(value, pipeArgs);
      }
    } else {
      return value;
    }
  }
}

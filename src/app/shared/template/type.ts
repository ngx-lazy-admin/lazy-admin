import { Injectable, InjectionToken, Injector } from '@angular/core';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

export interface paramsType {
  type: string,
  [key: string]: any;
}

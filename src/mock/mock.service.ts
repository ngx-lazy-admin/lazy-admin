import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { MenuMock } from './menu/menu.mock';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { system, dashboard, components, profile, form, list, account, antv, editor, table, bootstrap, forms } from './field';

@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo) {

    const heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];

    const nobodies: any[] = [ ];

    // entities with string ids that look like numbers
    const stringers = [
      { id: '10', name: 'Bob String'},
      { id: '20', name: 'Jill String'}
    ];

    // default returnType
    let returnType  = 'object';
    // let returnType  = 'observable';
    // let returnType  = 'promise';

    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        heroes.length = 0;
        nobodies.length = 0;
        stringers.length = 0;
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'observable';
    }

    const db = { 
      heroes, 
      nobodies, 
      stringers, 
      menu: MenuMock,
      account,
      dashboard,
      system,
      components,
      profile,
      form,
      list,
      bootstrap,
      antv,
      editor,
      table,
      forms
    };

    switch (returnType) {
      case ('observable'):
        return of(db).pipe(delay(10));
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
  }
}
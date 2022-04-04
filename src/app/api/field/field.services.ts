import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { field } from './mock';
import { InMemoryDataService } from '../in-memory-data.service';

export interface FieldType {
	label: string,
	icon: string,
	link: string,
	badge: string,
	selected: boolean,
	children: Array<FieldType>
}

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private _destroy$ = new Subject();
  private _menu$ = new BehaviorSubject<Array<FieldType|null>|null>(null);
  private _baseFieldUrl = 'api';
  private _menus: Array<FieldType> = [];
  private _activeMenu: FieldType|null = null;

  private _tabset$ = new BehaviorSubject<Array<FieldType|null>|null>([]);
  private _tabset:  Array<FieldType> = [];
  public breadcrumb: Array<any> = [];

  constructor(
    private http: HttpClient,
    private InMemoryData: InMemoryDataService
  ) {}

  get change$() {
    return this._menu$.asObservable()
  }

  get tabsetChange$() {
    return this._tabset$.asObservable()
  }


  // getMenu(): Observable<Array<FieldType>> {
  //   return this.http.get<Array<FieldType>>(this._menuUrl).pipe(tap(menu => {
  //     // this._menus = menu;
  //     console.log(menu)
  //     this._menu$.next(this._menus)
  //   }))
  // }

  getField(url: string): Observable<any> {
    // console.log(this.InMemoryData.db)
    // const url.split('/')
    return this.http.get<any>(this._baseFieldUrl + url).pipe(tap(field => {
      console.log(field)
    }))
  }

  execFunction = (name: string) => (new Function( 'return ' + name))();

  // 获取 Field 数据
  // - of
  // - http get {}
  //  fields model formState
  // 
  getFieldByOf(): Observable<Array<FormlyFieldConfig>> {
    return of(field)
  }

  // getField(): Observable<string> {

  //   console.log(this.fieldMock.field)
  //   return of(this.fieldMock.field.toString())
  // }

  // save (model: any) {
  //   console.log(model)
  //   return this.http.post<Array<FieldType>>(this._menuUrl, model).pipe(tap(menu => {
  //     this._menus = menu;
  //     console.log(menu)
  //     this._menu$.next(this._menus)
  //   }))
  // }

  addTabset (menu: any) {
    if (!this._tabset.some(item => item.link === menu.link)) {
      this._tabset = [...this._tabset, menu]
      this._tabset$.next(this._tabset);
    } else {
      this.activeTabset(menu)
    }
  }

  closeTabSet (index: number) {
    if (this._tabset.length === 1) {
      return;
    }
    let seletcted = this._tabset[index].selected;
    this._tabset.splice(index, 1);
    if (seletcted) {
      this.activeTabset(this._tabset[index])
    }
  }

  activeTabset (menu: FieldType) {
    this._tabset.forEach(item => {
      item.selected = false
      if (item.link === menu.link) {
        item.selected = true
      }
    })
    this._tabset = [...this._tabset]
    
    this._tabset$.next(this._tabset);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

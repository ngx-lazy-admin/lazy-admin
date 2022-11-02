import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { field } from 'src/mock/field/field.mock';

export interface FieldType {
  label: string;
  icon: string;
  link: string;
  badge: string;
  selected: boolean;
  children: Array<FieldType>;
}

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private _destroy$ = new Subject();
  private _menu$ = new BehaviorSubject<Array<FieldType | null> | null>(null);
  private _baseFieldUrl = 'api';

  public breadcrumb: Array<any> = [];

  constructor(private http: HttpClient) {}

  get change$() {
    return this._menu$.asObservable();
  }

  getField(url: string): Observable<any> {
    url = url.replace('/blank', '');
    return this.http.get<any>(this._baseFieldUrl + url).pipe(
      tap(field => {
        console.log(field);
      })
    );
  }

  getFieldByOf(): Observable<Array<FormlyFieldConfig>> {
    return of(field);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

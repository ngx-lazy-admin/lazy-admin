import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { field } from '../../../mock/field';

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
  private _baseFieldUrl = 'api';
  public breadcrumb: Array<any> = [];

  constructor(private http: HttpClient) {}

  getField(url: string): Observable<any> {
    return this.http.get<any>(this._baseFieldUrl + url.replace('/blank', '')).pipe(
      tap(field => {
        console.log(field)
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

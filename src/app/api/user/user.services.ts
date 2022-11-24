import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user.type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // 声明
  private destroy$ = new Subject();
  private _userChanges = new BehaviorSubject<User | null>(null);

  // 构造器初始化
  constructor(
    private http: HttpClient // private messageService: MessageService
  ) {}

  private heroesUrl = 'api/user'; // URL to web api

  get userChange() {
    // if (!this._user) {
    //   this._user = { ...this.getData(this.KEYS.user) };
    //   this.setData(this.KEYS.user, this._user);
    // }
    // return this._user as U;
    return this._userChanges.asObservable();
  }

  // action
  getUser(): Observable<User> {
    return this.http.get<User>(this.heroesUrl).pipe(
      tap(user => {
        this._userChanges.next(user);
      })
    );
  }

  /** POST: add a new hero to the server */
  add(): Observable<User> {
    return this.http.get<User>(this.heroesUrl).pipe(
      tap(user => {
        // this.user = {
        //   ...this.user,
        //   id: this.user.id + 1
        // }
        // console.log(this.user)
        this._userChanges.next(user);
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

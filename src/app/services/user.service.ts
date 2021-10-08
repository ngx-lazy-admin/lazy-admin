import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private heroesUrl = 'api/user';  // URL to web api

  private user: User = {
    id: 0,
    name: '',
    sex: ''
  }

  private subject$ = new BehaviorSubject<User>(this.user);

  user$ = this.subject$.asObservable()

  getUser(): Observable<User> {
    return this.http.get<User>(this.heroesUrl).pipe(tap(user => {
      this.user = user
      this.subject$.next(this.user)
    }))
  }

  /** POST: add a new hero to the server */
  add(): Observable<User> {
    return this.http.get<User>(this.heroesUrl).pipe(tap(user => {
      this.user = {
        ...this.user,
        id: this.user.id + 1
      }
      console.log(this.user)
      this.subject$.next(this.user)
    }))
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

import { Injectable } from '@angular/core';
import { LoggedInUser } from '../model/logged-in-user';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { JwtHelperService } from '@auth0/angular-jwt';

import { Korisnik } from '../model/korisnik';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';


import jwtDecode , { JwtPayload }from 'jwt-decode';


const TOKEN_KEY = 'AuthToken';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//const decodedToken = jwtDecode<JwtPayload>(sessionStorage.getItem(TOKEN_KEY))

@Injectable()
export class LoginUserService {


  user: LoggedInUser;
  korisnik: Korisnik;

  private url = 'http://localhost:8080/user';

  getUser(): Observable<LoggedInUser> {
    return this.http.get<LoggedInUser>(this.url + '/' + jwtDecode<JwtPayload>(sessionStorage.getItem(TOKEN_KEY)).sub + '/');
 }


 
getLoggedInUser(): LoggedInUser {
  return this.user;
}
setLoggedInUser(user: LoggedInUser) {
  this.user = user;
}



updateUser(updateUser: LoggedInUser): Observable<LoggedInUser> {
  return this.http.put<LoggedInUser>(this.url + '/' + updateUser.email + '/' , updateUser, httpOptions).pipe(
    catchError(this.handleError<LoggedInUser>('updateUser'))
  );
}

 getUserByname(ime: string, prezime: string): Observable<LoggedInUser[]> {
  return this.http.get<LoggedInUser[]>(this.url + '/parameters?ime=' + ime + '&' + 'prezime=' + prezime);
}
  constructor(private http: HttpClient) { }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

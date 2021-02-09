import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Korisnik } from '../model/korisnik';
import { NoviKorisnik } from '../model/novi-korisnik';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class KorisnikService {


  private url = 'http://localhost:8080/register';
  private url1 = 'http://localhost:8080/korisnici';
  private urlPass = 'http://localhost:8080/passwordChange';
  private urlDel = 'http://localhost:8080/korisnik';



  getKorisnici(): Observable<Korisnik[]> {
    return this.http.get<Korisnik[]>(this.url1);

  }
  getKorisnik(id: string): Observable<Korisnik> {
    return this.http.get<Korisnik>(this.url1 + '/' + id);
  }


  insertKorisnik(korisnik: NoviKorisnik): Observable<NoviKorisnik> {
    return this.http.post<NoviKorisnik>(this.url, korisnik, httpOptions).pipe(
      catchError(this.handleError<NoviKorisnik>('insertKorisnik'))
    );
  }

  updateKorisnik(korisnik: Korisnik): Observable<Korisnik> {
    const id = typeof korisnik === 'string' ? korisnik : korisnik.id;
    const url = `${this.url}/${id}`;

    console.log('Id string je:' , id);
    console.log('Id je:' , korisnik.id);
    return this.http.put<Korisnik>(url, korisnik, httpOptions).pipe(
      catchError(this.handleError<Korisnik>('updateKorisnik'))
    );
  }

  updatePassword(korisnik: Korisnik): Observable<Korisnik> {
    const id = typeof korisnik === 'string' ? korisnik : korisnik.email;
    const url = `${this.urlPass}/${id}`;

    return this.http.put<Korisnik>(url, korisnik, httpOptions).pipe(
      catchError(this.handleError<Korisnik>('updateKorisnik'))
    );
  }

  deleteKorisnik(korisnik: Korisnik | string): Observable<Korisnik> {
    const id = typeof korisnik === 'string' ? korisnik : korisnik.id;
    const urlDel = `${this.urlDel}/${id}`;

    return this.http.delete<Korisnik>(urlDel, httpOptions).pipe(
      catchError(this.handleError<Korisnik>('deleteKorisnik'))
    );
  }


  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}

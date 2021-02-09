import { Injectable } from '@angular/core';
import { Apoteka } from '../model/apoteka';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NovaApoteka } from '../model/nova-apoteka';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class ApotekaService {

  private url = 'http://localhost:8080/apoteke';
  private url2 = 'http://localhost:8080/apoteka';


  getApoteke(): Observable<Apoteka[]> {
    return this.http.get<Apoteka[]>(this.url);

  }
  getApoteka(id: string): Observable<Apoteka> {
    return this.http.get<Apoteka>(this.url + '/' + id);
  }


  insertApoteka(apoteka: NovaApoteka): Observable<NovaApoteka> {
    return this.http.post<NovaApoteka>(this.url, apoteka, httpOptions).pipe(
      catchError(this.handleError<NovaApoteka>('insertApoteka'))
    );
  }


  updateApoteka(apoteka: Apoteka): Observable<Apoteka> {
    const id = typeof apoteka === 'string' ? apoteka : apoteka.id;
    const url = `${this.url2}/${id}`;
    return this.http.put<Apoteka>(url, apoteka, httpOptions).pipe(
      catchError(this.handleError<Apoteka>('updateApoteka'))
    );
  }

  deleteApoteka(apoteka: Apoteka | string): Observable<Apoteka> {
    const id = typeof apoteka === 'string' ? apoteka : apoteka.id;
    const url = `${this.url2}/${id}`;

    return this.http.delete<Apoteka>(url, httpOptions).pipe(
      catchError(this.handleError<Apoteka>('deleteApoteka'))
    );
  }

  searchByNazivApoteke(naziv: string): Observable<Apoteka[]> {
    return this.http.get<Apoteka[]>(this.url + '/search?naziv=' + naziv);
  }

  searchByAdresaApoteke(adresa: string): Observable<Apoteka[]> {
    return this.http.get<Apoteka[]>(this.url + '/searchAdresa?adresa=' + adresa);
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
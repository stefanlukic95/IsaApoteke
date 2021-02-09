import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Lek } from '../model/lek';
import { NoviLek } from '../model/novi-lek';
import { NovaLekRezervacija } from '../model/nova-lek-rezervacija';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable()
export class LekService {

  private url = 'http://localhost:8080/lekovi';
  private urlPost = 'http://localhost:8080/lekovi/apoteke';
  private url2 = 'http://localhost:8080/lek';
  private url3 = 'http://localhost:8080/rezervacijaLek'; 

  getLekovi(): Observable<Lek[]> {
    return this.http.get<Lek[]>(this.url);

  }
  getLek(id: string): Observable<Lek> {
    return this.http.get<Lek>(this.url2 + '/' + id);
  }


  insertLek(lek: NoviLek,apotekaId: String): Observable<NoviLek> {
    return this.http.post<NoviLek>(this.urlPost + '/' + apotekaId, lek, httpOptions).pipe(
      catchError(this.handleError<NoviLek>('insertLek'))
    );
  }

  createRezervacija(idLeka: String, rezervacija: NovaLekRezervacija): Observable<NovaLekRezervacija> {
   
    return this.http.post<NovaLekRezervacija>(this.url3 + '/' + idLeka  , rezervacija, httpOptions);
  }

  updateLek(lek: Lek): Observable<Lek> {
    const id = typeof lek === 'string' ? lek : lek.id;
    const url2 = `${this.url2}/${id}`;
    return this.http.put<Lek>(url2, lek, httpOptions).pipe(
      catchError(this.handleError<Lek>('updateLek'))
    );
  }

  deleteLek(lek: Lek | string): Observable<Lek> {
    const id = typeof lek === 'string' ? lek : lek.id;
    const url2 = `${this.url2}/${id}`;

    return this.http.delete<Lek>(url2, httpOptions).pipe(
      catchError(this.handleError<Lek>('deleteLek'))
    );
  }

  searchByNazivLeka(naziv: string): Observable<Lek[]> {
    return this.http.get<Lek[]>(this.url + '/search?naziv=' + naziv);
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

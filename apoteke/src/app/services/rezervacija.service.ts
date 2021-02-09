import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Rezervacija } from '../model/rezervacija';
import { NovaRezervacija } from '../model/nova-rezervacija';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  private urlRez = 'http://localhost:8080/rezervacijaPredef';
  private url = 'http://localhost:8080/rezervacije';


  getRezervacije(): Observable<Rezervacija[]> {
    return this.http.get<Rezervacija[]>(this.url);

  }
  getRezervacija(id: string): Observable<Rezervacija> {
    return this.http.get<Rezervacija>(this.url + '/' + id);
  }

  insertRezervacija(pregledId: String,rezervacija: NovaRezervacija): Observable<NovaRezervacija> {
   
    return this.http.post<NovaRezervacija>(this.urlRez +'/' + pregledId, rezervacija, httpOptions).pipe(
      catchError(this.handleError<NovaRezervacija>('insertRezervacija'))
    );
  }


  updateRezervacija(rezervacija: Rezervacija): Observable<Rezervacija> {
    const id = typeof rezervacija === 'string' ? rezervacija : rezervacija.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Rezervacija>(url, rezervacija, httpOptions).pipe(
      catchError(this.handleError<Rezervacija>('updateRezervacija'))
    );
  }

  deleteRezervacija(rezervacija: Rezervacija | string): Observable<Rezervacija> {
    const id = typeof rezervacija === 'string' ? rezervacija : rezervacija.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Rezervacija>(url, httpOptions).pipe(
      catchError(this.handleError<Rezervacija>('deleteRezervacija'))
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

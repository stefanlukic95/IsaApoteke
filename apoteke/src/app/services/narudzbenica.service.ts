import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Pregled } from '../model/pregled';
import { NoviPregled } from '../model/novi-pregled';
import { Narudzbenica } from '../model/narudzbenica';
import { NovaNarudzbenica } from '../model/nova-narudzbenica';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class NarudzbenicaService {

  private url = 'http://localhost:8080/narudzbenice';
  private url1 = 'http://localhost:8080/narudzbenica';
  private urlPost = 'http://localhost:8080/narudzbenice/apoteke';
  private urlDel = 'http://localhost:8080/narudzbenica';

  getNarudzbenice(): Observable<Narudzbenica[]> {
    return this.http.get<Narudzbenica[]>(this.url);

  }
  getNarudzbenica(id: string): Observable<Narudzbenica> {
    return this.http.get<Narudzbenica>(this.url1 + '/' + id);
  }

  insertNarudzbenica(narudzbenica: NovaNarudzbenica,apotekaId: String): Observable<NovaNarudzbenica> {
    return this.http.post<NovaNarudzbenica>(this.urlPost +'/' + apotekaId, narudzbenica, httpOptions).pipe(
      catchError(this.handleError<NovaNarudzbenica>('insertNarudzbenica'))
    );
  }

  updateNarudzbenica(narudzbenica: Narudzbenica): Observable<Narudzbenica> {
    const id = typeof narudzbenica === 'string' ? narudzbenica : narudzbenica.id;
    const url1 = `${this.url1}/${id}`;
    return this.http.put<Narudzbenica>(url1, narudzbenica, httpOptions).pipe(
      catchError(this.handleError<Narudzbenica>('updateNarudzbenica'))
    );
  }

  deleteNarudzbenica(narudzbenica: Narudzbenica | string): Observable<Narudzbenica> {
    const id = typeof narudzbenica === 'string' ? narudzbenica : narudzbenica.id;
    const urlDel = `${this.urlDel}/${id}`;

    return this.http.delete<Narudzbenica>(urlDel, httpOptions).pipe(
      catchError(this.handleError<Narudzbenica>('deleteNarudzbenica'))
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


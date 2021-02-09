import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Akcija } from '../model/akcija';
import { NovaAkcija } from '../model/nova-akcija';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AkcijaService {
  private url = 'http://localhost:8080/akcije';
  private urlPost = 'http://localhost:8080/akcije/apoteke';
  private url2 = 'http://localhost:8080/akcija';

  getAkcije(): Observable<Akcija[]> {
    return this.http.get<Akcija[]>(this.url);

  }
  getAkcija(id: string): Observable<Akcija> {
    return this.http.get<Akcija>(this.url2 + '/' + id);
  }


  insertAkcija(akcija: NovaAkcija,apotekaId: String): Observable<NovaAkcija> {
    return this.http.post<NovaAkcija>(this.urlPost + '/' + apotekaId, akcija, httpOptions).pipe(
      catchError(this.handleError<NovaAkcija>('insertAkcija'))
    );
  }


  updateAkcija(akcija: Akcija): Observable<Akcija> {
    const id = typeof akcija === 'string' ? akcija : akcija.id;
    const url2 = `${this.url2}/${id}`;
    return this.http.put<Akcija>(url2, akcija, httpOptions).pipe(
      catchError(this.handleError<Akcija>('updateAkcija'))
    );
  }

  deleteAkcija(akcija: Akcija | string): Observable<Akcija> {
    const id = typeof akcija === 'string' ? akcija : akcija.id;
    const url2 = `${this.url2}/${id}`;

    return this.http.delete<Akcija>(url2, httpOptions).pipe(
      catchError(this.handleError<Akcija>('deleteAkcija'))
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


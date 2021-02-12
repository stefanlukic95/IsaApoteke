import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Pregled } from '../model/pregled';
import { NoviPregled } from '../model/novi-pregled';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class PregledService {
  private url = 'http://localhost:8080/pregledi'; 
  private url1 = 'http://localhost:8080/pregled';
  private urlPost = 'http://localhost:8080/pregledi/apoteke';
  private urlDel = 'http://localhost:8080/pregled-rez';

  getPregledi(): Observable<Pregled[]> {
    return this.http.get<Pregled[]>(this.url);

  }
  getPregled(id: string): Observable<Pregled> {
    return this.http.get<Pregled>(this.url1 + '/' + id);
  }

  insertPregled(pregled: NoviPregled,apotekaId: String): Observable<NoviPregled> {
    return this.http.post<NoviPregled>(this.urlPost +'/' + apotekaId, pregled, httpOptions).pipe(
      catchError(this.handleError<NoviPregled>('insertPregled'))
    );
  }

  updatePregled(pregled: Pregled): Observable<Pregled> {
    const id = typeof pregled === 'string' ? pregled : pregled.id;
    const url1 = `${this.url1}/${id}`;
    return this.http.put<Pregled>(url1, pregled, httpOptions).pipe(
      catchError(this.handleError<Pregled>('updatePregled'))
    );
  }

  deletePregled(pregled: Pregled | string): Observable<Pregled> {
    const id = typeof pregled === 'string' ? pregled : pregled.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Pregled>(url, httpOptions).pipe(
      catchError(this.handleError<Pregled>('deletePregled'))
    );
  }

  deletePregledRez(pregled: Pregled | string): Observable<Pregled> {
    const id = typeof pregled === 'string' ? pregled : pregled.id;
    const urlDel = `${this.urlDel}/${id}`;

    return this.http.delete<Pregled>(urlDel, httpOptions).pipe(
      catchError(this.handleError<Pregled>('deletePregled'))
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


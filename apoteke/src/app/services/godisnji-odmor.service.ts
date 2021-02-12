import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { GodisnjiOdmor } from '../model/godisnji-odmor';
import { NoviGodisnjiOdmor } from '../model/novi-godisnji-odmor';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class GodisnjiOdmorService {

  private url = 'http://localhost:8080/godisnjiOdmori';
  private url1 = 'http://localhost:8080/godisnjiOdmor';
  private urlPost = 'http://localhost:8080/godisnjiOdmori';
  private urlDel = 'http://localhost:8080/godisnjiOdmor';

  getGodisnjiOdmori(): Observable<GodisnjiOdmor[]> {
    return this.http.get<GodisnjiOdmor[]>(this.url);

  }
  getGodisnjiOdmor(id: string): Observable<GodisnjiOdmor> {
    return this.http.get<GodisnjiOdmor>(this.url1 + '/' + id);
  }

  insertGodisnjiOdmor(godisnjiOdmor: NoviGodisnjiOdmor): Observable<NoviGodisnjiOdmor> {
    return this.http.post<NoviGodisnjiOdmor>(this.urlPost, godisnjiOdmor, httpOptions).pipe(
      catchError(this.handleError<NoviGodisnjiOdmor>('insertGodisnjiOdmor'))
    );
  }

  updateGodisnjiOdmor(godisnjiOdmor: GodisnjiOdmor): Observable<GodisnjiOdmor> {
    const id = typeof godisnjiOdmor === 'string' ? godisnjiOdmor : godisnjiOdmor.id;
    const url1 = `${this.url1}/${id}`;
    return this.http.put<GodisnjiOdmor>(url1, godisnjiOdmor, httpOptions).pipe(
      catchError(this.handleError<GodisnjiOdmor>('updateGodisnjiOdmor'))
    );
  }

  deleteGodisnjiOdmor(godisnjiOdmor: GodisnjiOdmor | string): Observable<GodisnjiOdmor> {
    const id = typeof godisnjiOdmor === 'string' ? godisnjiOdmor : godisnjiOdmor.id;
    const urlDel = `${this.urlDel}/${id}`;

    return this.http.delete<GodisnjiOdmor>(urlDel, httpOptions).pipe(
      catchError(this.handleError<GodisnjiOdmor>('deleteGodisnjiOdmor'))
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


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Savetovanje } from '../model/savetovanje';
import { NovoSavetovanje } from '../model/novo-savetovanje';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class SavetovanjeService {

  private url = 'http://localhost:8080/savetovanja';
  private urlPost = 'http://localhost:8080/savetovanja/apoteke';
  private urlDel = 'http://localhost:8080/savetovanje';
  private urlCancel = 'http://localhost:8080/savetovanje';
  private urlSearch = 'http://localhost:8080/savetovanja';

  getSavetovanja(): Observable<Savetovanje[]> {
    return this.http.get<Savetovanje[]>(this.url);

  }
  getSavetovanje(id: string): Observable<Savetovanje> {
    return this.http.get<Savetovanje>(this.url + '/' + id);
  }

  insertSavetovanje(savetovanje: NovoSavetovanje,apotekaId: String): Observable<NovoSavetovanje> {
    return this.http.post<NovoSavetovanje>(this.urlPost +'/' + apotekaId, savetovanje, httpOptions).pipe(
      catchError(this.handleError<NovoSavetovanje>('insertSavetovanje'))
    );
  }

  updateSavetovanje(savetovanje: Savetovanje): Observable<Savetovanje> {
    const id = typeof savetovanje === 'string' ? savetovanje : savetovanje.id;
    const urlCancel = `${this.urlCancel}/${id}`;
    return this.http.put<Savetovanje>(urlCancel, savetovanje, httpOptions).pipe(
      catchError(this.handleError<Savetovanje>('updateSavetovanje'))
    );
  }

  deleteSavetovanje(savetovanje: Savetovanje | string): Observable<Savetovanje> {
    const id = typeof savetovanje === 'string' ? savetovanje : savetovanje.id;
    const urlDel = `${this.urlDel}/${id}`;

    return this.http.delete<Savetovanje>(urlDel, httpOptions).pipe(
      catchError(this.handleError<Savetovanje>('deleteSavetovanje'))
    );
  }

  searchSavetovanjeByDateName(datum_vreme: string,farmaceut: string): Observable<Savetovanje> {
    return this.http.get<Savetovanje>(this.urlSearch + '/search?datum_vreme=' + datum_vreme +'&' +'farmaceut=' + farmaceut);
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


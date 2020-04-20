import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Turn } from './actiune.model';

@Injectable()
export class GameService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private acceptJsonHttpHeaders = new HttpHeaders({ 'Accept': 'application/json' });
  private backendUrl = 'http://86.126.16.228:8080';
  
  constructor(private httpClient: HttpClient) { }

  getAllTurns(): Observable<Turn[]> {
    return this.httpClient.get(`${this.backendUrl}/turns`,
      { headers: this.acceptJsonHttpHeaders })
      .pipe(
        map(response => response as Turn[]),
        catchError(this.handleError));
  }

  create(prefix: Turn): Observable<Turn> {
    return this.httpClient
      .post(`${this.backendUrl}/addturns`, JSON.stringify(prefix),
        { headers: this.httpHeaders })
      .pipe(
        map(response => response as Turn),
        catchError(this.handleError));
  }

  update(tura: Turn): Observable<Turn> {
    return this.httpClient
      .put(`${this.backendUrl}`, JSON.stringify(tura)
        , { headers: this.httpHeaders })
      .pipe(
        map(response => response as Turn),
        catchError(this.handleError));
  }

  delete(tura: Turn): Observable<void> {
    let url = this.backendUrl+"/"+tura.id;
    return this.httpClient.delete(`${url}`,
      { headers: this.httpHeaders })
      .pipe(
        map(() => null),
        catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

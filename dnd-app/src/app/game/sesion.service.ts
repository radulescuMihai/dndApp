import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Character } from './Character.model';
import { User } from './user.model';
import { Sesion } from './sesion.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private acceptJsonHttpHeaders = new HttpHeaders({ 'Accept': 'application/json' });
  private sessionUrl = 'http://86.121.209.212:8080/sesion';
  
  constructor(private httpClient: HttpClient) { }

  getAllHosts(): Observable<Sesion[]>{
    return this.httpClient.get(`${this.sessionUrl}`,
      { headers: this.acceptJsonHttpHeaders })
      .pipe(
        map(response => response as Sesion[]),
        catchError(this.handleError));
  }

  getParticipants(hostName:string): Observable<Character[]> {
    return this.httpClient.get(`${this.sessionUrl}/${hostName}`,
      { headers: this.acceptJsonHttpHeaders })
      .pipe(
        map(response => response as Character[]),
        catchError(this.handleError));
  }

  isStillGoing(sesion: Sesion): Observable<boolean> {
    return this.httpClient.get(`${this.sessionUrl}/${sesion.hostName}/${sesion.campaignName}`,
      { headers: this.acceptJsonHttpHeaders })
      .pipe(
        map(response => response as boolean),
        catchError(this.handleError));
  }

  createHost(hostName:string, campaignName:string): Observable<void> {
    return this.httpClient
      .post(`${this.sessionUrl}/${hostName}/${campaignName}`,
        { headers: this.httpHeaders })
      .pipe( 
        map(() => null),
        catchError(this.handleError) );
  }

  joinHost(sesion: Sesion, char: Character): Observable<Character[]> {
    return this.httpClient
      .put(`${this.sessionUrl}/${sesion.hostName}/${sesion.campaignName}`, JSON.stringify(char)
        , { headers: this.httpHeaders })
      .pipe( 
        map(response => response as Character[]),
        catchError(this.handleError) );
  }

  leaveHost(sesion: Sesion, char: Character): Observable<void> {
    return this.httpClient
      .put(`${this.sessionUrl}/${sesion.hostName}`, JSON.stringify(char)
        , { headers: this.httpHeaders })
      .pipe( 
        map(() => null),
        catchError(this.handleError) );
  }

  closeHost(sesion: Sesion): Observable<void> {
    return this.httpClient.delete(`${this.sessionUrl}/${sesion.hostName}`,
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
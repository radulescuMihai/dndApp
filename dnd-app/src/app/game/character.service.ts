import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Character } from './Character.model';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private acceptJsonHttpHeaders = new HttpHeaders({ 'Accept': 'application/json' });
  private backendUrl = 'http://86.121.209.212:8080/char';
  
  constructor(private httpClient: HttpClient) { }

  getAllCharacters(user:User): Observable<Character[]> {
    return this.httpClient.get(`${this.backendUrl}/${user.name}`,
      { headers: this.acceptJsonHttpHeaders })
      .pipe(
        map(response => response as Character[]),
        catchError(this.handleError));
  }

  // getCharacter(charname:string, user:User): Observable<Character[]> {
  //   return this.httpClient.get(`${this.backendUrl}/char/${user.name}/${charname}`,
  //     { headers: this.acceptJsonHttpHeaders })
  //     .pipe(
  //       map(response => response as Character[]),
  //       catchError(this.handleError));
  // }

  create(user: Character): Observable<Character> {
    return this.httpClient
      .post(`${this.backendUrl}`, JSON.stringify(user),
        { headers: this.httpHeaders })
      .pipe(
        map(response => response as Character),
        catchError(this.handleError));
  }

  update(char: Character): Observable<Character> {
    return this.httpClient
      .put(`${this.backendUrl}`, JSON.stringify(char)
        , { headers: this.httpHeaders })
      .pipe(
        map(response => response as Character),
        catchError(this.handleError));
  }

  delete(char: Character): Observable<void> {
    let url = this.backendUrl+"/"+char.name;
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
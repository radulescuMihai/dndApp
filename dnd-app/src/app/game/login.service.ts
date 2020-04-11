import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './User.model';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedUser:User;
  private selectedChar:Character;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private acceptJsonHttpHeaders = new HttpHeaders({ 'Accept': 'application/json' });
  private logInUrl = 'http://86.126.16.228:8080/user';
  
  constructor(private httpClient: HttpClient) { }

  getLoggedUser():User{
    return this.loggedUser;
  }
  getloggedChar():Character{
    return this.selectedChar;
  }

  setLoggedUser(user:User):void{
    this.loggedUser = user;
  }

  authentificate(username:string): Observable<User> {
    return this.httpClient.get(`${this.logInUrl}/${username}`,
      { headers: this.acceptJsonHttpHeaders })
      .pipe(
        map(response => response as User),
        catchError(this.handleError));
  }

  create(user: User): Observable<User> {
    console.log("Service > Add user:")
    console.log(user)
    return this.httpClient
      .post(`${this.logInUrl}`, JSON.stringify(user),
        { headers: this.httpHeaders })
      .pipe(
        map(response => response as User),
        catchError(this.handleError));
  }

  update(prefix: User): Observable<User> {
    return this.httpClient
      .put(`${this.logInUrl}`, JSON.stringify(prefix)
        , { headers: this.httpHeaders })
      .pipe(
        map(response => response as User),
        catchError(this.handleError));
  }

  // delete(prefix: User): Observable<void> {
  //   let url = this.backendUrl+"/"+prefix.id;
  //   return this.httpClient.delete(`${url}`,
  //     { headers: this.httpHeaders })
  //     .pipe(
  //       map(() => null),
  //       catchError(this.handleError));
  // }

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


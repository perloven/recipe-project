import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  private readonly webApiKey = 'AIzaSyDz7BhKS_xSPrc5TTqJuynfrvTbsg0A1I8';
  private readonly signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.webApiKey;
  private readonly loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.webApiKey;
  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.signupUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap(resData => {
       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)})
    );
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.loginUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}

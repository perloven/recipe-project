import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

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

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.signupUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(errorRes => {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(() => new Error(errorMessage));
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
        }
        return throwError(() => new Error(errorMessage));
      }));
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.loginUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}

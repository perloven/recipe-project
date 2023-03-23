import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {
  private readonly webApiKey = 'AIzaSyDz7BhKS_xSPrc5TTqJuynfrvTbsg0A1I8';
  private readonly signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.webApiKey;

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.signupUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}

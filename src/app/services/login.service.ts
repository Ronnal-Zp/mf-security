import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseUserLogin } from '../interfaces/user-login';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase: string = "http://143.198.176.153:8080/security/user/login";

  constructor(
    private http: HttpClient
  ) { }


  getData(user?: string, pass?: string): Observable<ResponseUserLogin>{
    return this.http.post<ResponseUserLogin>(this.urlBase, {
        "username": user ? user : environment.username,
        "password": pass ? pass : environment.password
      });
  }
  

}

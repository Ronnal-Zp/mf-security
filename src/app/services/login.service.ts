import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseUserLogin, UserLogin } from '../interfaces/user-login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase: string = "http://143.198.176.153:8080/security/user/login";

  constructor(
    private _http: HttpClient
  ) { }


  SignIn(params: UserLogin){
    return this._http.post<ResponseUserLogin>(this.urlBase, params);
  }


}

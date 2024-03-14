import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  Headers: ({'Content-type': 'application/json'})}


  @Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  login_api = 'https://fakestoreapi.com/auth/login'

    constructor(private _http: HttpClient ) {}

  signIn(body:any): Observable<any>{
    return this._http.post(this.login_api + body, httpOptions)
  }
}

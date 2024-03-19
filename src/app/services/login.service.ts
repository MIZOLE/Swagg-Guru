import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginApi = 'https://fakestoreapi.com/products/category/jewelery'
 
  constructor(private _logInservice: HttpClient) { }

  getUsers():Observable<any> {
    return this._logInservice.get(`${this.loginApi}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',


})
export class ShopServices {
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl ='https://fakestoreapi.com/products?limit=5'
  constructor(private _http: HttpClient ) { }

  getAllcategories(): Observable<any> {

    return this._http.get(`${this.apiUrl}`);
  }
}

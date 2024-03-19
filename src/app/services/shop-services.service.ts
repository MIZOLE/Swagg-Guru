import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',


})
export class ShopServices {

  private apiUrl = 'https://fakestoreapi.com/products?limit=9'
  constructor(private _http: HttpClient) { }

  getAllcategories(): Observable<any> {

    return this._http.get(`${this.apiUrl}`);
  }
}

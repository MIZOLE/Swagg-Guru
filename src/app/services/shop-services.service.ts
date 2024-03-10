import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopServicesService {
  private apiUrl ='https://fakestoreapi.com'
  constructor(private _http: HttpClient ) { }

  getAllcategories(){
    return this._http.get(`${this.apiUrl}/products/categories`);
  }
}

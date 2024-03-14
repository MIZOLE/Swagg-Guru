import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
providedIn: 'root'
})

export class juwelary {
  
  getClothes() {
    throw new Error('Method not implemented');
  }

  private juwelary = 'https://fakestoreapi.com/products/category/juwelary'

  constructor(private _HTTP: HttpClient) {}

  getMansClothes(): Observable<any> {
    return this._HTTP.get(`${this.juwelary}`);
  }
}

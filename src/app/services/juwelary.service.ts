import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class JuwelaryService {

  private juwelaryApi = 'https://fakestoreapi.com/products/category/jewelery'

  constructor(private _juwelaryservice: HttpClient) {}

  getJuwelary(): Observable<any> {
    return this._juwelaryservice.get(`${this.juwelaryApi}`);
  }
}

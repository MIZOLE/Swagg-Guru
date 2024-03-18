import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
providedIn: 'root'
})

export class juwelary {
  
  get<T>(arg0: string) {
    throw new Error('Method not implemented for juwelary service.');
}

  private juwelary_api = 'https://fakestoreapi.com/products?limit=9'

  constructor(private _HTTP: HttpClient) {}

  getJuwelary(): Observable<any> {
    return this._HTTP.get(`${this.juwelary_api}`);
  }
}

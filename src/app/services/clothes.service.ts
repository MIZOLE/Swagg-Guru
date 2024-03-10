import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ClothesService {
  get<T>(arg0: string) {
    throw new Error('Method not implemented at clothes service.');
  }

  private apiClothUrl ='https://fakestoreapi.com/products/categories'

  constructor() { }
}

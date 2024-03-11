import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class categoriesService {

    get<T>(arg0: string) {
        throw new Error('Method not implemented at clothes service.');
    }

    private apiClotheUrl = 'https://fakestoreapi.com/products/categories'
    constructor(private _catservice: HttpClient) { }

    getStock(): Observable<any> {
        return this._catservice.get(`${this.apiClotheUrl}`)
    }
}

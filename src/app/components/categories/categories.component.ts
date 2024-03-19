import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopServices } from '../../services/shop-services.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  imports: [
    CommonModule,
    RouterModule,
  ],

})
export class CategoriesComponent implements OnInit {
  categories: any;

  constructor(private _http: ShopServices) {}


  ngOnInit(): void {
    this.getAllCategories();
  }

getAllCategories() {
    this._http.getAllcategories().subscribe({
      next: (res: any) => {
        this.categories = res;

        console.log(this.categories)
      }, error(error: any) {
        console.log(error)
      }
    })
  }

}

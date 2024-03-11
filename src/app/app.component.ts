import { Component, OnInit } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { trackNav, getNav } from './store/core/core.actions';
import { CoreState } from './store/core/core.state';
import { ShopServices } from './services/shop-services.service';//this is my servce
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { categoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    HttpClientModule,
    CommonModule
  ]
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  store: any;
  categories: any;
  cate: any;

  constructor(private _http: ShopServices, private _catservice: categoriesService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getStock();
  }

  getAllCategories() {
    this._http.getAllcategories().subscribe({
      next: (res) => {
        this.categories = res;

        console.log(this.categories)
      }, error(error) {
        console.log(error)
      }
    })
  }

  getStock() {
    this._catservice.getStock().subscribe({
      next: (response: any) => {
        this.cate = response;

        console.log(this.cate)
      }, error(error: any) {
        console.log(error)
      }
    })
  }


  public addNav(event: Event) {
    console.log("event: ", event)
    const action_value = (event.target as HTMLInputElement).value;
    this.store.dispatch(new trackNav(action_value));
  }

  GetNav() {
    this.store.dispatch(new getNav());
  }
}

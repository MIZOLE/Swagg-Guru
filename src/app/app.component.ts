import { Component, OnInit } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { AddName, GetName } from './store/core/core.actions';
import { CoreState } from './store/core/core.state';
import { ShopServices } from './services/shop-services.service';//this is my servce
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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

  store: any;
  categories: any;

  constructor(private  _http: ShopServices, ) {}
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this._http.getAllcategories().subscribe({next: (res) => {
      this.categories = res;
      console.log(this.categories)
    }, error(error){
      console.log(error)
    }})
  }  

  // Trigger the reducer from cor
  public AddName(event:Event) {
    console.log("event: ",event)
    const name = (event.target as HTMLInputElement).value;
    this.store.dispatch(new AddName(name));
  }

  // Trigger the reducer from cor
  GetName() {
    this.store.dispatch(new GetName());
  }
}

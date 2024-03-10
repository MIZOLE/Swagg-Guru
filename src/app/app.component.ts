import { Component } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { AddName, GetName } from './store/core/core.actions';
import { CoreState } from './store/core/core.state';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private store: Store, ) {}

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

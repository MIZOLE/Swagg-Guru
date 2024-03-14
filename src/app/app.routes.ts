import { Routes } from '@angular/router';
import { juwelary } from './services/juwelary.service';
import { AppComponent } from './app.component';

export const routes: Routes = [

    { path: '', component: AppComponent },
    { path: 'juwelary', component: juwelary }

];

export class AppModule {}

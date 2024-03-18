import { Routes } from '@angular/router';
// import { juwelary } from './services/juwelary.service';
import { AppComponent } from './app.component';
import { JuwelaryComponent } from './components/juwelary/juwelary.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: '', component: AppComponent },
    { path: 'juwelary', component: JuwelaryComponent }

];

export class AppModule {}

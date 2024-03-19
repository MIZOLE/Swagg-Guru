import { RouterModule, Routes } from '@angular/router';
// import { juwelary } from './services/juwelary.service';
import { AppComponent } from './app.component';
import { JuwelaryComponent } from './components/juwelary/juwelary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categoriesService } from './services/categories.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [

    { path: 'home', component: AppComponent, pathMatch: "full" },
    {path: 'view', component: CategoriesComponent},
    { path: 'jewelary', component: JuwelaryComponent },
    { path: 'login', component: LoginComponent },


];
@NgModule({
    imports: [
  
      CommonModule,
      RouterModule.forRoot(routes)
    ], exports: [RouterModule],
    declarations: []
})

export class AppModule {}

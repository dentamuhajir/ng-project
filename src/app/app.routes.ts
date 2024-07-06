import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [

   // { path: "", redirectTo: "", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "root", component: AppComponent },
    { path: "other", component: OtherComponent},
    { path: 'category/:name',      component: CategoryComponent },
];

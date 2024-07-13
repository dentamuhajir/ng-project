import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { CategoryComponent } from './category/category.component';
import { Children1Component } from './other/children-1/children-1.component';
import { StoreComponent } from './store/store.component';
import { DetailProductComponent } from './store/detail-product/detail-product.component';
import { PostProductComponent } from './store/post-product/post-product.component';

export const routes: Routes = [

   // { path: "", redirectTo: "", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "root", component: AppComponent },
    { 
        path: "other", 
        component: OtherComponent,
        children: [{
            path: 'children-1',
            component: Children1Component,
        }]
    },
    { path: 'category/:name',component: CategoryComponent },
    { path: 'store', component: StoreComponent },
    { path: 'store/detail/:id', component: DetailProductComponent },
    { path: 'store/post/product', component: PostProductComponent },

];

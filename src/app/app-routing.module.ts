import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  {path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: '/Dashboard', pathMatch: 'full' }, //deafult Path
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'Categories', component: CategoriesComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'newproduct',component:AddProductComponent}
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

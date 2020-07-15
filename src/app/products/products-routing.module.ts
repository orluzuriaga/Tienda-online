import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path:'',// Redirige los productos
    component: ProductsComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:'list'
      },
      {
        path:'list',
        component: ListaProductosComponent
      },
      {
        path:'add',
        component:ProductAddComponent
      },
      {
        path:'edit/:id',
        component:ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

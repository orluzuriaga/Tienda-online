import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';


const routes: Routes = [

   {
     path:'productos',
    loadChildren:() => import('./products/products.module').then(n=> n.ProductsModule)
   },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'productos'


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

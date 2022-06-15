import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  
    {
      path:"product", component:ProductsComponent
      },
    {
      path:"sales", component:SaleComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

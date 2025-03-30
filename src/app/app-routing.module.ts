import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsAPIComponent } from './products-api/products-api.component';
import { ProductAPIDetailComponent } from './product-api-detail/product-api-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component : ProductsComponent},
  { path: 'products/:category/:productId', component : ProductDetailComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'productsAPI', component : ProductsAPIComponent},
  { path: 'productsAPI/:productId', component : ProductAPIDetailComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

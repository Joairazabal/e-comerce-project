import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { DetailProductComponent } from './modules/detail-product/detail-product.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes= [
  {path:'',component: LandingPageComponent },
  {path:'products', component: ProductsComponent },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail/:id', component: DetailProductComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

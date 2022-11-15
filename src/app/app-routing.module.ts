import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes= [
  {path:'',redirectTo: 'home', pathMatch:'full' },
  {path:'products', component: ProductsComponent },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

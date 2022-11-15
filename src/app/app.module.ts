import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerProductsComponent } from './modules/home/components/container-products/container-products.component';
import { CardProductComponent } from './modules/home/components/card-product/card-product.component';
import { SideBarComponent } from './modules/home/components/side-bar/side-bar.component';
import { NavBarComponent } from './modules/home/components/nav-bar/nav-bar.component';
import { ProductsComponent } from './modules/products/products.component';
import { AboutComponent } from './modules/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerProductsComponent,
    CardProductComponent,
    SideBarComponent,
    NavBarComponent,
    ProductsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

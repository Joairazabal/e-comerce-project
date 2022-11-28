import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerProductsComponent } from './modules/home/components/container-products/container-products.component';
import { CardProductComponent } from './modules/home/components/card-product/card-product.component';
import { NavBarComponent } from './modules/home/components/nav-bar/nav-bar.component';
import { ProductsComponent } from './modules/products/products.component';
import { AboutComponent } from './modules/about/about.component';
import { FormsModule } from '@angular/forms';
import { DetailProductComponent } from './modules/detail-product/detail-product.component';
import { SliderComponent } from './modules/home/components/slider/slider.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { SectionGenreComponent } from './modules/home/components/section-genre/section-genre.component';
import { BannerComponent } from './modules/home/components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerProductsComponent,
    CardProductComponent,
    NavBarComponent,
    ProductsComponent,
    AboutComponent,
    DetailProductComponent,
    SliderComponent,
    LandingPageComponent,
    SectionGenreComponent,
    BannerComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import product from 'src/app/models/products';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  //cambiar loading por un ouput que va mandar cada slider 
  loading: Boolean;
  products!: product[];
  titleMen= "Men's clothes";
  subtitleMen= "Within Ji Store you will find premium quality clothing of all sizes,world-renowned brands with excellent prices. We also have watches and accessories.";
  imgMen= "../../../assets/hombre.jpg";
  titleFem= 'womenswear';
  subtitleFem= 'Within Ji Store you will find premium quality clothing of all sizes,world-renowned brands with excellent prices. We also have watches and accessories."'
  imgFem= '../../../assets/mujer.jpg'
  routerMen= 'Mens'
  routerFem='Women'

  constructor(private albumService: ProductService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.setLoading()
    this.getAlbum();
  }

  getAlbum(): void {
    this.albumService.getAllProducts().subscribe((p) => (this.products = p));
  }

  setLoading(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

 
}

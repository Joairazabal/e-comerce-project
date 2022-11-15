import { Component, OnInit } from '@angular/core';
import product from 'src/app/models/products';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  products!: product[];

  constructor( private albumService:ProductService) { }

  ngOnInit(): void {
  this.getAlbum();
  }

  getAlbum():void{
    this.albumService.getAllProducts().subscribe(p=> this.products= p)
  }

}

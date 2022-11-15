import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import product from 'src/app/models/products';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  category:string='';
  products:product[]=[];

  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(el => this.category= el['category'])
    if(this.category){
      this.filterProducts()
      console.log(this.products)
    }else{
      this.getAllProducts()
    }
  }

  filterProducts():void{
  this.productService.filterCategory(this.category).subscribe(p=> this.products = p)
  }

  getAllProducts():void{
    this.productService.getAllProducts().subscribe(p=> this.products = p)
  }

}

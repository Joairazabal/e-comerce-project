import { Component, Input, OnInit } from '@angular/core';
import product from 'src/app/models/products';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-slider',
  styleUrls:['./slider.component.css'],
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
  @Input() type!: string;
  products!: product[];
  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void{
    let random= Math.floor(Math.random() * 16 )
    let random2= Math.floor(Math.random() * 16 )
    this.type !== 'offerts'?
    this.productsService.filterCategory(this.type).subscribe(p => this.products= p.slice(0,4)):
    
    this.productsService.getAllProducts().subscribe(p =>this.products= p.slice(6,10) )
    }

}

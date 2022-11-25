import { Component, OnInit, Input } from '@angular/core';
import product from 'src/app/models/products';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
})
export class CardProductComponent implements OnInit {

  @Input()
  product!: product;

  name!:string;
  constructor() {
 
   }

  ngOnInit(): void {
    this.cutTittle()
  }

  cutTittle():void{
    this.product.title?
    this.name=this.product.title.split(' ').slice(0,4).join(' '):
    null
  }
}

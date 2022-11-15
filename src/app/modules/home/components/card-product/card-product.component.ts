import { Component, OnInit, Input } from '@angular/core';
import product from 'src/app/models/products';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
})
export class CardProductComponent implements OnInit {

  @Input()
  product!: product;

  constructor() { }

  ngOnInit(): void {

  }

}

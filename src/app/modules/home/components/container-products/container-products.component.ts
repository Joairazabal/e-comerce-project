import { Component, OnInit, Input} from '@angular/core';
import product from 'src/app/models/products';

@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.css']
})
export class ContainerProductsComponent implements OnInit {

  @Input() products: product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

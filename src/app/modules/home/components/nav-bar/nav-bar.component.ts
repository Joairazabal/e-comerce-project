import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  constructor(private productsService: ProductService) { }

  categories:string[]= [];

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories():void{
    this.productsService.getAllCategories().subscribe(category=> this.categories = category)
  }

}

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  @Output() eventFilter= new EventEmitter<string>()
  categories:string[]= [];
  @Input() category:string="";

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories():void{
    this.productsService.getAllCategories().subscribe(category=> this.categories= category );
  }

  filterProducts(): void{
    this.eventFilter.emit(this.category)
  }

}

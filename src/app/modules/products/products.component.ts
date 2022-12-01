import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import product from 'src/app/models/products';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: product[] = [];
  category: string = '';
  @Input() genre: string= '';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((el) => (this.category = el['category']));
    this.route.queryParams.subscribe((el) => (this.genre = el['genre']));
    if (this.category) {
      this.category !== 'all'?
      this.filterProducts(this.category):
      this.getAllProducts();
    }
    else if(this.genre){
      this.filterGenre()
    }
    else {
      this.getAllProducts()
    }
  }

  filterProducts(category: string): void {
    category !== "all" && category !== ''?
    this.productService
      .filterCategory(category)
      .subscribe((p) => (this.products = p)):
    this.getAllProducts()
  }

  filterGenre(){
   if(this.genre === 'Mens'){
    this.productService.getAllProducts().subscribe((p) => (this.products= p.filter((el: product)=> el.title.includes('Mens')))); 
  }else{
    this.productService.getAllProducts().subscribe((p) => (this.products= p.filter((el: product)=> el.title.includes("Women's")))); 
  }
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((p) => (this.products= p));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import product from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string= "https://fakestoreapi.com/";


  constructor(private httpClient: HttpClient) { }

  getBaseUrl():string{
    return this.baseUrl
  }

  getAllProducts():Observable<product[]>{
    return this.httpClient.get<product[]>(`${this.baseUrl}products`)
  }
  getAllCategories():Observable<string[]>{
  return this.httpClient.get<string[]>(`${this.baseUrl}products/categories`)
  }
  filterCategory(category:string):Observable<product[]>{
    return this.httpClient.get<product[]>(`${this.baseUrl}products/category/${category}`);
  }
}

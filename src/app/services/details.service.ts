import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import product from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private baseUrl:string= "https://fakestoreapi.com/";


  constructor(private httpClient: HttpClient) { }

  getDetail(id:number):Observable<product>{
    return this.httpClient.get<product>(`${this.baseUrl}products/${id}`)
  }
}

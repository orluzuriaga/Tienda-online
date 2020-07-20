import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product';


const PRODUCTO_URL = 'http://localhost:3000/products'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${PRODUCTO_URL}`);
  }

  add(product:Product): Observable<Product>{
    return this.httpClient.post<Product>(`${PRODUCTO_URL}`, product);
  }


  getProduct(id:String):Observable<Product>{
    return this.httpClient.get<Product>(`${PRODUCTO_URL}/${id}`);

  }


  update(product:Product):Observable<Product>{
    return this.httpClient.put<Product>(`${PRODUCTO_URL}/${product.id}`, product);

  }
// 

  delete(id:string):Observable<Product>{
    return this.httpClient.delete<Product>(`${PRODUCTO_URL}/${id}`)
  }



}

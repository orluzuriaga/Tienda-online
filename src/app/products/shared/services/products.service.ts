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
    return this.httpClient.get<Product[]>(`${PRODUCTO_URL}`)
  }
}

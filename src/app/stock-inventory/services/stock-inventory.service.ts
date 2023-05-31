import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item, Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(private http: HttpClient) { }
  
  getCartItems(): Observable<Item[]> {
    return this.http
      .get<any>('./assets/data/db.json')
      .pipe(map((response) => response.cart));
  }

  getProductItems(): Observable<Product[]> {
    return this.http
      .get<any>('./assets/data/db.json')
      .pipe(map((response) => response.products));
  }
}
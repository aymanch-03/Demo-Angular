import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {
  constructor(private http: HttpClient){
   
  }

  getAllProducts() {
    return this.http.get<Array<any>>("https://fakestoreapi.com/products");
  }

  // deleteProduct(id: number): void {
  //   this.products = this.products.filter(product => product.id !== id);
  // }
}

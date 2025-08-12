import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit {
  products: Array<any> = [];

  constructor(private productService: Product){
    
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  handleDelete(id: number): void {
    let c = confirm("Are you sure you want to delete this product?");
    if (c) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }
}

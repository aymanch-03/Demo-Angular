import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit {
  products: Array<any> = [];

  constructor(){
  }

  ngOnInit(): void {
    this.products = [
      {id: 1, name: "Computer", price: 1000, selected: true},
      {id: 2, name: "Printer", price: 1200, selected: false},
      {id: 3, name: "Smart Phone", price: 980, selected: true},
    ]
  }

  handleDelete(id: number): void {
    let c = confirm("Are you sure you want to delete this product?");
    if(c){
      this.products = this.products.filter(p => p.id !== id);
    }
  }
}

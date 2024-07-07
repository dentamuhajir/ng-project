import { Component, OnInit } from '@angular/core';
import { ListProductService } from './list-product.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  listProduct: any[] = []
  listProductNew: any 

  constructor(private listProductService: ListProductService) {}
  
  ngOnInit(): void {
    this.listProduct = this.listProductService.getDummyProductList();
    this.listProductNew = this.listProductService.getProductList();  
    console.log(this.listProductNew)
  }
}

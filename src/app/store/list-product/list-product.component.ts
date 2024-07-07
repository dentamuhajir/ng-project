import { Component, OnInit } from '@angular/core';
import { ListProductService } from './list-product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  listProduct: any[] = []
  listProductNew: any 

  constructor(private listProductService: ListProductService) {}
  
  ngOnInit(): void {
    this.listProduct = this.listProductService.getDummyProductList();
    this.listProductService.getProductList().subscribe(response => {
      this.listProductNew = response
    });  
    console.log(this.listProductNew)
  }
}

import { Component, OnInit } from '@angular/core';
import { ListProductService } from './list-product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListProduct } from '../../../models/product.model';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  listProduct: any[] = []
  listProductNew: ListProduct[] = []

  constructor(private listProductService: ListProductService) {}
  
  ngOnInit(): void {
    this.listProduct = this.listProductService.getDummyProductList();

    this.getAllProduct()
  
    //console.log(this.listProductNew)
  }

  getAllProduct() {
    this.listProductService.getProductListMap().subscribe(
      (response) => {
        //console.log(response)
        this.listProductNew = response
      },
      (error) => {
        console.log('Error fetching product', error)
      }
    );  
  }

}

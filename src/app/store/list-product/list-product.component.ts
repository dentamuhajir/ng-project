import { Component, OnInit } from '@angular/core';
import { ListProductService } from './list-product.service';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  listProduct: any[] = []

  constructor(private listProductService: ListProductService) {}
  
  ngOnInit(): void {
    this.listProduct = this.listProductService.getDummyProductList();  
    console.log(this.listProduct)
  }
}

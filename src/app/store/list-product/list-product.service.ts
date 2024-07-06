import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListProductService implements OnInit {
  productList: Array<any> = []
  constructor() { }
  ngOnInit(): void {
    this.getDummyProductList();
  }

  getDummyProductList() {
    this.productList = [{
      name : "iPhone 16",
      description : "A new smartphone",
      price : "$1000"
    },
    {
      name : "Fender Telecaster",
      description : "A new electric guitar",
      price : "$1500"
    }];
    let listProduct = this.productList 
    return  listProduct
  }
}

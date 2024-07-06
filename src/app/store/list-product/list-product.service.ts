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
      name : "iPhone 15 Pro Max",
      description : "A new smartphone",
      price : "$1000"
    },
    {
      name : "Fender Telecaster",
      description : "A new electric guitar",
      price : "$1500"
    },
    {
      name : "RX King",
      description : "A new motorcycle ",
      price : "$1200"
    },
    {
      name : "Ketoprak",
      description : "A food",
      price : "$2"
    }];
    let listProduct = this.productList 
    return  listProduct
  }
}

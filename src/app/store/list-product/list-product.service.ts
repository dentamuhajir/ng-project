import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProductService implements OnInit {
  productList: Array<any> = []
  endpointURL: string = "https://api.escuelajs.co/api/v1/products?offset=0&limit=8"
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getDummyProductList()
    this.getProductList()
  }

  getProductList(): Observable<any> {
    return this.http.get<any>(`${this.endpointURL}`)
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

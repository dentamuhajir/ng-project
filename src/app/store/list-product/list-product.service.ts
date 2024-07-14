import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListProduct, Product } from '../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {
  productList: Array<any> = []

  endpointURL: string = "https://api.escuelajs.co/api/v1/products?offset=0&limit=8"
  constructor(private http: HttpClient) { }

  getProductList(): Observable<ListProduct[]> {
    return this.http.get<ListProduct[]>(`${this.endpointURL}`)
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

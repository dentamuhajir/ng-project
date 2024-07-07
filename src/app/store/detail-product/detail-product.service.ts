import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService implements OnInit{
  endpoint: string = "https://api.escuelajs.co/api/v1/products/"
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  getDetailProduct(id: number): Observable<any>{
    console.log(id)
    return this.http.get<any>(`${this.endpoint}`+ id)
  }
}

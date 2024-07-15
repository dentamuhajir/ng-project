import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailProductService } from './detail-product.service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {
  getID: any
  detailProduct: any 
  constructor(private route: ActivatedRoute,private detailProductService: DetailProductService) {
    // route.params.subscribe( (param: Params) => {
    //   let id = param["id"]
    //   this.getID = id
    // })
  }

  getIdParam(): void {
    this.getID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getIdParam()
    console.log(this.getID)
    this.detailProductService.getDetailProduct(this.getID).subscribe( response => {
      this.detailProduct = response
    })
    console.log(this.detailProduct)
  }
}

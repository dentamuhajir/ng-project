import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  public categoryName: string = '';
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const category = params["name"];
      //console.log(category);
      this.categoryName = category;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-product',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.css'
})
export class PostProductComponent implements OnInit{
  addProductForm : FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      productTitle:['', Validators.required],
      productEmail:['',[Validators.required,Validators.email]]
    })
     
  }
  onSubmitProduct() {
    if(this.addProductForm.valid) {
      console.log("valid")
    }
    //alert("onSubmitProduct triggered");
  }
}

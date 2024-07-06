import { Component } from '@angular/core';
import { ListProductComponent } from './list-product/list-product.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ListProductComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}

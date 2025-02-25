import { Component, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product!: Product;
}

import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe, ProductCardListComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  @Input({ transform: numberAttribute })
  id!: number;
  product!: Product;
  router = inject(Router);

  onBack = () => {
    this.router.navigate(['/products']);
  };
}

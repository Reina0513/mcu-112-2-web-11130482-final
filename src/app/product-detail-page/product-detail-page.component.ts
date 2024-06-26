import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  product!: Product;

  private router = inject(Router);

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getById(this.id).subscribe((item) => (this.product = item));
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}

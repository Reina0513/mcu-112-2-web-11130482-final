import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/shopping-cart-service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  router = inject(Router);

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  products!: Product[];

  ngOnInit(): void {
    this.productService = new ProductService();
    this.productService.getList().subscribe((item) => (this.products = item));
    console.log(this.products);
  }

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }

  onAdd(product: Product): void {
    this.cartService.addProduct(product);
  }
}

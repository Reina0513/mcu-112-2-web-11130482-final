import { Component, inject } from '@angular/core';
import { CartItem } from '../model/cartItem';
import { Product } from '../model/product';
import { CartService } from './../services/shopping-cart-service';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css',
})
export class ShoppingCartPageComponent {
  cartService = inject(CartService);

  cartItem!: CartItem[];

  ngOnInit(): void {
    this.cartService.getCart().subscribe((item) => (this.cartItem = item));
  }

  onAdd(product: Product) {
    this.cartService.addProduct(product);
  }

  onRemove(product: Product) {
    this.cartService.removeProduct(product);
  }

  pay(): void {
    alert('金額' + this.cartService.getCartMoneyCount());
    location.reload();
  }
}

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICartForm } from '../model/ICartForm';
import { CartItem } from '../model/cartItem';
import { Product } from '../model/product';
import { CartService } from './../services/shopping-cart-service';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css',
})
export class ShoppingCartPageComponent {
  cartService = inject(CartService);

  cartItem!: CartItem[];

  form = new FormGroup<ICartForm>({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    address: new FormControl<string | null>(null, { validators: [Validators.required] }),
    phone: new FormControl<number | null>(null, { validators: [Validators.required, Validators.pattern('^[0-9]*')] }),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }

  get phone(): FormControl<number | null> {
    return this.form.get('phone') as FormControl<number | null>;
  }

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
    if (this.cartService.getCartCount() > 0) {
      alert('結帳成功;金額' + this.cartService.getCartMoneyCount());
      location.reload();
    } else {
      alert('購物車為空,不能結帳');
    }
  }
}

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { CartItem } from './../model/cartItem';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _data: CartItem[] = [];
  private productService = inject(ProductService);

  getCart(): Observable<CartItem[]> {
    return of(this._data);
  }

  addProduct(product: Product): Observable<CartItem[]> {
    let productIndex = this._data.findIndex((item) => item.Product.id == product.id);
    if (productIndex == -1) {
      let id = this._data.length + 1;
      this._data.push(new CartItem({ id: id, Product: product, Quantity: 1 }));
    } else {
      this._data[productIndex].Quantity++;
    }
    return of(this._data);
  }

  removeProduct(product: Product): Observable<CartItem[]> {
    let productIndex = this._data.findIndex((item) => item.Product.id == product.id);
    if (this._data[productIndex].Quantity > 1) {
      this._data[productIndex].Quantity--;
    } else {
      this._data.splice(productIndex, 1);
    }
    return of(this._data);
  }

  getCartMoneyCount(): number {
    let total: number = 0;
    this._data.map((item) => {
      total += item.Quantity * item.Product.SalesVolume;
    });
    return total;
  }

  getCartCount(): number {
    let total: number = 0;
    this._data.map((item) => {
      total += item.Quantity;
    });
    return total;
  }

  removeCart(): Observable<CartItem[]> {
    this._data = [];
    return of(this._data);
  }
}

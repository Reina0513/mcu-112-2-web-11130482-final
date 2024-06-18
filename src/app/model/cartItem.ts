import { Product } from './product';

export class CartItem {
  constructor(initData?: Partial<CartItem>) {
    Object.assign(this, initData);
    this.Quantity = 1;
  }

  id!: number;
  Product!: Product;
  Quantity!: number;
}

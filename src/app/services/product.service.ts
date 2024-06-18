import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
    new Product({
      id: 1,
      ProductName: 'A',
      SalesVolume: 500,
      ProductPrice: 1000,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 2,
      ProductName: 'B',
      SalesVolume: 500,
      ProductPrice: 1000,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 3,
      ProductName: 'C',
      SalesVolume: 500,
      ProductPrice: 1000,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 4,
      ProductName: 'D',
      SalesVolume: 500,
      ProductPrice: 1000,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 4,
      ProductName: 'D',
      SalesVolume: 500,
      ProductPrice: 1000,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 4,
      ProductName: 'D',
      SalesVolume: 500,
      ProductPrice: 1000,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
  ];

  getById(productId: number): Observable<Product> {
    const product = this._data.find(({ id }) => id === productId)!;
    return of(product);
  }

  getList(): Observable<Product[]> {
    return of(this._data);
  }

  add(product: Product): Observable<Product> {
    const id = this._data.length === 0 ? 1 : Math.max(...this._data.map(({ id }) => id)) + 1;
    const newProduct = new Product({ ...product, id });
    this._data = [...this._data, newProduct];
    return of(newProduct);
  }

  remove(productId: number): Observable<Product> {
    const product = this._data.find(({ id }) => productId === id)!;
    this._data = [...this._data.filter(({ id }) => productId !== id)];
    return of(product);
  }
}

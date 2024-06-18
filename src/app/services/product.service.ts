import { Injectable } from '@angular/core';
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

  getById(productId: number): Product {
    return this._data.find(({ id }) => id === productId)!;
  }

  getList(): Product[] {
    return this._data;
  }
}

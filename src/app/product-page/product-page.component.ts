import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  products = [
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
  ];
}

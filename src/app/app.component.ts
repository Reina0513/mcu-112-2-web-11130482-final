import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = [
    new Product({
      id: 1,
      ProductName: 'A',
      SalesVolume: 500,
      ProductPrice: 1000,
      SpecialOffer: 500,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 2,
      ProductName: 'B',
      SalesVolume: 500,
      ProductPrice: 1000,
      SpecialOffer: 500,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 3,
      ProductName: 'C',
      SalesVolume: 500,
      ProductPrice: 1000,
      SpecialOffer: 500,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
    new Product({
      id: 4,
      ProductName: 'D',
      SalesVolume: 500,
      ProductPrice: 1000,
      SpecialOffer: 500,
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
    }),
  ];

  onSetNoData(): void {
    this.products = [];
  }

  onSetHasData(): void {
    this.products = [
      new Product({
        id: 1,
        ProductName: 'A',
        SalesVolume: 500,
        ProductPrice: 1000,
        SpecialOffer: 500,
        isShow: true,
        imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        createDate: new Date(),
      }),
      new Product({
        id: 2,
        ProductName: 'B',
        SalesVolume: 500,
        ProductPrice: 1000,
        SpecialOffer: 500,
        isShow: true,
        imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        createDate: new Date(),
      }),
      new Product({
        id: 3,
        ProductName: 'C',
        SalesVolume: 500,
        ProductPrice: 1000,
        SpecialOffer: 500,
        isShow: true,
        imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        createDate: new Date(),
      }),
      new Product({
        id: 4,
        ProductName: 'D',
        SalesVolume: 500,
        ProductPrice: 1000,
        SpecialOffer: 500,
        isShow: true,
        imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        createDate: new Date(),
      }),
    ];
  }
}

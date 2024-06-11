import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ProductName = 'A';
  SalesVolume = 500;
  ProductPrice = 1000;
  SpecialOffer = 500;
  isShow = true;
  imgUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
  createDate = new Date();
}

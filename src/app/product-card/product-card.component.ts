import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  ProductName = 'A';
  SalesVolume = '500';
  ProductPrice = '$1,000';
  SpecialOffer = '$800';
  isShow = true;

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}

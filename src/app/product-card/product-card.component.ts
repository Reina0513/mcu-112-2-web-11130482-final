import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() ProductName!: string;
  @Input() SalesVolume!: number;
  @Input({ transform: numberAttribute }) ProductPrice!: number;
  @Input({ transform: numberAttribute }) SpecialOffer!: number;
  @Input() isShow!: boolean;
  @Input() imgUrl!: string;

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}

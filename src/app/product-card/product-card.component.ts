import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute }) id!: number;
  @Input() ProductName!: string;
  @Input() SalesVolume!: number;
  @Input({ transform: numberAttribute }) ProductPrice!: number;
  @Input({ transform: numberAttribute }) SpecialOffer!: number;
  @Input({ transform: booleanAttribute }) isShow!: boolean;
  @Input() imgUrl!: string;

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}

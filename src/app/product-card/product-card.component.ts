import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';

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

  @Output() isShowChange = new EventEmitter<boolean>();

  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}

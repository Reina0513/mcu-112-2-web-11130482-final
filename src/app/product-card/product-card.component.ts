import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute }) id!: number;
  @Input() ProductName!: string;
  @Input() SalesVolume!: number;
  @Input({ transform: numberAttribute }) ProductPrice!: number;
  @Input({ transform: numberAttribute }) SpecialOffer!: number;
  @Input() imgUrl!: string;
  @Input() createDate!: Date;

  @Input({ transform: booleanAttribute }) isShow!: boolean;
  @Output() isShowChange = new EventEmitter<boolean>();

  @HostBinding('class')
  class = 'product-card';
  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }

  @Output()
  view = new EventEmitter<void>();

  @Output()
  add = new EventEmitter<void>();
}

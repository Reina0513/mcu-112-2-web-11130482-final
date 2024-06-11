export class Product {
  constructor(initData?: Partial<Product>) {
    Object.assign(this, initData);
    this.createDate = new Date();
  }

  id!: number;
  ProductName!: string;
  SalesVolume!: number;
  ProductPrice!: number;
  SpecialOffer!: number;
  isShow!: boolean;
  imgUrl!: string;
  createDate!: Date;
}

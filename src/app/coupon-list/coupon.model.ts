export class Coupon {
  public special: string;
  public deal: string;
  public exclusion: string;
  public price: number;

  constructor(special: string, deal: string, exclusion: string, price: number) {
    this.special = special;
    this.deal = deal;
    this.exclusion = exclusion;
    this.price = price;
  }
}

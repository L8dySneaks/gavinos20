import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CouponComponent implements OnInit {

  couponTitle = 'Special #1';
  couponDeal = 'HALF CLASSIC HOAGIE WITH FRIES & CAN OF POP';



  constructor() {
    this.couponDeal = Math.random() > 0.5 ? 'great deal' : 'shitty deal';
    console.log(Math.random());
  }

  ngOnInit(): void {
  }

  getCouponDeal() {
    return this.couponDeal;
  }

  getColor() {
    return this.couponDeal === 'great deal' ? 'green' : 'red';
  }

}

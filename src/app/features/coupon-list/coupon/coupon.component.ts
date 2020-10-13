import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Coupon } from '../coupon.model';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CouponComponent implements OnInit {

  coupons: Coupon[] = [
    new Coupon('Special #2', 'HALF CLASSIC HOAGIE WITH FRIES & CAN OF POP', '(Excludes Supreme)', 9.29),
    new Coupon('Special #1', 'SMALL PIZZA WITH 1 TOPPING & CAN OF POP', '', 9.29),
  ];

  // couponTitle = 'Special #1';
  // couponDeal = 'HALF CLASSIC HOAGIE WITH FRIES & CAN OF POP';

  constructor() {

  }

  ngOnInit(): void {
  }



}

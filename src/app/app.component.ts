import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allowNewCoupon = false;
  couponCreationStatus = 'No coupon was created';
  couponName = 'Coupon Test';
  username = '';
  couponCreated = false;
  coupons = ['Coupon #1', 'Coupon #2'];
  showDetails = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewCoupon = true;
    }, 2000);
  }

  onCreateCoupon() {
    this.couponCreated = true;
    this.coupons.push(this.couponName);
    this.couponCreationStatus = 'Coupon was created Name is ' + this.couponName;
  }

  onUpdateCouponName(event: Event) {
    this.couponName = (<HTMLInputElement> event.target).value;
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement> event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}

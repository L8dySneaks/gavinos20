import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CouponComponent implements OnInit {

  @Input() deal: string;
  @Output() liked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}

import { SpecialDetailService } from './special-detail.service';
import { Component, Input, OnInit } from '@angular/core';
import { Special } from '../special.model';

@Component({
  selector: 'app-special-detail',
  templateUrl: './special-detail.component.html',
  styleUrls: ['./special-detail.component.scss'],
  providers: [SpecialDetailService]
})
export class SpecialDetailComponent implements OnInit {

  special: Special;
  @Input() id: number;

  constructor(private specialDetailService: SpecialDetailService) { }

  ngOnInit(): void {
    this.special = this.specialDetailService.getSpecial(this.id);
  }

}

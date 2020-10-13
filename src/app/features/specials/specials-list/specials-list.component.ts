import { Component, OnInit } from '@angular/core';
import { Special } from '../special.model';
import { SpecialService } from '../special.service';

@Component({
  selector: 'app-specials-list',
  templateUrl: './specials-list.component.html',
  styleUrls: ['./specials-list.component.scss']
})
export class SpecialsListComponent implements OnInit {

    specials: Special[];

  constructor(
    private specialService: SpecialService
  ) {}

  ngOnInit(): void {
    this.specials = this.specialService.getSpecials();
  }

}

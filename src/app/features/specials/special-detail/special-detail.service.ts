import { Special } from './../special.model';
import { Injectable } from '@angular/core';
import { SpecialService } from '../special.service';

@Injectable()
export class SpecialDetailService {

  private special: Special;

  constructor(private specialService: SpecialService) { }

  getSpecial(id: number): Special {
    const specials = this.specialService.getSpecials();

    if (!this.special) {
      this.special = specials.find(special => special.id === id);
    }
    return this.special;
  }
}



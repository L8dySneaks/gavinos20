import { Injectable } from '@angular/core';
import { Special } from './special.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor() { }

  getSpecials(): Special[] {
    return [
      {id: 1, deal: 'Best hoagie ever', price: 9.99},
      {id: 2, deal: 'Best pizza ever', price: 7.99},
      {id: 3, deal: 'Best wings ever', price: 19.99},
    ];
  }
}

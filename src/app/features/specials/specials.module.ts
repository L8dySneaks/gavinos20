import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialsListComponent } from './specials-list/specials-list.component';



@NgModule({
  declarations: [SpecialsListComponent],
  imports: [
    CommonModule
  ],
  exports: [SpecialsListComponent]
})
export class SpecialsModule { }

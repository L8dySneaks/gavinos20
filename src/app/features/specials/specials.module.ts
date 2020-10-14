import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialsListComponent } from './specials-list/specials-list.component';
import { SpecialDetailComponent } from './special-detail/special-detail.component';



@NgModule({
  declarations: [SpecialsListComponent, SpecialDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [SpecialsListComponent]
})
export class SpecialsModule { }

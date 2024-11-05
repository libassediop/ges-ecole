import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';


@NgModule({
  declarations: [
    PersonnelComponent
  ],
  imports: [
    CommonModule,
    PersonnelRoutingModule
  ]
})
export class PersonnelModule { }

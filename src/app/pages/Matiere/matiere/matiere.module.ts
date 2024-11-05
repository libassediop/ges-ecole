import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatiereRoutingModule } from './matiere-routing.module';
import { MatiereComponent } from './matiere.component';


@NgModule({
  declarations: [
    MatiereComponent
  ],
  imports: [
    CommonModule,
    MatiereRoutingModule
  ]
})
export class MatiereModule { }

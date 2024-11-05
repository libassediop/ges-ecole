import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseurComponent } from './professeur.component';

const routes: Routes = [
  { path: 'professeur', component: ProfesseurComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }

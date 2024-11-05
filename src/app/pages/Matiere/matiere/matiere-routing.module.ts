import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatiereComponent } from './matiere.component';

const routes: Routes = [
  { path: 'matiere', 
  component: MatiereComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereRoutingModule { }

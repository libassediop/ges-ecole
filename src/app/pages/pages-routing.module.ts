import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import {ImagesComponent} from "./images/images.component";
import {EcoleComponent} from "./ecole/ecole.component";
import {SuperAdminComponent} from "./super-admin/super-admin.component";

import { LayoutComponent } from '../layouts/layout.component';
import { DashboardsModule } from './dashboards/dashboards.module';

import { ClasseModule } from './Classe/classe/classe.module';
import { EtudiantModule } from './Etudiant/etudiant/etudiant.module';
import { ParentModule } from './Parent/parent/parent.module';
import { MatiereModule } from './Matiere/matiere/matiere.module';
import { PersonnelModule } from './Personnel/personnel/personnel.module';
import { ProfesseurModule } from './Professeur/professeur/professeur.module';
// import { ClasseComponent } from './Classe/classe/classe.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'image', component: ImagesComponent },
  { path: 'ecole', component: EcoleComponent },
  { path: 'super-admin', component: SuperAdminComponent },
  { path: 'classe', loadChildren: () => ClasseModule },
  { path: 'etudiant', loadChildren: () => EtudiantModule },
  { path: 'parent', loadChildren: () => ParentModule },
  { path: 'matiere', loadChildren: () => MatiereModule },
  { path: 'personnel', loadChildren: () => PersonnelModule },
  { path: 'professeur', loadChildren: () => ProfesseurModule},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

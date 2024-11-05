import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import {ImagesComponent} from "./images/images.component";
import {EcoleComponent} from "./ecole/ecole.component";
import {SuperAdminComponent} from "./super-admin/super-admin.component";

import { LayoutComponent } from '../layouts/layout.component';
import { DashboardsModule } from './dashboards/dashboards.module';

import { ClasseModule } from './Classe/classe/classe.module';
// import { ClasseComponent } from './Classe/classe/classe.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'image', component: ImagesComponent },
  { path: 'ecole', component: EcoleComponent },
  { path: 'super-admin', component: SuperAdminComponent },
  { path: 'classe', loadChildren: () => ClasseModule },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { Page404Component } from './extrapages/page404/page404.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // tslint:disable-next-line: max-line-length
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule), canActivate: [AuthGuard] },
  { path: 'classe', loadChildren: () => import('./pages/Classe/classe/classe.module').then(m => m.ClasseModule) },
  { path: 'parent', loadChildren: () => import('./pages/Parent/parent/parent.module').then(m => m.ParentModule) },
  { path: 'etudiant', loadChildren: () => import('./pages/Etudiant/etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: 'professeur', loadChildren: () => import('./pages/Professeur/professeur/professeur.module').then(m => m.ProfesseurModule) },
  { path: 'matiere', loadChildren: () => import('./pages/Matiere/matiere/matiere.module').then(m => m.MatiereModule) },
  { path: 'personnel', loadChildren: () => import('./pages/Personnel/personnel/personnel.module').then(m => m.PersonnelModule) },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

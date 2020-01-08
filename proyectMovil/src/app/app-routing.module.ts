import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'adddoctor',
    loadChildren: () => import('./adddoctor/adddoctor.module').then( m => m.AdddoctorPageModule)
  },
  {
    path: 'updatedoctor',
    loadChildren: () => import('./updatedoctor/updatedoctor.module').then( m => m.UpdatedoctorPageModule)
  },
  {
    path: 'searchuddoctor',
    loadChildren: () => import('./searchuddoctor/searchuddoctor.module').then( m => m.SearchuddoctorPageModule)
  },
  {
    path: 'addpatient',
    loadChildren: () => import('./addpatient/addpatient.module').then( m => m.AddpatientPageModule)
  },
  {
    path: 'searchudpatient',
    loadChildren: () => import('./searchudpatient/searchudpatient.module').then( m => m.SearchudpatientPageModule)
  },
  {
    path: 'updatepatient',
    loadChildren: () => import('./updatepatient/updatepatient.module').then( m => m.UpdatepatientPageModule)
  },
  {
    path: 'addmedicalcheck',
    loadChildren: () => import('./addmedicalcheck/addmedicalcheck.module').then( m => m.AddmedicalcheckPageModule)
  },
  {
    path: 'searchudmedicalcheck',
    loadChildren: () => import('./searchudmedicalcheck/searchudmedicalcheck.module').then( m => m.SearchudmedicalcheckPageModule)
  },
  {
    path: 'updatemedicalcheck',
    loadChildren: () => import('./updatemedicalcheck/updatemedicalcheck.module').then( m => m.UpdatemedicalcheckPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

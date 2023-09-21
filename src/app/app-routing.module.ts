import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TechnicalTestRoutingModule } from './components/technical-test/technical-test-routing.module';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

/* const routes: Routes = [
    {
      path: 'technical-tests',
      loadChildren: () => import('./components/technical-test/technical-test.module').then((m) => m.TechnicalTestModule),
    },
    {
      path: '**',
      redirectTo: 'technical-tests',
      pathMatch: 'full',
    },
]; */

@NgModule({
  imports: [RouterModule.forRoot(routes), TechnicalTestRoutingModule],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class AppRoutingModule { }
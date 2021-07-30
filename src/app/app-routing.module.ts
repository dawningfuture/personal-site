import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mission',
    loadChildren: () =>
      import('./pages/mission/mission-page.module').then(
        (module) => module.MissionPageModule
      ),
  },
  {
    path: 'code',
    loadChildren: () =>
      import('./pages/code/code-page.module').then(
        (module) => module.CodePageModule
      ),
  },
  {
    path: 'dance',
    loadChildren: () =>
      import('./pages/dance/dance-page.module').then(
        (module) => module.DancePageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact-page.module').then(
        (module) => module.ContactPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-page.module').then(
        (module) => module.HomePageModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

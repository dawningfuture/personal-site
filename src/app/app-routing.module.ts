import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

interface AppRouteData {
  sidenavLink: {
    label: string;
    order: number; // NOTE (July 30, 2021): 0-indexed descending sort order
  };
}

interface AppRoute extends Route {
  data?: AppRouteData;
}

export const appRoutes: AppRoute[] = [
  {
    path: 'mission',
    loadChildren: () =>
      import('./pages/mission/mission-page.module').then(
        (module) => module.MissionPageModule
      ),
    data: {
      sidenavLink: {
        label: 'Mission',
        order: 1,
      },
    },
  },
  {
    path: 'code',
    loadChildren: () =>
      import('./pages/code/code-page.module').then(
        (module) => module.CodePageModule
      ),
    data: {
      sidenavLink: {
        label: 'Code',
        order: 2,
      },
    },
  },
  {
    path: 'dance',
    loadChildren: () =>
      import('./pages/dance/dance-page.module').then(
        (module) => module.DancePageModule
      ),
    data: {
      sidenavLink: {
        label: 'Dance',
        order: 3,
      },
    },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact-page.module').then(
        (module) => module.ContactPageModule
      ),
    data: {
      sidenavLink: {
        label: 'Contact',
        order: 4,
      },
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-page.module').then(
        (module) => module.HomePageModule
      ),
    data: {
      sidenavLink: {
        label: 'Home',
        order: 0,
      },
    },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

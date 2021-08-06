import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

interface AppRouteData {
  sidenavLink: {
    label: string;
    order: number; // NOTE (July 30, 2021): 0-indexed descending sort order
    path: string;
  };
  heroBackgroundUrl: string;
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
        path: '/mission',
      },
      heroBackgroundUrl:
        'https://media.matthewthompson.us/personal-site/mission-hero-background.jpg',
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
        path: '/code',
      },
      heroBackgroundUrl:
        'https://media.matthewthompson.us/personal-site/code-hero-background.jpg',
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
        path: '/dance',
      },
      heroBackgroundUrl:
        'https://media.matthewthompson.us/personal-site/dance-hero-background.mp4',
    },
  },
  {
    path: 'connect',
    loadChildren: () =>
      import('./pages/connect/connect-page.module').then(
        (module) => module.ConnectPageModule
      ),
    data: {
      sidenavLink: {
        label: 'Connect',
        order: 4,
        path: '/connect',
      },
      heroBackgroundUrl:
        'https://media.matthewthompson.us/personal-site/connect-hero-background.jpg',
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
        path: '/',
      },
      heroBackgroundUrl:
        'https://media.matthewthompson.us/personal-site/home-hero-background.jpg',
    },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

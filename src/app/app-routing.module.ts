import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

interface AppRouteData {
  sidenavLink: {
    label: string;
    order: number; // NOTE: 0-indexed descending sort order
    path: string;
  };
  hero?: {
    imageUrl?: string;
    videoSources?: {
      mp4Url: string;
      hlsTsUrl: string;
      hlsFmp4Url: string;
    };
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
        path: '/mission',
      },
      hero: {
        imageUrl:
          'https://media.awholevibe.us/personal-site/pages/mission/mission-hero-background.jpg',
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
        path: '/code',
      },
      hero: {
        imageUrl:
          'https://media.awholevibe.us/personal-site/pages/code/code-hero-background.jpg',
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
        path: '/dance',
      },
      hero: {
        videoSources: {
          mp4Url:
            'https://media.awholevibe.us/personal-site/pages/dance/dance-hero-background/dance-hero-background.mp4',
          hlsTsUrl:
            'https://media.awholevibe.us/personal-site/pages/dance/dance-hero-background/ts/dance-hero-background.m3u8',

          hlsFmp4Url:
            'https://media.awholevibe.us/personal-site/pages/dance/dance-hero-background/fmp4/dance-hero-background.m3u8',
        },
      },
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
      hero: {
        imageUrl:
          'https://media.awholevibe.us/personal-site/pages/connect/connect-hero-background.jpg',
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
        path: '/',
      },
      hero: {
        imageUrl:
          'https://media.awholevibe.us/personal-site/pages/home/home-hero-background.jpg',
      },
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

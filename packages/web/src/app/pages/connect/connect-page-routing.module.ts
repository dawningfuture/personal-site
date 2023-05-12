import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolver } from 'src/app/core/resolvers/hero-image.resolver';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectPageComponent,
    resolve: {
      heroImageUrl: HeroImageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectPageRoutingModule {}

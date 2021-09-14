import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolver } from 'src/app/core/resolvers/hero-image.resolver';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      heroImageUrl: HeroImageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

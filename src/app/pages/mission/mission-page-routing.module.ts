import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroImageResolver } from 'src/app/core/resolvers/hero-image.resolver';
import { MissionPageComponent } from 'src/app/pages/mission/mission-page.component';

const routes: Routes = [
  {
    path: '',
    component: MissionPageComponent,
    resolve: {
      heroImageUrl: HeroImageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionPageRoutingModule {}
